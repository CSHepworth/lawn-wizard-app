import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LawnWizardCoreComponent } from './lawn-wizard-core.component';

describe('LawnWizardCoreComponent', () => {
  let component: LawnWizardCoreComponent;
  let fixture: ComponentFixture<LawnWizardCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LawnWizardCoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LawnWizardCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
