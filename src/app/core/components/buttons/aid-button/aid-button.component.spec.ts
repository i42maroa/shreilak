import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AidButtonComponent } from './fifth-page.component';

describe('FifthPageComponent', () => {
    let component: AidButtonComponent;
    let fixture: ComponentFixture<AidButtonComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AidButtonComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(AidButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
