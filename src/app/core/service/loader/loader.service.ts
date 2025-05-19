import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoaderService {

    loader$ = new BehaviorSubject<boolean>(false);

    constructor() { }

    loading(){
        this.loader$.next(true);
    }

    fininsh(){
        this.loader$.next(false);
    }

    get showLoader():Observable<boolean>{
        return this.loader$;
    }
}
