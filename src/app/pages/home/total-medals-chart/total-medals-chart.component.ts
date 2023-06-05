import { Component, OnInit } from '@angular/core';
import { LegendPosition } from '@swimlane/ngx-charts';
import { OlympicService } from 'src/app/core/services/olympic.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NationForNgxCharts } from 'src/app/core/models/nationForsNgxCharts.model';

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

  constructor(private olympicService: OlympicService, private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {

    this.olympicService
    .loadInitialData()
    .subscribe({
      next: (nations) => {
        const tabNation: NationForNgxCharts[] = this.olympicService.mapForTotalNgxChart(nations);
        this.datasNations = tabNation;

        this.nbJOs = this.olympicService.countNbJOs(nations);
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

}
