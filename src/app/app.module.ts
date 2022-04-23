import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { TranningComponent } from './tranning/tranning.component';
import { CurrentTranningComponent } from './tranning/current-tranning/current-tranning.component';
import { NewTranningComponent } from './tranning/new-tranning/new-tranning.component';
import { PastTranningComponent } from './tranning/past-tranning/past-tranning.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './auth/login/login.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { StopTrainingComponent } from './tranning/current-tranning/stop-training.component';



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    TranningComponent,
    CurrentTranningComponent,
    NewTranningComponent,
    PastTranningComponent,
    WelcomeComponent,
    LoginComponent,
    HeaderComponent,
    SidenavListComponent,
    StopTrainingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule,
  ],
  providers: [],
  
  bootstrap: [AppComponent],
  entryComponents:[StopTrainingComponent]
})
export class AppModule { }
