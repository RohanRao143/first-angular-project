import { TestBed, inject } from '@angular/core/testing';

import { MarksListService } from './marks-list.service';

describe('MarksListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MarksListService]
    });
  });

  it('should be created', inject([MarksListService], (service: MarksListService) => {
    expect(service).toBeTruthy();
  }));
});
