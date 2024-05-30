import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CHAPTERS } from '../../../data/chapters.data';

@Component({
  selector: 'app-list-characters',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './list-characters.component.html',
  styleUrl: './list-characters.component.css'
})
export class ListCharactersComponent {

  chapters = CHAPTERS;
}
