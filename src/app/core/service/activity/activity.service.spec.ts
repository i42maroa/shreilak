import { TestBed } from '@angular/core/testing';

import { ActivityPageService } from './activity.service';

describe('RessourceService', () => {
    let service: ActivityPageService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ActivityPageService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
