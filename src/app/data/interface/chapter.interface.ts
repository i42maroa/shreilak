import { ObjectiveInteface } from "./objective.interface";

export interface ChapterInterface{
    id:number;
    title:string;
    image:string;
    imageAlt:string;
    classColor:string;
    history:string;
    color:string;
    objectives:ObjectiveInteface[];
}
