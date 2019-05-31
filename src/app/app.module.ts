import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MaterialModule } from './imports/material-module';
import { MainComponent } from './main/main.component';
import { LandingComponent } from './landing/landing.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { VehiclesListComponent } from './vehicles-list/vehicles-list.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LandingComponent,
    LoginComponent,
    VehiclesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
