import { Component, Input } from '@angular/core';
import { ActivityInterface } from '../../data/interface/activity.interface';
import { ImageShowerComponent } from '../../core/components/image-shower/image-shower.component';
import { LetterSSVGComponent } from '../../core/svg/letter-s/letter-s.component';
import { TitleComponent } from '../../core/components/title/title.component';

@Component({
    selector: 'app-activity',
    imports: [ImageShowerComponent, LetterSSVGComponent, TitleComponent],
    templateUrl: './activity.component.html',
    styleUrl: './activity.component.css'
})
export class ActivityComponent {

    @Input() activity: ActivityInterface | undefined;
}
