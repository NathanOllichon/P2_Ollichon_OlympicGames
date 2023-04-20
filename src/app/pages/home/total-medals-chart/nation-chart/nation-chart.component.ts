import { Component, OnInit } from '@angular/core';
import { multi } from '../fakes-datas/FakeNationDatas';

@Component({
  selector: 'app-nation-chart',
  templateUrl: './nation-chart.component.html',
  styleUrls: ['./nation-chart.component.scss']
})
export class NationChartComponent implements OnInit {
  multi: any[] | undefined;
  view: [number, number] = [700, 300];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Population';
  timeline: boolean = true;

  constructor() {
    Object.assign(this, { multi });
  }

  ngOnInit(): void {
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  // onActivate(data): void {
  //   console.log('Activate', JSON.parse(JSON.stringify(data)));
  // }

  // onDeactivate(data): void {
  //   console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  // }
}
