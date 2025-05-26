import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterListComponent } from './chapter-list-page.component';

describe('LandingChapterComponent', () => {
    let component: ChapterListComponent;
    let fixture: ComponentFixture<ChapterListComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ChapterListComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(ChapterListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
