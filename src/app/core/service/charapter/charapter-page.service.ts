import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const MAX_PAGE = 1;
const START_PAGE = 0;

export interface buttonInterface{
    title:string,
    show:boolean
}

@Injectable({
    providedIn: 'root'
})
export class CharapterPageService {

    nextPageAvailable$ = new BehaviorSubject<boolean>(false);
    previousPageAvailable$ = new BehaviorSubject<boolean>(false);
    pageNumber$ = new BehaviorSubject<number>(0);

    constructor() {
        this.pageNumber$.subscribe(p => {
            this.nextPageAvailable$.next(p < MAX_PAGE - 1);
            this.previousPageAvailable$.next(p > START_PAGE);
        })
    }

    setPage(numPage:number){
        if(numPage > START_PAGE && numPage < MAX_PAGE ){
            this.pageNumber$.next(numPage)
        }
    }

    incrementPage(){
        if (this.nextPageAvailable$.value){
            this.pageNumber$.next( +this.pageNumber$.value +1);
        }
    }

    decrementPage(){
        if (this.previousPageAvailable$.value){
            this.pageNumber$.next( +this.pageNumber$.value -1);
        }
    }

    get getPageNumber(){
        return this.pageNumber$;
    }

    get getIsNextPageAvailable(){
        return this.nextPageAvailable$;
    }

    get getIsPreviousPageAvailable(){
        return this.previousPageAvailable$;
    }
}
