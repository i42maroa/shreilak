import { ActivityInterface } from "./activity.interface";

export interface ObjectiveInteface{
    id:number;
    title:string;
    description:string;
    activities:ActivityInterface[];
    id_chapter:number;
}
