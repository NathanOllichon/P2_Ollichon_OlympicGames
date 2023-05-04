import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nation-chart',
  templateUrl: './nation-chart.component.html',
  styleUrls: ['./nation-chart.component.scss']
})
export class NationChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("onInit NationChart");
  }

}
