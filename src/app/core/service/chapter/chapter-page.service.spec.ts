import { TestBed } from '@angular/core/testing';

import { CharapterPageService } from './chapter-page.service';

describe('CharapterPageService', () => {
    let service: CharapterPageService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(CharapterPageService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
