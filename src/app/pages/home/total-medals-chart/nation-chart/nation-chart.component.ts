import { Component, OnInit } from '@angular/core';
import { multi } from '../fakes-datas/FakeNationDatas';

@Component({
  selector: 'app-nation-chart',
  templateUrl: './nation-chart.component.html',
  styleUrls: ['./nation-chart.component.scss']
})
export class NationChartComponent implements OnInit {
  multi: any = multi;
  
  data : any; //not any, should create object and interface. 


  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'Medals';
  xAxisLabel: string = 'JO';
  timeline: boolean = true;

  constructor() {
  }

  ngOnInit(): void {
    // .suscribe at one observable ? onselect totalchart, map/tap observable. suscribe here and pass to "this.data = value;
    // data : elementNeeded;"
    // issue, load for one particular country ! pass into URL ?
  }

}
