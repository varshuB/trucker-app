import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material/material/material.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PostRequirementFormComponent } from './components/post-requirement-form/post-requirement-form.component';
import { PostRequirementFillFormsComponent } from './components/post-requirement-fill-forms/post-requirement-fill-forms.component';
import { PostRequirementQuoteComponent } from './components/post-requirement-quote/post-requirement-quote.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CdkStepper } from '@angular/cdk/stepper';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    PostRequirementFormComponent,
    PostRequirementFillFormsComponent,
    PostRequirementQuoteComponent,
    RegisterFormComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule
    

  ],
  providers: [{ provide: CdkStepper }],
  bootstrap: [AppComponent]
})
export class AppModule { }
