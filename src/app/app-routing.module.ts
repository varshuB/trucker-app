import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PostRequirementQuoteComponent } from './components/post-requirement-quote/post-requirement-quote.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'registration',component:RegisterFormComponent},
  {path:'login',component:LoginComponent},
  {path:'mydeliveries',component:PostRequirementQuoteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
