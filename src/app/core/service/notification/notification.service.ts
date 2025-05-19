import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription, timer } from 'rxjs';
import { NotificationInterface } from '../../../data/notification.interface';

@Injectable({
    providedIn: 'root'
})
export class NotificationService {

    notificationData$ = new BehaviorSubject<NotificationInterface>({show:false, message:'', type:'error'});
    dismissTimeout:Subscription | null = null;

    constructor() { }

    showSuccessModal(message:string, duration:number =5){
        const data:NotificationInterface = {message,show:true,type:'success'}
        this.show(data, duration)
    }

    showErrorModal(message:string, duration:number = 8){
        const data:NotificationInterface = {message,show:true,type:'error'}
        this.show(data, duration);
    }

    show(data:NotificationInterface, duration:number){
        console.log("show", data)
        this.dismissTimeout?.unsubscribe();
        this.notificationData$.next(data);
        this.dismissTimeout = timer(duration * 1000)
            .subscribe(() => this.clear());
    }

    clear(){
        this.notificationData$.next({...this.notificationData$.value, show:false})
        this.dismissTimeout?.unsubscribe();
    }

    get data():Observable<NotificationInterface>{
        return this.notificationData$;
    }
}
