import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
//import { HomePageComponent } from './shared/home-page/home-page.component';
import { LabsPageComponent } from './labs-page/labs-page.component';
import { AssignmentsPageComponent } from './assignments-page/assignments-page.component';
import { WebAccessibilityPageComponent } from './web-accessibility-page/web-accessibility-page.component';
import { Lab2Component } from './lab2/lab2.component';
import { Lab3Component } from './lab3/lab3.component';
import { Lab4Component } from './lab4/lab4.component';


@NgModule({
  declarations: [
    AppComponent,
    //HomePageComponent,
    LabsPageComponent,
    AssignmentsPageComponent,
    WebAccessibilityPageComponent,
    Lab2Component,
    Lab3Component,
    Lab4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
