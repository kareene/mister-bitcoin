import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {

  constructor() { }

  public async getRate(coins: number): Promise<number> {
    const res = await axios.get(`https://blockchain.info/tobtc?currency=USD&value=${coins}`);
    return res.data;
  }

  public async getStatistics(type: string): Promise<{title: string, description: string, unit: string, data: [Date, number][]}> {
    const res = await axios.get(`https://api.blockchain.info/charts/${type}?timespan=5months&format=json&cors=true`);
    var statistics = {
      title: res.data.name,
      description: res.data.description,
      unit: res.data.unit,
      data: res.data.values.map(value => {
        return [new Date(value.x * 1000), value.y];
      })
    }
    return statistics
  }

}
