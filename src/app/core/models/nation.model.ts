import { Serie } from "./nationForsNgxCharts.model copy";
import { IParticipation } from "./participation.model";


export class Nation {
  id!: number;
  country!: string;
  participations!: IParticipation[];
}
