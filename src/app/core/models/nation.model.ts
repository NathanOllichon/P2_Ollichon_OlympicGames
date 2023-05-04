
// sert à rien ! c'est le modèle du json !

import { IParticipation } from "./participation.model";

 
export class Nation {
  id!: number;
  country!: string;
  participations!: IParticipation[];
} 


//devient mon interface ?
export interface IDataForNgxCharts {
  multi : [
    {
      name: string;
      series: [
        {
          years: string,
          medals: number,
        }
      ]
    }
  ]
}

export interface INationForNgxCharts {
  name: string;
  value: number;
        }

export class NationForNgxCharts implements INationForNgxCharts{
  name: string;
  value: number;

  constructor(name: string, value:number) {
      this.name = name,
      this.value = value
  }

}

//constructeur objetc forngxChart, implement IdataForNgxCharts, constructor return une var qui déclenche 
//une erreur qui affiche values non conformes et pas le chart.
//penser dans le service au loading à cause de l'asynchrone tant qu'on a pas chargé la data !
// tester au debuggeur ? tenter un async await d'un sleep 30'000 pour montrer en live ? => si oui branche séparée.


  // "id": 3,
  // "country": "United States",
  // "participations": [


  // name: 'Germany',
  // series: [
  //   {
  //     years: '1990',
  //     medals: 64,
  //   },

  //Olympics json *first entry
  // "id": 1,
  // "country": "Italy",
  // "participations": [
  //   {
  //     "id": 1,
  //     "year": 2012,
  //     "city": "Londres",
  //     "medalsCount": 28,
  //     "athleteCount": 372
  //   },