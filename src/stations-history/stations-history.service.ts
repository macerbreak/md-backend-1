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
}
