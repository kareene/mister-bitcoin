import { Component, OnInit } from '@angular/core';
import { BitcoinService } from 'src/app/services/bitcoin.service';
import { Chart } from 'src/app/models/chart.model';

@Component({
  selector: 'statistic-page',
  templateUrl: './statistic-page.component.html',
  styleUrls: ['./statistic-page.component.scss']
})
export class StatisticPageComponent implements OnInit {

  charts: Chart[] = [];

  constructor(private bitcoinService: BitcoinService) { }

  ngOnInit(): void {
    this._createChart('market-price');
    this._createChart('trade-volume', 'green');
    this._createChart('avg-block-size', 'red');
    this._createChart('n-transactions', 'purple');
  }

  private async _createChart(statisticType: string, color: string = 'blue'): Promise<void> {
    let chart: Chart = {
      title: '',
      description: '',
      type: 'AreaChart',
      data: [],
      columnNames: [],
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

    try {
      const statistics = await this.bitcoinService.getStatistics(statisticType);

      chart.title = statistics.title;
      chart.description = statistics.description;
      chart.data = statistics.data;
      chart.columnNames = ['Date', statistics.unit];

      if (chart.data.length) this.charts.push(chart);
      
    } catch (error) {
      console.log(`Error: Could not get statistics for ${statisticType}\n`, error)
    }
  }

}
