import { Injectable } from '@nestjs/common';
import {HttpService} from "@nestjs/axios";
import {firstValueFrom} from "rxjs";

const options = {
  method: 'GET',
  url: 'https://skyscanner44.p.rapidapi.com/autocomplete',
  params: {query: 'berlin'},
  headers: {
    'X-RapidAPI-Key': 'bc110d2466mshf25f5076bf892a9p1361a1jsnd369a18fb81b',
    'X-RapidAPI-Host': 'skyscanner44.p.rapidapi.com'
  }
};

@Injectable()
export class AppService {
  constructor(private httpService:HttpService){}
  async getHello(): Promise<any> {
    // const url = 'http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=json';
    // const { data } = await this.httpService.axiosRef.get("http://localhost:5001/users");
    const response =
        await this.httpService.axiosRef.get("http://localhost:5001/users")
    console.log({response})
    return response?.data;
  }
}
