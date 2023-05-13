import { Nation } from "./nation.model";
import { IParticipation } from "./participation.model";

export interface IDetailledNationForNgxCharts {
  name: string;
  series: Serie[];
}

export class DetailledNationForNgxCharts implements IDetailledNationForNgxCharts {
  name!: string;
  series!: Serie[];

  constructor(nation: Nation[], nationToFind: string) {
    nation.forEach(element => {
      if (element.country == nationToFind) {
        this.name = element.country;
        this.series = [];

        element.participations.forEach((participation: IParticipation) => {
          this.series.push(new Serie(participation.year, participation.medalsCount));
        });

      }
    })
  }

}


export class Serie {
  name!: string;
  value!: number;

  constructor(name: number, value: number) {
    this.name = name.toString();
    this.value = value;
  }
}
