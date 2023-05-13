import { Nation } from "./nation.model";
import { IParticipation } from "./participation.model";

export interface INationForNgxCharts {
  name: string;
  value: number;
}

export class NationForNgxCharts implements INationForNgxCharts {
  name!: string;
  value!: number;
  
  constructor(nation: Nation) {
    this.name = nation.country;
    
    var medalsCount: number = 0; 
    nation.participations.forEach((participation:IParticipation)=> {
        medalsCount += participation.medalsCount;
    });
    this.value = medalsCount;
  }
  

}