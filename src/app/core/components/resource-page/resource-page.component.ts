import { Component, Input } from '@angular/core';
import { ResourceInterface } from '../../../data/interface/resource.interface';

@Component({
  selector: 'app-resource-page',
  standalone: true,
  imports: [],
  templateUrl: './resource-page.component.html',
  styleUrl: './resource-page.component.css'
})
export class ResourcePageComponent {

  @Input() resource!: ResourceInterface;
}
