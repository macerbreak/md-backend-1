import { Injectable } from '@nestjs/common';
import {StationFollowsModel} from "./station-follows.model";
import {InjectModel} from "@nestjs/sequelize";
import {AddStationDto} from "./dto/add-station.dto";

@Injectable()
export class StationFollowsService {
    constructor(@InjectModel(StationFollowsModel) private stationFollowsRepository:typeof StationFollowsModel){}
    async addFollowingStation(dto:AddStationDto){
        const station  = await this.stationFollowsRepository.create(dto)
        return station
    }
    async getAllFollowingStations() {
        const stations = await this.stationFollowsRepository.findAll({include:{all:true}})
        return stations
    }
    async deleteFollowingStation(stationId:number) {
        const id = stationId
        const deletedStation = await this.stationFollowsRepository.destroy({where:{id}})
        return deletedStation
    }
}
