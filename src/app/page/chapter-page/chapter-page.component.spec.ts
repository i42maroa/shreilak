import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterPageComponent } from './chapter-page.component';

describe('ChapterPageComponent', () => {
  let component: ChapterPageComponent;
  let fixture: ComponentFixture<ChapterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChapterPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChapterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
