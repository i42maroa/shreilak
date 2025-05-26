import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcesListPageComponent } from './resources-list-page.component';

describe('ResourcesListPageComponent', () => {
  let component: ResourcesListPageComponent;
  let fixture: ComponentFixture<ResourcesListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResourcesListPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResourcesListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
