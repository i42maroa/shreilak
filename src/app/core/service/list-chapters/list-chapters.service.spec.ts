import { TestBed } from '@angular/core/testing';

import { ListChaptersService } from './list-chapters.service';

describe('ListChaptersService', () => {
  let service: ListChaptersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListChaptersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
