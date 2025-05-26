import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { NotificationService } from '../../service/notification/notification.service';
import { CommonModule } from '@angular/common';
import { NotificationType } from '../../../data/notification.interface';

@Component({
    selector: 'app-notification-snackbar',
    imports: [CommonModule],
    templateUrl: './notification-snackbar.component.html',
    styleUrls: ['./notification-snackbar.component.css']
})
export class NotificationSnackbarComponent  {

    constructor(private notificationService:NotificationService){}

    get message():Observable<string>{
        return this.notificationService.data.pipe(map(data => data.message));
    }
    get type():Observable<NotificationType>{
        return this.notificationService.data.pipe(map(data => data.type))
    }
}
