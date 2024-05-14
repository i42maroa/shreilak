import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const MAX_PAGE = 3;
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
    const page = (numPage > START_PAGE && numPage < MAX_PAGE )? numPage : START_PAGE;
    this.pageNumber$.next(page)
  }

  incrementPage(){
    const newPage = this.pageNumber$.value < MAX_PAGE ? this.pageNumber$.value +1 : MAX_PAGE;
    this.pageNumber$.next(newPage);
  }

  decrementPage(){
    const newPage = this.pageNumber$.value > START_PAGE ? this.pageNumber$.value -1 : START_PAGE;
    this.pageNumber$.next(newPage);
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
