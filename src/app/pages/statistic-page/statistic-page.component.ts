import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { BitcoinService } from 'src/app/services/bitcoin.service';
import { Chart } from 'src/app/models/chart.model';

@Component({
  selector: 'statistic-page',
  templateUrl: './statistic-page.component.html',
  styleUrls: ['./statistic-page.component.scss']
})
export class StatisticPageComponent implements OnInit, OnDestroy {

  charts: Chart[] = [];
  subscriptions: Subscription[] = [];
  
  constructor(private bitcoinService: BitcoinService) { }

  ngOnInit(): void {
    const chartRequsts: {type: string, color?: string}[] = [
      { type: 'market-price' },
      { type: 'trade-volume', color: 'green' },
      { type: 'avg-block-size', color: 'red' },
      { type: 'n-transactions', color: 'purple' } 
    ];
    chartRequsts.map(chartRequst => {
      this._createChart(chartRequst.type, chartRequst.color);
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.map(subscription => {
      subscription.unsubscribe();
    });
  }

  private _createChart(statisticType: string, color: string = 'blue'): void {
    let chart: Chart = {
      title: '',
      description: '',
      type: 'AreaChart',
      data: [],
      columnNames: [],
      width: '100%',
      height: '200',
      // formatters: [
      //   {
      //     formatter: new google.visualization.DateFormat({ formatType: 'medium' }),
      //     colIndex: 1
      //   }
      // ],
      options: {
        colors: [color],
        chartArea: { left: 0, top: 20, width: '100%', height: '200' },
        titleTextStyle: { fontSize: 16 },
        legend: { position: 'none' },
        hAxis: {
          textPosition: 'none',
          gridlines: { count: 0, color: 'transparent' }
        },
        vAxis: {
          textPosition: 'none',
          // gridlines: { count: 0, color: 'transparent' }
        }
      }
    };

    const subscription = this.bitcoinService.getStatistics(statisticType).subscribe(
      statistic => {
        chart.title = statistic.title;
        chart.description = statistic.description;
        chart.data = statistic.data;
        chart.columnNames = ['Date', statistic.unit];

        if (chart.data.length) this.charts.push(chart);
      },
      err => {
        console.log(`Error: Could not get statistics for ${statisticType}\n`, err)
      });
    this.subscriptions.push(subscription);
  }

}
