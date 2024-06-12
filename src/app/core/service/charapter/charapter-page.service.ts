import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RessourceService } from '../ressource/ressource.service';
import { ChapterInterface } from '../../../data/interface/chapter.interface';
import { CHAPTERS } from '../../../data/chapters.data';

const MAX_PAGE = 2;
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
    chapter$ = new BehaviorSubject<ChapterInterface>(CHAPTERS[0]);

    constructor(
        private ressourceService_: RessourceService) {
        this.pageNumber$.subscribe(p => {
            this.nextPageAvailable$.next(p < MAX_PAGE - 1);
            this.previousPageAvailable$.next(p > START_PAGE);
        })
    }

    setPage(numPage:number){
        if(numPage >= START_PAGE && numPage < MAX_PAGE ){
            this.pageNumber$.next(numPage);
            this.ressourceService_.setChapterPrevious(numPage);
            this.chapter$.next(CHAPTERS[numPage]);
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

    get getChapter(){
        return this.chapter$;
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
