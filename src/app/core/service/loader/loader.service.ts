import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoaderService {

    private loader$ = new BehaviorSubject<boolean>(false);

    constructor() { }

    loading(){
        this.loader$.next(true);
    }

    fininsh(){
        this.loader$.next(false);
    }

    get isLoading():Observable<boolean>{
        return this.loader$;
    }
}
