import { TestBed } from '@angular/core/testing';

import { SubscribedAuthorBlogsService } from './subscribed-author-blogs.service';

describe('SubscribedAuthorBlogsService', () => {
  let service: SubscribedAuthorBlogsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubscribedAuthorBlogsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
