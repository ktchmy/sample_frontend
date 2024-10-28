import { TestBed } from '@angular/core/testing';

import { ListSubmissionService } from './list-submission.service';

describe('ListSubmissionService', () => {
  let service: ListSubmissionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListSubmissionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
