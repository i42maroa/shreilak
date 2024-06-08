import { Component } from '@angular/core';
import { ListCharactersComponent } from '../../core/components/list-characters/list-characters.component';
import { ButtonsComponent } from '../../core/components/buttons/buttons.component';


@Component({
  selector: 'app-landing-chapter',
  standalone: true,
  imports: [ListCharactersComponent, ButtonsComponent],
  templateUrl: './landing-chapter.component.html',
  styleUrl: './landing-chapter.component.css'
})
export class LandingChapterComponent {
}
