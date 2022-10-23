import { Injectable } from '@nestjs/common';
import { StationFollowsModel } from './station-follows.model';
import { InjectModel } from '@nestjs/sequelize';
import { AddStationDto } from './dto/add-station.dto';
import { HttpService } from '@nestjs/axios';
import {StationsHistoryService} from "../stations-history/stations-history.service";
import * as dayjs from "dayjs";

@Injectable()
export class StationFollowsService {
  constructor(
    @InjectModel(StationFollowsModel)
    private stationFollowsRepository: typeof StationFollowsModel,
    private httpService: HttpService,
    private stationHistoryService: StationsHistoryService
  ) {}
  async addFollowingStation(dto: AddStationDto) {
    const station = await this.stationFollowsRepository.create(dto);
    return station;
  }
  async getAllFollowingStations() {
    const stations = await this.stationFollowsRepository.findAll({
      include: { all: true },
    });
    const followingStations = stations.map(async (savedStation) => {
      const returnedCountry = await this.httpService.axiosRef.get(
        `https://waqi.info/rtdata/ranking/${
          savedStation.country
        }.json?t=${Date.now()}`,
      );
      return {
        ...returnedCountry?.data?.cities?.filter(
          (country) => country.city === savedStation.city,
        )[0],
        id: savedStation.id,
      };
    });
    const followingStationsResponse = await Promise.all(followingStations);
    const history = followingStationsResponse?.map(async(station)=>{
      return await this.stationHistoryService.createHistory({
        country:station.country as string,
        city:station.city as string,
        aqi:+station.station.a as number,
        latitude:station.station.g[0] as number,
        longitude:station.station.g[1]as number,
        date:dayjs(station.station.u as string).toDate() as Date,
        stationId:station.id as number
      })
    })
    return followingStationsResponse;
  }
  async deleteFollowingStation(stationId: number) {
    const id = stationId;
    const deletedStation = await this.stationFollowsRepository.destroy({
      where: { id },
    });
    return deletedStation;
  }
}
