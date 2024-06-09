import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NavbarListButtonInterface } from '../../../data/interface/navbar-list.interface';
import { CHAPTER_PATH, HISTORY_PATH } from '../../../app.routes';

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
                    url:  HISTORY_PATH,
                    title:"NAVBAR.OPTIONS.HISTORY"
                },
                {
                    url:  CHAPTER_PATH,
                    title:"NAVBAR.OPTIONS.CHAPTERS"
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
