import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingChapterComponent } from './landing-chapter.component';

describe('LandingChapterComponent', () => {
    let component: LandingChapterComponent;
    let fixture: ComponentFixture<LandingChapterComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [LandingChapterComponent]
        })
            .compileComponents();
    
        fixture = TestBed.createComponent(LandingChapterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
