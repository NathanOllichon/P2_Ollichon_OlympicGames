import { Component, OnInit } from '@angular/core';
import { LegendPosition} from '@swimlane/ngx-charts';
import { OlympicService } from 'src/app/core/services/olympic.service';
import { NationForNgxCharts } from 'src/app/core/models/nation.model';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-total-medals-chart',
  templateUrl: './total-medals-chart.component.html',
  styleUrls: ['./total-medals-chart.component.scss']
})
export class TotalMedalsChartComponent implements OnInit {

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
    //observable.tap or map, new object, one nation with Participations[]
    //new service ?
    this.router.navigate(['nationchart']);    
  }

}