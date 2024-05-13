import { Routes } from '@angular/router';
import { LandingComponent } from './page/landing/landing.component';
import { ChapterPageComponent } from './page/chapter-page/chapter-page.component';
import { RessourcePageComponent } from './page/ressource-page/ressource-page.component';

export const routes: Routes = [
 // TODO:  { path: '**', component: PageNotFoundComponent },
  { path: '',   redirectTo: 'history/0', pathMatch: 'full' },
  { path: 'history',   redirectTo: 'history/0', pathMatch: 'full' },
  { path: 'history/:pageId', component: LandingComponent },
  { path: 'chapter/:chapterId', component: ChapterPageComponent },
  { path: 'ressource/:resourceId', component: RessourcePageComponent }
];
