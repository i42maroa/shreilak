export type ResourceType = 'YOUTUBE' | 'LIRYC' | 'GENIALLY' | 'YOUTUBE' | 'PDF';

export interface ResourceInterface{
    id:string;
    url:string;
    name:string;
    type:ResourceType;
    description:string;
    time:number;
}
