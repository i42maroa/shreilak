import { Component, Input } from '@angular/core';
import { ResourceInterface } from '../../../data/interface/resource.interface';
import { ImageShowerComponent } from '../image-shower/image-shower.component';
import { LetterSComponentSvg } from '../../svg/letter-s/letter-s.component';

@Component({
  selector: 'app-resource-page',
  standalone: true,
  imports: [ImageShowerComponent, LetterSComponentSvg],
  templateUrl: './resource-page.component.html',
  styleUrl: './resource-page.component.css'
})
export class ResourcePageComponent {

  @Input() resource: ResourceInterface | undefined;
}
