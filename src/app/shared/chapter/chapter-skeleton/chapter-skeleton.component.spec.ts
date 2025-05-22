import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterSkeletonComponent } from './chapter-skeleton.component';

describe('ChapterSkeletonComponent', () => {
  let component: ChapterSkeletonComponent;
  let fixture: ComponentFixture<ChapterSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChapterSkeletonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChapterSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
