import { Injectable } from '@angular/core';
import { Nation } from '../models/nation.model';
import { DetailledNationForNgxCharts } from '../models/nationForsNgxCharts.model copy';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  constructor() { }

  countNbJOs(tabNations: Nation[]) {
    var duplicatedYearJOs: number[] = [];

    tabNations.forEach(nation => {
      nation.participations.forEach(participation =>
        duplicatedYearJOs.push(participation.year)
      )
    });

    //Set object delete duplicated datas.
    const uniqueYearsJO = Array.from(new Set(duplicatedYearJOs));
    
    return uniqueYearsJO.length;
  }

  countNbMedals(nation: DetailledNationForNgxCharts) {
    var countMedals: number = 0;
    nation.series.forEach(JO => {
      countMedals += JO.value;
    })

    return countMedals;
  }

  countNbAthletes(tabNations: Nation[], nationChoice: string) {
    var countAthletes: number = 0;
    tabNations.forEach(nation => {
      if (nation.country == nationChoice) {
        nation.participations.forEach(participation =>
          countAthletes += participation.athleteCount
        )
      }
    });
    
    return countAthletes;
  }
}
