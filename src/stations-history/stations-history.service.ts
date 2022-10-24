import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { StationHistoryModel } from './stations-history.model';
import { AddStationDto } from './dto/create-history.dto';

@Injectable()
export class StationsHistoryService {
  constructor(
    @InjectModel(StationHistoryModel)
    private stationsHistoryRepository: typeof StationHistoryModel,
  ) {}

  async createHistory(dto: AddStationDto) {
    try {
      const createdHistory = await this.stationsHistoryRepository.create({
        ...dto,
      });
      return createdHistory;
    } catch (e) {
      console.log({ e });
    }
  }
  async getHistoryByFollowStationId(id: number) {
    try {
      const historyItems = await this.stationsHistoryRepository.findAll({
        where: { stationId: id },
      });
      return historyItems;
    } catch (e) {
      console.log({ e });
    }
  }
  async getAllHistory() {
    try {
      const allHistory = await this.stationsHistoryRepository.findAll();
      return allHistory;
    } catch (e) {
      console.log({ e });
    }
  }
}
