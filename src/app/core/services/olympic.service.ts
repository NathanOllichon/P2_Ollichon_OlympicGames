import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OlympicService {
  private olympicUrl = './assets/mock/olympic.json';

  constructor(private http: HttpClient) { }

  loadInitialData() {   
    return this.http
      .get<any>(this.olympicUrl)
      .pipe(
        catchError((error)=>{
          throw error;
        }));
  }

}
