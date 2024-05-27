import { Component } from '@angular/core';
import { ListCharactersComponent } from '../../core/components/list-characters/list-characters.component';
import { ButtonComponent } from '../../core/components/button/button.component';

@Component({
  selector: 'app-landing-chapter',
  standalone: true,
  imports: [ListCharactersComponent, ButtonComponent],
  templateUrl: './landing-chapter.component.html',
  styleUrl: './landing-chapter.component.css'
})
export class LandingChapterComponent {
}
