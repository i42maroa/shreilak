import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MAP_RESSOURCES } from '../../../data/ressources.data';
import { EMPTY_RESSOURCE, ResourceInterface } from '../../../data/interface/resource.interface';


@Injectable({
  providedIn: 'root'
})
export class RessourceService {

  private ressource$ = new BehaviorSubject<ResourceInterface | undefined>(EMPTY_RESSOURCE);

  constructor() { }


  loadRessource(id:string){
    const newRessource = MAP_RESSOURCES.get(id);

    newRessource ? this.ressource$.next(newRessource) : this.ressource$.next(undefined) ; //TODO SEND TO 404 page
  }

  get ressource(){
    return this.ressource$
  }
}
