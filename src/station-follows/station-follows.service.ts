import { Injectable } from '@nestjs/common';
import { StationFollowsModel } from './station-follows.model';
import { InjectModel } from '@nestjs/sequelize';
import { AddStationDto } from './dto/add-station.dto';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class StationFollowsService {
  constructor(
    @InjectModel(StationFollowsModel)
    private stationFollowsRepository: typeof StationFollowsModel,
    private httpService: HttpService,
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
      return {...returnedCountry?.data?.cities?.filter(
        (country) => country.city === savedStation.city,
      )[0],
      id:savedStation.id
      };
    });
    return await Promise.all(followingStations);
  }
  async deleteFollowingStation(stationId: number) {
    const id = stationId;
    const deletedStation = await this.stationFollowsRepository.destroy({
      where: { id },
    });
    return deletedStation;
  }
}
