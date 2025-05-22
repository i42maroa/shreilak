import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListChaptersSkeletonComponent } from './list-chapters-skeleton.component';

describe('ListChaptersSkeletonComponent', () => {
  let component: ListChaptersSkeletonComponent;
  let fixture: ComponentFixture<ListChaptersSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListChaptersSkeletonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListChaptersSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
