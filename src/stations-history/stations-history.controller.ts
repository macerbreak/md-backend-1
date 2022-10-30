import {Controller, Get, Param, Post, Sse} from '@nestjs/common';
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
  // @Sse("/real-history")
  // getRealHistory(){
  //   const eventSource = new EventSource(`https://airnet.waqi.info/airnet/sse/historic/daily/227467?specie=pm25`)
  //   eventSource.onmessage = (message) => {
  //     return message
  //   }
  // }
}
