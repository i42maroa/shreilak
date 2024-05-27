import { Component } from '@angular/core';
import { NavbarService } from '../../core/service/navbar/navbar.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.css'
})
export class AboutPageComponent {

  constructor(private navbarService:NavbarService){
    this.navbarService.setShowNavbar(false);
  }

}
