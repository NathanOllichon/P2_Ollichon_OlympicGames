import { Component, OnInit } from '@angular/core';
import { OlympicService } from 'src/app/core/services/olympic.service';
import { of } from 'rxjs';
import { DetailledNationForNgxCharts } from 'src/app/core/models/nationForsNgxCharts.model copy';
import { ActivatedRoute, Router } from '@angular/router';
import { CounterService } from 'src/app/core/services/counter.service';
import { MapperDatasForNgxChartsService } from 'src/app/core/services/mapper-datas-for-ngx-charts.service';

@Component({
  selector: 'app-nation-chart',
  templateUrl: './nation-chart.component.html',
  styleUrls: ['./nation-chart.component.scss']
})
export class NationChartComponent implements OnInit {

  callWorkFine: boolean = true;
  error?: string;

  data !: DetailledNationForNgxCharts;
  nationSelectedMedalTab: any[] = [];
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

  constructor(private olympicService: OlympicService, private counterService: CounterService,  private mapperDatasToNgxService: MapperDatasForNgxChartsService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.nationName = params['country'];
      this.initNationChart();
    });
  }

  private initNationChart() {
    this.olympicService
      .loadInitialData()
      .pipe()
      .subscribe({
        next: (nations) => {
          this.data = this.mapperDatasToNgxService.mapForNationNgxChart(nations, this.nationName);
          if (this.data.series === undefined) {
            this.retour();
          } else {
            this.nationSelectedMedalTab.push(this.data);
            this.callWorkFine = true;
          }
          this.nbMedals = this.counterService.countNbMedals(this.data);
          this.nbAthletes = this.counterService.countNbAthletes(nations, this.nationName);
        },
        error: (e: Error) => {
          this.error = e.message;
          this.callWorkFine = false;
          return of();
        }
      });
  }

  public retour() {
    this.router.navigate(['']);
  }
}
