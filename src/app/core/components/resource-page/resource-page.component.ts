import { Component, Input } from '@angular/core';
import { ResourceInterface } from '../../../data/interface/resource.interface';
import { ImageShowerComponent } from '../image-shower/image-shower.component';
import { LetterSSVGComponent } from '../../svg/letter-s/letter-s.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-resource-page',
    standalone: true,
    imports: [ImageShowerComponent, LetterSSVGComponent, TranslateModule],
    templateUrl: './resource-page.component.html',
    styleUrl: './resource-page.component.css'
})
export class ResourcePageComponent {

    @Input() resource: ResourceInterface | undefined;
}
