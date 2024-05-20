import { Component } from '@angular/core';
import { ListCharactersComponent } from '../../core/components/list-characters/list-characters.component';
import { ButtonComponent } from '../../core/components/button/button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing-chapter',
  standalone: true,
  imports: [ListCharactersComponent, ButtonComponent, RouterLink],
  templateUrl: './landing-chapter.component.html',
  styleUrl: './landing-chapter.component.css'
})
export class LandingChapterComponent {

}
