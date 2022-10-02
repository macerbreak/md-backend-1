import { Module } from '@nestjs/common';
import { StationFollowsService } from './station-follows.service';
import { StationFollowsController } from './station-follows.controller';
import {StationFollowsModel} from "./station-follows.model";
import {SequelizeModule} from "@nestjs/sequelize";

@Module({
  providers: [StationFollowsService],
  controllers: [StationFollowsController],
  imports:[
    SequelizeModule.forFeature([StationFollowsModel]),
  ],

})
export class StationFollowsModule {}
