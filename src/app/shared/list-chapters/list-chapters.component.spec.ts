import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListChaptersComponent } from './list-characters.component';

describe('ListCharactersComponent', () => {
    let component: ListChaptersComponent;
    let fixture: ComponentFixture<ListChaptersComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ListChaptersComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(ListChaptersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
