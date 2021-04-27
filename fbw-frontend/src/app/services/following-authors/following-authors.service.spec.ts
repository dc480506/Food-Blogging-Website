import { TestBed } from '@angular/core/testing';

import { FollowingAuthorsService } from './following-authors.service';

describe('FollowingAuthorsService', () => {
  let service: FollowingAuthorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FollowingAuthorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
