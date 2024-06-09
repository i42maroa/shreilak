export interface ResourceInterface{
    id:string;
    name:string,
    description?:string,
    text?:string,
    images:Images[],
    resources:Resources[]
}

export interface Resources{
    url:string,
    name:string
}

export interface Images{
    url:string,
    alt:string
}


export const EMPTY_RESSOURCE:ResourceInterface={
    id:'',
    name:'',
    images:[],
    resources:[]
}
