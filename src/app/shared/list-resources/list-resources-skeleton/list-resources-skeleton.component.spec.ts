import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListResourcesSkeletonComponent } from './list-resources-skeleton.component';

describe('ListResourcesSkeletonComponent', () => {
  let component: ListResourcesSkeletonComponent;
  let fixture: ComponentFixture<ListResourcesSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListResourcesSkeletonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListResourcesSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
