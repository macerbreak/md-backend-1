import { Module } from '@nestjs/common';
import { StationsHistoryService } from './stations-history.service';
import { StationsHistoryController } from './stations-history.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {StationHistoryModel} from "./stations-history.model";

@Module({
  providers: [StationsHistoryService],
  controllers: [StationsHistoryController],
  imports:[SequelizeModule.forFeature([StationHistoryModel])],
  exports:[StationsHistoryService]
})
export class StationsHistoryModule {}
