import { Injectable } from '@angular/core';
import { ResourceInterface } from '../../../data/interface/resource.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ListResourcesService {

    private listChapters = new BehaviorSubject<ResourceInterface []| undefined | null>(undefined);

    setResourceList(resourceList: ResourceInterface[] | null):void{
        this.cleanList()
        this.listChapters.next(resourceList);
    }

    cleanList(): void{
        this.listChapters.next(undefined);
    }

    get getListChapters(): Observable<ResourceInterface[]| undefined | null>{
        return this.listChapters;
    }
}
