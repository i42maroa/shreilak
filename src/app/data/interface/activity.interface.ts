import { ResourceInterface } from "./resource.interface";

export interface ActivityResourceInterface{
    resources:ResourceInterface;
}
export interface ActivityInterface{
    id:number;
    title:string,
    description?:string,
    text?:string,
    image:string,
    imageAlt:string,
    activitiesResources:ActivityResourceInterface[];
    id_objective:number;
}

export const ACTIVITY_EMPTY:ActivityInterface = {
    id:0,
    title:'',
    image:'',
    imageAlt:'',
    activitiesResources:[],
    id_objective:0
}

