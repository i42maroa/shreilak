import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NavbarListButtonInterface } from '../../../data/interface/navbar-list.interface';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  navbarOptions$ = new BehaviorSubject<NavbarListButtonInterface[]>([]);
  navbarShow$ = new BehaviorSubject<boolean>(false);

  constructor() {
    this.setOptions(
        [
          {
            url:"/history",
            title:"Mi historia"
          },
          {
            url:"/chapter",
            title:"Capítulos"
          },
          {
            url:'/about',
            title:'Sobre mí'
          }
        ]
    )
  }

  setOptions(options: NavbarListButtonInterface[]){
    this.navbarOptions$.next(options);
  }

  setShowNavbar(show:boolean){
    this.navbarShow$.next(show);
  }

  setToggleShow(){
    this.navbarShow$.next(!this.navbarShow$.value);
  }

  get options(){
    return this.navbarOptions$.asObservable
  }
}
