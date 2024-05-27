import { Component } from '@angular/core';
import { ListCharactersComponent } from '../../core/components/list-characters/list-characters.component';
import { ButtonComponent } from '../../core/components/button/button.component';
import { NavbarService } from '../../core/service/navbar/navbar.service';

@Component({
  selector: 'app-landing-chapter',
  standalone: true,
  imports: [ListCharactersComponent, ButtonComponent],
  templateUrl: './landing-chapter.component.html',
  styleUrl: './landing-chapter.component.css'
})
export class LandingChapterComponent {

  constructor(private navbarService:NavbarService){
    this.navbarService.setShowNavbar(false);
  }
}
