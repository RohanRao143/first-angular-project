import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// import { SchoolAdmissionFormComponent } from './school-admission-form/school-admission-form.component';
import { MarksListComponent } from './marks-list/marks-list.component';
import {MainPipe} from './marks-list/marks-list.module';

@NgModule({
  declarations: [
    AppComponent,
    MarksListComponent,
  ],
  imports: [
    BrowserModule,
    MainPipe,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
