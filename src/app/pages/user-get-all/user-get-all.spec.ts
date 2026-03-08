import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGetAll } from './user-get-all';

describe('UserGetAll', () => {
  let component: UserGetAll;
  let fixture: ComponentFixture<UserGetAll>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserGetAll],
    }).compileComponents();

    fixture = TestBed.createComponent(UserGetAll);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
