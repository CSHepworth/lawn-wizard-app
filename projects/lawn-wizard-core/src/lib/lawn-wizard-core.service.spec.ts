import { TestBed } from '@angular/core/testing';

import { LawnWizardCoreService } from './lawn-wizard-core.service';

describe('LawnWizardCoreService', () => {
  let service: LawnWizardCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LawnWizardCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
