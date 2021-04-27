import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFollowingAuthorsComponent } from './not-following-authors.component';

describe('NotFollowingAuthorsComponent', () => {
  let component: NotFollowingAuthorsComponent;
  let fixture: ComponentFixture<NotFollowingAuthorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotFollowingAuthorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFollowingAuthorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
