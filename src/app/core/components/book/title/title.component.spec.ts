import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookPageTitleComponent } from './title.component';

describe('TitleComponent', () => {
  let component: BookPageTitleComponent;
  let fixture: ComponentFixture<BookPageTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookPageTitleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookPageTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
