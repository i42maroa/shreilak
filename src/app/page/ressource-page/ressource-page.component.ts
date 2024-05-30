import { Component, Input } from '@angular/core';
import { ResourcePageComponent } from '../../core/components/resource-page/resource-page.component';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../../core/components/button/button.component';
import { RessourceService } from '../../core/service/ressource/ressource.service';
import { CommonModule } from '@angular/common';
import { CharapterPageService } from '../../core/service/charapter/charapter-page.service';
import { CHAPTERS } from '../../data/chapters.data';

@Component({
  selector: 'app-ressource-page',
  standalone: true,
  imports: [RouterLink, ResourcePageComponent, ButtonComponent, CommonModule],
  templateUrl: './ressource-page.component.html',
  styleUrl: './ressource-page.component.css'
})
export class RessourcePageComponent {

    @Input('resourceId') set id(resourceId: string) {
      this.ressourceService.loadRessource(resourceId);
    };

    constructor(private ressourceService:RessourceService,
      private chapterService:CharapterPageService){}

    get ressource(){
      return this.ressourceService.ressource
    }

    get chapterPreviousPath(){
      const s = '/chapter/' + this.chapterService.getPageNumber.value
      return s
    }
}
