import { TestBed } from '@angular/core/testing';

import { NotFollowingAuthorsService } from './not-following-authors.service';

describe('NotFollowingAuthorsService', () => {
  let service: NotFollowingAuthorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotFollowingAuthorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
