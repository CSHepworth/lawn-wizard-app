import { TestBed } from '@angular/core/testing';

import { LawnWizardMainService } from './lawn-wizard-main.service';

describe('LawnWizardMainService', () => {
  let service: LawnWizardMainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LawnWizardMainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
