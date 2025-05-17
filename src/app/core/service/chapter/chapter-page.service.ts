import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SupabaseService } from '../supabase/supabase.service';
import { CHAPTER_EMPTY, ChapterInterface } from '../../../data/interface/chapter.interface';

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
    chapter$ = new BehaviorSubject<ChapterInterface>(CHAPTER_EMPTY);

    constructor(private supabase: SupabaseService) {}

    setChapter(chapterId:number){
        this.pageNumber$.next(chapterId);
        this.supabase.getCharapter(chapterId).subscribe((e)=> this.chapter$.next(e));
    }

    incrementPage(){
        this.setChapter(this.pageNumber$.value + 1);
    }

    decrementPage(){
        this.setChapter(this.pageNumber$.value - 1);
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
