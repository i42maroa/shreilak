import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ShreilakTitleComponentSVG } from '../../svg/shreilak-title/shreilak-title.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, ShreilakTitleComponentSVG],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
