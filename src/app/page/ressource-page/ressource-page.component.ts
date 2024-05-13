import { Component, Input } from '@angular/core';
import { MAP_RESSOURCES } from '../../data/ressources.data';
import { ResourcePageComponent } from '../../core/components/resource-page/resource-page.component';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../../core/components/button/button.component';

@Component({
  selector: 'app-ressource-page',
  standalone: true,
  imports: [RouterLink, ResourcePageComponent, ButtonComponent],
  templateUrl: './ressource-page.component.html',
  styleUrl: './ressource-page.component.css'
})
export class RessourcePageComponent {
    ressources = MAP_RESSOURCES;
    resourceId = "";

    @Input('resourceId') set id(resourceId: string) {
      this.resourceId = resourceId;
    };

    get getRessource(){
      return MAP_RESSOURCES.get(this.resourceId);
    }
}
