
import { IParticipation } from "./participation.model";

 
export class Nation {
  id!: number;
  country!: string;
  participations!: IParticipation[];
} 

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