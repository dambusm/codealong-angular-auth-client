import { TestBed, async, inject } from '@angular/core/testing';

import { RequireUserGuardGuard } from './require-user-guard.guard';

describe('RequireUserGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RequireUserGuardGuard]
    });
  });

  it('should ...', inject([RequireUserGuardGuard], (guard: RequireUserGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
