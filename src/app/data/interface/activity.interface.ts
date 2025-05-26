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

export interface ActivityWithChapterInterface extends ActivityInterface{
    objectives:{
        id:number;
        chapters:{
            id:number;
            title:string;
        }
    }
}
