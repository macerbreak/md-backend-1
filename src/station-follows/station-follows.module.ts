import { Module } from '@nestjs/common';
import { StationFollowsService } from './station-follows.service';
import { StationFollowsController } from './station-follows.controller';
import { StationFollowsModel } from './station-follows.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { HttpModule } from '@nestjs/axios';

@Module({
  providers: [StationFollowsService],
  controllers: [StationFollowsController],
  imports: [SequelizeModule.forFeature([StationFollowsModel]), HttpModule],
})
export class StationFollowsModule {}
