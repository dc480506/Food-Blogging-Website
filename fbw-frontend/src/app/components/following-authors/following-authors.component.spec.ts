import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowingAuthorsComponent } from './following-authors.component';

describe('FollowingAuthorsComponent', () => {
  let component: FollowingAuthorsComponent;
  let fixture: ComponentFixture<FollowingAuthorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FollowingAuthorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowingAuthorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
