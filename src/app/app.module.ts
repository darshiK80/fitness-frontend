import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './common-component/login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import { UserregistrationComponent } from './common-component/userregistration/userregistration.component';
import { AdminregistrationComponent } from './common-component/adminregistration/adminregistration.component';
import { TrainerregistrationComponent } from './common-component/trainerregistration/trainerregistration.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserregistrationComponent,
    AdminregistrationComponent,
    TrainerregistrationComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
