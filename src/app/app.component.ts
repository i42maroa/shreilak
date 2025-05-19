import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { map, Observable } from 'rxjs';
import { NotificationService } from './core/service/notification/notification.service';
import { NotificationSnackbarComponent } from './core/components/notification-snackbar/notification-snackbar.component';
import { CommonModule } from '@angular/common';
import { LoaderService } from './core/service/loader/loader.service';
import { LoaderComponent } from './core/components/loader/loader.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, NavbarComponent, FooterComponent, CommonModule, NotificationSnackbarComponent, LoaderComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent{
    title = 'shreilak';

    constructor(private notificationService:NotificationService,
        private loaderService:LoaderService){}

    get showModal():Observable<boolean>{
        return this.notificationService.data.pipe(map(data => data.show))
    }

    get showLoader():Observable<boolean>{
        return this.loaderService.showLoader;
    }
}
