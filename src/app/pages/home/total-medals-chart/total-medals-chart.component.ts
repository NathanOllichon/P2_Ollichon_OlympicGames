import { Component, OnInit } from '@angular/core';
import { LegendPosition } from '@swimlane/ngx-charts';
import { OlympicService } from 'src/app/core/services/olympic.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NationForNgxCharts } from 'src/app/core/models/nationForsNgxCharts.model';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-total-medals-chart',
  templateUrl: './total-medals-chart.component.html',
  styleUrls: ['./total-medals-chart.component.scss']
})
export class TotalMedalsChartComponent implements OnInit {

  callWorkFine: boolean = true;
  datasNations!: NationForNgxCharts[];
  error: any;
  nbJOs: number = 0;

  // options
  gradient: boolean = true;
  showLegend: boolean = false;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: LegendPosition = LegendPosition.Below;

  //for custom color we can use color and #code here, don't forgot to add colorScheme on html !
  // colorScheme: Color = { 
  //     domain: ['purple','pink', 'blue', 'black', 'red'],
  //     group: ScaleType.Ordinal, 
  //     selectable: true,
  //     name: 'Customer Usage', 
  // };

  constructor(private olympicService: OlympicService, private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {

    this.initTotalChart();

  }

  private initTotalChart() {
    this.olympicService
      .loadInitialData()
      .pipe()
      .subscribe({
        next: (nations) => {
          const tabNation: NationForNgxCharts[] = this.olympicService.mapForTotalNgxChart(nations);
          this.datasNations = tabNation;

          this.nbJOs = this.olympicService.countNbJOs(nations);
          //throw "dividing by 0 it's impossible !!! Shame on JS";
          this.callWorkFine = true;
        },
        error: (e) => {
          console.log("erreur here !!! " + e);
        }
      }
      );
    // ,
    // catchError(
    //   (error:Error)=>{
    //   this.error = error;
    //   console.log('Caught in CatchError. Throwing error => ' + error)
    //   this.callWorkFine = false; //for ngif on html, show error
    //   return of();
    // })
  }

  onSelect(data: NationForNgxCharts): void {
    this.router.navigate(['nationchart', { country: data.name }]);
  }

}