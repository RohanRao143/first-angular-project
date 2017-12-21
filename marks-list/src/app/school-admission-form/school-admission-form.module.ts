import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolAdmissionFormRoutingModule } from './school-admission-form-routing.module';
import { SchoolAdmissionFormComponent } from './school-admission-form.component';

@NgModule({
  imports: [
    CommonModule,
    SchoolAdmissionFormRoutingModule
  ],
  declarations: [SchoolAdmissionFormComponent]
})
export class SchoolAdmissionFormModule { }
