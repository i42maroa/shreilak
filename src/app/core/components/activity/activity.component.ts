import { Component, Input } from '@angular/core';
import { ActivityInterface } from '../../../data/interface/activity.interface';
import { ImageShowerComponent } from '../image-shower/image-shower.component';
import { LetterSSVGComponent } from '../../svg/letter-s/letter-s.component';
import { TranslateModule } from '@ngx-translate/core';
import { TitleComponent } from '../title/title.component';

@Component({
    selector: 'app-activity',
    imports: [ImageShowerComponent, LetterSSVGComponent, TitleComponent, TranslateModule],
    templateUrl: './activity.component.html',
    styleUrl: './activity.component.css'
})
export class ActivityComponent {

    @Input() activity: ActivityInterface | undefined;
}
