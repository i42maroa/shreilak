import { Component } from '@angular/core';
import { NavbarService } from '../../../service/navbar/navbar.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavbarWoodSVGComponent } from '../../../svg/navbar-wood/navbar-wood.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-navbar-list',
    imports: [CommonModule, RouterLink, NavbarWoodSVGComponent, TranslateModule],
    templateUrl: './navbar-list.component.html',
    styleUrl: './navbar-list.component.css'
})
export class NavbarListComponent {

    constructor(private navbarOptions: NavbarService){}

    closeNavbar(){
        this.navbarOptions.setShowNavbar(false);
    }

    get navbarOptionList(){
        return this.navbarOptions.navbarOptions$
    }
}
