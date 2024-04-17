import { Component, Input } from '@angular/core';
import { ObjectiveInteface } from '../../../data/interface/objective.interface';
import { ResourcePageComponent } from '../resource-page/resource-page.component';

@Component({
  selector: 'app-objetive-page',
  standalone: true,
  imports: [ResourcePageComponent],
  templateUrl: './objetive-page.component.html',
  styleUrl: './objetive-page.component.css'
})
export class ObjetivePageComponent {
  @Input() objective!: ObjectiveInteface;
}
