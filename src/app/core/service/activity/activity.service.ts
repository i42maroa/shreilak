import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { ACTIVITY_EMPTY, ActivityInterface } from '../../../data/interface/activity.interface';
import { SupabaseService } from '../supabase/supabase.service';


@Injectable({
    providedIn: 'root'
})
export class ActivityPageService {

    private activity$ = new BehaviorSubject<ActivityInterface | undefined>(ACTIVITY_EMPTY);

    private previousChapter$ = new BehaviorSubject<number | undefined>(undefined);

    constructor( private supabaseService: SupabaseService) { }

    loadRessource(id:number){
        this.supabaseService.getActivity(id)
            .pipe(
                tap(e => console.log(e))
            )
            .subscribe(e => this.activity$.next(e));
    }

    setChapterPrevious(page:number){
        this.previousChapter$.next(page);
    }

    get previousChapter(){
        return this.previousChapter$
    }

    get activity(){
        return this.activity$
    }
}
