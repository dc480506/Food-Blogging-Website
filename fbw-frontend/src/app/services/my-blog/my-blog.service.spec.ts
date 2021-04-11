import { TestBed } from '@angular/core/testing';

import { MyBlogService } from './my-blog.service';

describe('MyBlogService', () => {
  let service: MyBlogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyBlogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
