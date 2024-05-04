export interface ResourceInterface{
  id:string;
  name:string,
  description?:string,
  text?:string,
  images:Images[],
  resources:Resources[]
}

export interface Resources{
  url:string
}

export interface Images{
  url:string,
  alt:string
}
