import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { NationForNgxCharts } from '../models/nationForsNgxCharts.model';
import { Nation } from '../models/nation.model';
import { DetailledNationForNgxCharts } from '../models/nationForsNgxCharts.model copy';

@Injectable({
  providedIn: 'root',
})
export class OlympicService {
  private olympicUrl = './assets/mock/olympic.json';

  constructor(private http: HttpClient) { }

  //I would keep that in service because the tap (*or next) contains the observer of my http request. 
  //on fututre if someone else want to use there datas, he can reUse that service
  loadInitialData() {   
    return this.http
      .get<any>(this.olympicUrl)
      .pipe(
        catchError((error)=>{
          throw error;
        }));
  }

  //TODO rename format to map, add an mapper.class ? YES ! //TODO
  mapForTotalNgxChart(value: Nation[]) {
    var tabNations: NationForNgxCharts[] = [];

    value.forEach((element) => {
      tabNations.push(new NationForNgxCharts(element));
    })
    return (tabNations);
  }

  mapForNationNgxChart(nations: any, nationName: string) {
    return new DetailledNationForNgxCharts(nations, nationName);
  }


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
