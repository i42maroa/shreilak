import { FlagInterface } from "./flag.interface";

export type ResourceType = 'YOUTUBE' | 'LIRYC' | 'GENIALLY' | 'YOUTUBE' | 'PDF';

export interface ResourceInterface{
    id:string;
    url:string;
    name:string;
    type:ResourceType;
    description:string;
    time:number;
    flags:FlagInterface[];
}

export interface ResourceSupabaseInterface extends ResourceInterface{
    resourcesFlags:ResourcesFlagsInterface[];
}

interface ResourcesFlagsInterface{
    flags:FlagInterface;
}
