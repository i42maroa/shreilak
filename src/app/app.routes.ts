import { Routes } from '@angular/router';
import { LandingComponent } from './page/landing-history/landing.component';
import { ChapterPageComponent } from './page/chapter-page/chapter-page.component';
import { RessourcePageComponent } from './page/ressource-page/ressource-page.component';
import { LandingChapterComponent } from './page/landing-chapter/landing-chapter.component';
import { NotFoundPageComponent } from './page/not-found/not-found.component';

export const HISTORY_PATH = "history";
export const CHAPTER_PATH = "chapter";
export const RESSORUCE_PATH = "ressource";

export const routes: Routes = [

    { path: '', redirectTo: HISTORY_PATH, pathMatch: 'full' },
    { path: HISTORY_PATH, component: LandingComponent },
    { path: CHAPTER_PATH, component: LandingChapterComponent },
    { path: `${CHAPTER_PATH}/:chapterId`, component: ChapterPageComponent },
    { path: `${RESSORUCE_PATH}/:resourceId`, component: RessourcePageComponent },
    { path: '**', component: NotFoundPageComponent },
];


