import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LawnWizardMainComponent } from './lawn-wizard-main.component';

describe('LawnWizardMainComponent', () => {
  let component: LawnWizardMainComponent;
  let fixture: ComponentFixture<LawnWizardMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LawnWizardMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LawnWizardMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
