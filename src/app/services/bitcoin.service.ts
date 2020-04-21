import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Statistic } from '../models/statistic.model';

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {

  constructor(private http: HttpClient) { }

  public getRate(coins: number): Observable<number> {
    return this.http.get<number>(`https://blockchain.info/tobtc?currency=USD&value=${coins}`);
  }

  public getStatistics(type: string): Observable<Statistic> {
    return this.http.get<any>(`https://api.blockchain.info/charts/${type}?timespan=5months&format=json&cors=true`)
      .pipe(map(res => {
        return {
          title: res.name || '',
          description: res.description || '',
          unit: res.unit || '',
          data: res.values.map(value => [new Date(value.x * 1000), value.y]) || []
        }
      }));
  }

}
