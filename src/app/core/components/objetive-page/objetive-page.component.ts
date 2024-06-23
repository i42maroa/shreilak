import { Component, Input } from '@angular/core';
import { ObjectiveInteface } from '../../../data/interface/objective.interface';
import { ResourcePageComponent } from '../resource-page/resource-page.component';
import { RouterLink } from '@angular/router';
import { ResourceInterface } from '../../../data/interface/resource.interface';
import { TranslateModule } from '@ngx-translate/core';
import { TitleComponent } from '../title/title.component';

@Component({
    selector: 'app-objetive-page',
    standalone: true,
    imports: [ResourcePageComponent, RouterLink, TranslateModule, TitleComponent],
    templateUrl: './objetive-page.component.html',
    styleUrl: './objetive-page.component.css'
})
export class ObjetivePageComponent {
    @Input() objective!: ObjectiveInteface;
    @Input() index!:number;

    show = false;

    showDetail(){
        this.show = true;
    }

    getRouter(resource:ResourceInterface){
        return `/ressource/${resource.id}`;
    }


}
