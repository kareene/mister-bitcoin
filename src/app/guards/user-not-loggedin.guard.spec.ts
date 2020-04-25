import { TestBed } from '@angular/core/testing';

import { UserNotLoggedinGuard } from './user-not-loggedin.guard';

describe('UserNotLoggedinGuard', () => {
  let guard: UserNotLoggedinGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserNotLoggedinGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
