import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './templates/login-form/login-form.component';
import { ValidationFormComponent } from './templates/validation-form/validation-form.component';

const routes: Routes = [
  { path: 'login', component: LoginFormComponent },
  { path: 'validation', component: ValidationFormComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
