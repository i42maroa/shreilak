export type ButtonType = 'GO_BACK' | 'GO_AHEAD' | 'EMPTY' ;

export interface ButtonInterface {
  type:ButtonType;
  text:string;
  url:string;
  animation:boolean;
}
