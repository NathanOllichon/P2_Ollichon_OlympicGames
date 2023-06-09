import { Component, OnInit } from '@angular/core';
import { LegendPosition } from '@swimlane/ngx-charts';
import { OlympicService } from 'src/app/core/services/olympic.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NationForNgxCharts } from 'src/app/core/models/nationForsNgxCharts.model';
import { CounterService } from 'src/app/core/services/counter.service';
import { MapperDatasForNgxChartsService } from 'src/app/core/services/mapper-datas-for-ngx-charts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-total-medals-chart',
  templateUrl: './total-medals-chart.component.html',
  styleUrls: ['./total-medals-chart.component.scss']
})
export class TotalMedalsChartComponent implements OnInit {

  //for error management in html side
  callWorkFine: boolean = true;
  error?: string;

  datasNations!: NationForNgxCharts[];
  nbJOs?: number;

  // options ngx-charts-pie-chart
  gradient: boolean = true;
  showLegend: boolean = false;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: LegendPosition = LegendPosition.Below;
  nationDatas!: Subscription;

  constructor(private olympicService: OlympicService, private counterService: CounterService, private mapperDatasToNgxService: MapperDatasForNgxChartsService, private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {

    this.nationDatas = this.olympicService
    .loadInitialData()
    .subscribe({
      next: (nations) => {
        const tabNation: NationForNgxCharts[] = this.mapperDatasToNgxService.mapForTotalNgxChart(nations);
        this.datasNations = tabNation;

        this.nbJOs = this.counterService.countNbJOs(nations);
        this.callWorkFine = true;
    },
      error: (e:Error) => {
        this.error = e.message;
        this.callWorkFine = false;
      }
    }
    )

  }

  onSelect(data: NationForNgxCharts): void {
    this.router.navigate(['nationchart', { country: data.name }]);
  }

  route404(){
    this.router.navigate(['404']);
  }

  ngOnDestroy() {
    this.nationDatas.unsubscribe();
  }

}
