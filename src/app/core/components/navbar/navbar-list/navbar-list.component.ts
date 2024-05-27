import { Component } from '@angular/core';
import { NavbarService } from '../../../service/navbar/navbar.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
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
