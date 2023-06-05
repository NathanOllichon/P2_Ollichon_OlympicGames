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

}
