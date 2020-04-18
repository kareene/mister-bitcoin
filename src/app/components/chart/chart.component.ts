import { Component, Input } from '@angular/core';
import { Chart } from 'src/app/models/chart.model';

@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent {

  @Input() chart: Chart;

}
