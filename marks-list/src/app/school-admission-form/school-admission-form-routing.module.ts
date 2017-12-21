import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SchoolAdmissionFormComponent } from './school-admission-form.component';

const routes: Routes = [
  {
    path: '',
    component: SchoolAdmissionFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class SchoolAdmissionFormRoutingModule { }
