import { Controller, Get, Param, Post } from '@nestjs/common';
import { StationsHistoryService } from './stations-history.service';

@Controller('stations-history')
export class StationsHistoryController {
  constructor(private stationHistoryService: StationsHistoryService) {}
  @Get('/:id')
  getHistoryByFollowStationId(@Param('id') id: number) {
    return this.stationHistoryService.getHistoryByFollowStationId(id);
  }
  @Get()
  getAllHistory() {
    return this.stationHistoryService.getAllHistory();
  }
}
