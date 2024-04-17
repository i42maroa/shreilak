import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjetivePageComponent } from './objetive-page.component';

describe('ObjetivePageComponent', () => {
  let component: ObjetivePageComponent;
  let fixture: ComponentFixture<ObjetivePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObjetivePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObjetivePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
