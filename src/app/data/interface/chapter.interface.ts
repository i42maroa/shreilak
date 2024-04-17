import { ObjectiveInteface } from "./objective.interface";
import { ResourceInterface } from "./resource.interface";

export interface ChapterInterface{
  title:string;
  history:string;
  objectives:ObjectiveInteface[];
}
