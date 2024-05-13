import { TestBed } from '@angular/core/testing';

import { HistoryPageService } from './history-page.service';

describe('PageServiceService', () => {
  let service: HistoryPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoryPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
