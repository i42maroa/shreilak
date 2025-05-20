import { Routes } from '@angular/router';
import { HistoryPageComponent } from './page/history-page/history-page.component';
import { ChapterPageComponent } from './page/chapter-page/chapter-page.component';
import { ActivityPageComponent } from './page/activity-page/activity-page.component';
import { ChapterListComponent } from './page/chapter-list-page/chapter-list-page.component';
import { NotFoundPageComponent } from './page/not-found/not-found.component';

export const HISTORY_PATH = "history";
export const CHAPTER_PATH = "chapter";
export const ACTIVITY_PATH = "activity";

export const routes: Routes = [

    { path: '', redirectTo: HISTORY_PATH, pathMatch: 'full' },
    { path: HISTORY_PATH, component: HistoryPageComponent },
    { path: CHAPTER_PATH, component: ChapterListComponent },
    { path: `${CHAPTER_PATH}/:chapterId`, component: ChapterPageComponent },
    { path: `${CHAPTER_PATH}/:chapterId/${ACTIVITY_PATH}/:activityId`, component: ActivityPageComponent },
    { path: `${ACTIVITY_PATH}/:activityId`, component: ActivityPageComponent },
    { path: '**', component: NotFoundPageComponent },
];


