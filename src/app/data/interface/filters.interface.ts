import { ResourceType } from "./resource.interface";

export interface FilterResourceInterface {
    name:string;
    types:ResourceType[];
    flags:string[];
}

export interface FilterResourceSupabaseInterface{
    flagsnames:string[];
    namesearch:string;
    types:string[]
}
export interface TypesFilterInterface {
    value:ResourceType;
    name:string;
}


export const DEFAULT_RESOURCES_TYPE:ResourceType[] = [
    'GENIALLY','LIRYC','PDF','YOUTUBE'
]

export const DEFAULT_RESOURCES_FILTERS:FilterResourceInterface ={
    name:'',
    types:DEFAULT_RESOURCES_TYPE,
    flags:[]
}

export const RESOURCE_TYPES_FILTER:TypesFilterInterface[] = [
    {
        name:"Youtube",
        value:'YOUTUBE'
    },
    {
        name:'Pdf',
        value:'PDF'
    },
    {
        name:"Lyric",
        value:'LIRYC'
    },
    {
        name:"Genially",
        value:'GENIALLY'
    }
]
