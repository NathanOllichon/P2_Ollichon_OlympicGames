import { Component, OnInit } from '@angular/core';
import { single } from './fakes-datas/FakeTotalDatas';
import { LegendPosition } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-total-medals-chart',
  templateUrl: './total-medals-chart.component.html',
  styleUrls: ['./total-medals-chart.component.scss']
})
export class TotalMedalsChartComponent implements OnInit {

  constructor() { 
    Object.assign(this, { single });
  }

  ngOnInit(): void {
    //http get datas for json ?
  }

  
  //single is the constant with informations. Maybe to 'cast' into another datas template ? for give it in chart.
  single: any[] | undefined;
  view: [number, number] = [700, 400];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: LegendPosition = LegendPosition.Below;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
  };

  // onSelect(data): void {
  //   console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  // }

  // onActivate(data): void {
  //   console.log('Activate', JSON.parse(JSON.stringify(data)));
  // }

  // onDeactivate(data): void {
  //   console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  // }

}
