import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './shared/home-page/home-page.component';
import { AssignmentsPageComponent } from './assignments-page/assignments-page.component';
import { LabsPageComponent } from './labs-page/labs-page.component';
import { WebAccessibilityPageComponent } from './web-accessibility-page/web-accessibility-page.component';
import { Lab2Component } from './lab2/lab2.component';
import { Lab3Component } from './lab3/lab3.component';
import { Lab4Component } from './lab4/lab4.component';

import { Assignment1Component } from './assignment1/assignment1.component';


const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'assignments', component: AssignmentsPageComponent},
  {path: 'labs', component: LabsPageComponent},
  {path: 'web-usability', component: WebAccessibilityPageComponent},
  {path: 'lab2', component: Lab2Component},
  {path: 'lab3', component: Lab3Component},
  {path: 'lab4', component: Lab4Component},
  {path: 'assignment1', component: Assignment1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
