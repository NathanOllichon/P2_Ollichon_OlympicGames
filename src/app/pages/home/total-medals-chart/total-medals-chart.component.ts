import { Component, OnInit } from '@angular/core';
//import { single } from './fakes-datas/FakeTotalDatas';
import { LegendPosition, Color, ScaleType } from '@swimlane/ngx-charts';
import { OlympicService } from 'src/app/core/services/olympic.service';
import { NationForNgxCharts } from 'src/app/core/models/nation.model';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-total-medals-chart',
  templateUrl: './total-medals-chart.component.html',
  styleUrls: ['./total-medals-chart.component.scss']
})
export class TotalMedalsChartComponent implements OnInit {
  //single:any[] | undefined;

  datasNations!: NationForNgxCharts[];

  // options
  gradient: boolean = true;
  showLegend: boolean = false;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: LegendPosition = LegendPosition.Below;

  //for custom color we can use color and #code here, don't forgot to add colorScheme on html !
  // colorScheme: Color = { 
  //     domain: ['purple','pink', 'blue', 'black', 'red'],  //TODO maybe change color?
  //     group: ScaleType.Ordinal, 
  //     selectable: true,
  //     name: 'Customer Usage', 
  // };

  constructor(private olympicService: OlympicService,  private route: ActivatedRoute,
    private router: Router  ) {
  }

  ngOnInit(): void {
    //this.single = single;

    this.olympicService
      .loadInitialData()
      .subscribe(
        val => {
          console.log(val);
          const tabNation: NationForNgxCharts[] = this.olympicService.formatForTotalNgxChart(val);
          this.datasNations = tabNation;
          console.log(this.datasNations);
        }
      );
  }

  onSelect(data: NationForNgxCharts): void {
    //route to chart 2 with data.
    //onInit modif datas
    
    // https://www.javaguides.net/2019/06/navigate-to-another-page-with-button-in-angular.html
    //Router.
    console.log('Select');    
    this.router.navigate(['nationchart']);    
  }

}