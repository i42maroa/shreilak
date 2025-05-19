import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { map, Observable } from 'rxjs';
import { NotificationService } from './core/service/notification/notification.service';
import { NotificationSnackbarComponent } from './core/components/notification-snackbar/notification-snackbar.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, NavbarComponent, FooterComponent, CommonModule, NotificationSnackbarComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent{
    title = 'shreilak';

    constructor(private notificationService:NotificationService){}

    get showModal():Observable<boolean>{
        return this.notificationService.data.pipe(map(data => data.show))
    }
}
