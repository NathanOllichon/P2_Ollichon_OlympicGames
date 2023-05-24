import { Component, OnInit } from '@angular/core';
import { OlympicService } from 'src/app/core/services/olympic.service';
import { catchError, of } from 'rxjs';
import { DetailledNationForNgxCharts } from 'src/app/core/models/nationForsNgxCharts.model copy';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nation-chart',
  templateUrl: './nation-chart.component.html',
  styleUrls: ['./nation-chart.component.scss']
})
export class NationChartComponent implements OnInit {

  callWorkFine: boolean = true;
  data !: DetailledNationForNgxCharts;
  anytab: any[] = [];
  error: any;
  nationName!: string;
  nbMedals!: number;
  nbAthletes!: number;

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

  constructor(private olympicService: OlympicService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.nationName = params['country'];
      this.initNationChart();
    });


  }


  // private newMethod() {
  //   this.initNationChart();
  // }

  private initNationChart() {
    this.olympicService
      .loadInitialData()
      .pipe()
      .subscribe(nations => {
        //throw "Nation not defined, go back and select a country please";
        this.data = this.olympicService.mapForNationNgxChart(nations, this.nationName);
        if (this.data.series === undefined) {
          throw "Nation not defined, go back and select a country please";
        } else {

          this.anytab.push(this.data);
          console.log(this.anytab);
          this.callWorkFine = true;
        }

        this.nbMedals = this.olympicService.countNbMedals(this.data);
        this.nbAthletes = this.olympicService.countNbAthletes(nations, this.nationName);
      }
      ),
      catchError((error) => {
        this.error = error;
        console.log('Caught in CatchError. Throwing error => ' + error);
        this.callWorkFine = false; //for ngif on html, show error
        return of();
      });
  }

  public retour() {
    // navigation ""
    this.router.navigate(['']);
  }
}
