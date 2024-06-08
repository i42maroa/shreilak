import { Component, Input } from '@angular/core';
import { ResourcePageComponent } from '../../core/components/resource-page/resource-page.component';
import { Router, RouterLink } from '@angular/router';
import { ButtonComponent } from '../../core/components/button/button.component';
import { RessourceService } from '../../core/service/ressource/ressource.service';
import { CommonModule } from '@angular/common';
import { CharapterPageService } from '../../core/service/charapter/charapter-page.service';
import { LetterSComponentSvg } from '../../core/svg/letter-s/letter-s.component';

@Component({
  selector: 'app-ressource-page',
  standalone: true,
  imports: [RouterLink, ResourcePageComponent, ButtonComponent, CommonModule, LetterSComponentSvg],
  templateUrl: './ressource-page.component.html',
  styleUrl: './ressource-page.component.css'
})
export class RessourcePageComponent {

    @Input('resourceId') set id(resourceId: string) {
      this.ressourceService.loadRessource(resourceId);
    };

    constructor(private ressourceService:RessourceService,
      private router: Router,
      private chapterService:CharapterPageService){
          this.ressourceService.ressource.subscribe(r => !r && this.router.navigate(['notFound']))
      }

    get ressource(){
      return this.ressourceService.ressource
    }

    get chapterPreviousPath(){
      return '/chapter/' + this.chapterService.getPageNumber.value
    }
}
