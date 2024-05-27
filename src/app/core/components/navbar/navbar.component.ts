import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NavbarListComponent } from './navbar-list/navbar-list.component';
import { NavbarService } from '../../service/navbar/navbar.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [HeaderComponent, NavbarListComponent, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private showNavbar:NavbarService){}

  toggleShowList(){
    this.showNavbar.setToggleShow();
  }

  get show(){
    return this.showNavbar.navbarShow$
  }

}
