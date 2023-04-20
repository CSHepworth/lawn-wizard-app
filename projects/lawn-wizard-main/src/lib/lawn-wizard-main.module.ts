import { NgModule } from '@angular/core';
import { LawnWizardMainComponent } from './lawn-wizard-main.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    LawnWizardMainComponent,
    LoginComponent
  ],
  imports: [
  ],
  exports: [
    LawnWizardMainComponent
  ]
})
export class LawnWizardMainModule { }
