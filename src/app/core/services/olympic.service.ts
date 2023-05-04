import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Nation, NationForNgxCharts } from '../models/nation.model';
//import { IParticipation } from '../models/participation.model';

@Injectable({
  providedIn: 'root',
})
export class OlympicService {
  //private olympicUrl = './fakeURLForThrowError';
  private olympicUrl = './assets/mock/olympic.json';
  private olympics$ = new BehaviorSubject<any>(undefined);
  private nbMedals!: number;
  private nationForNgxCharts!: NationForNgxCharts;

  constructor(private http: HttpClient) { }

  //I would keep that in service because the tap (*or next) contains the observer of my http request. 
  //on fututre if someone else want to use there datas, he can reUse that service
  loadInitialData() {

    return this.http
      .get<Nation[]>(this.olympicUrl)
      .pipe(
        tap(() =>{
          new Error();
          //nothing, jus for keep the call API into this service for future reuse.
        },
          catchError((error, caught) => {
            // TODO: improve error handling
            console.error("erreur" + error);
            // can be useful to end loading state and let the user know something went wrong
            //TODO add image if we catch en error
            // https://stackoverflow.com/questions/43199642/how-to-throw-error-from-rxjs-map-operator-angular 
            //How enlever le hidden sur notre element loading/error, or see error message at screen or other thinks ?
            //Maybe => document.getElementById("awesome").hidden = false;
            this.olympics$.next(null);
            return caught;
          })
        )
      )
  }


  formatForTotalNgxChart(value: Nation[]) {
    var tabNations : NationForNgxCharts[] = [];
    
    value.forEach((element) => {
      this.nbMedals = 0;
      element.participations.forEach(participation =>
        this.nbMedals += participation.medalsCount
      )

      tabNations.push(new NationForNgxCharts(element.country, this.nbMedals));
    })
    return (tabNations);
  }


  getOlympics() {
    return this.olympics$.asObservable();
  }


  // save with tap !!!
  // loadInitialData() {
  //   return this.http
  //     .get<Nation[]>(this.olympicUrl)
  //     .pipe(
  //       //My value should become a Nation ! constructeur dans nation ! 
  //       tap((value) => {
  //         this.nationForNgxCharts = this.formatForTotalNgxChart(value);
  //       },
  //         catchError((error, caught) => {
  //           // TODO: improve error handling
  //           console.error(error);
  //           // can be useful to end loading state and let the user know something went wrong
  //           this.olympics$.next(null);
  //           return caught;
  //         })
  //       )
  //     )
  // }

}
