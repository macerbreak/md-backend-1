import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { StationFollowsService } from './station-follows.service';
import { AddStationDto } from './dto/add-station.dto';

@Controller('station-follows')
export class StationFollowsController {
  constructor(private stationFollowsService: StationFollowsService) {}
  @Post()
  addStation(@Body() addStationDto: AddStationDto) {
    return this.stationFollowsService.addFollowingStation(addStationDto);
  }
  @Get()
  getStations() {
    return this.stationFollowsService.getAllFollowingStations();
  }
  @Delete()
  deleteStation(@Body() stationId: number) {
    return this.stationFollowsService.deleteFollowingStation(stationId);
  }
}
