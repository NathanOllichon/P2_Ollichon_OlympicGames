import { Injectable } from '@angular/core';
import { NationForNgxCharts } from '../models/nationForsNgxCharts.model';
import { Nation } from '../models/nation.model';
import { DetailledNationForNgxCharts } from '../models/nationForsNgxCharts.model copy';

@Injectable({
  providedIn: 'root'
})
export class MapperDatasForNgxChartsService {

  constructor() { }

    mapForTotalNgxChart(value: Nation[]) {
      var tabNations: NationForNgxCharts[] = [];
  
      value.forEach((element) => {
        tabNations.push(new NationForNgxCharts(element));
      })
      return (tabNations);
    }
  
    mapForNationNgxChart(nations: Nation[], nationName: string) {
      return new DetailledNationForNgxCharts(nations, nationName);
    }
  
}
