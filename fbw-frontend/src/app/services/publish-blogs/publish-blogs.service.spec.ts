import { TestBed } from '@angular/core/testing';

import { PublishBlogsService } from './publish-blogs.service';

describe('PublishBlogsService', () => {
  let service: PublishBlogsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PublishBlogsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
