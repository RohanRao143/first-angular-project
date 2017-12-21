import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SchoolAdmissionFormModule} from './school-admission-form/school-admission-form.module';
import {MarksListComponent} from './marks-list/marks-list.component';
import {AppComponent} from './app.component';

export function loadSchoolAdmissionFormModule() {
  return SchoolAdmissionFormModule ;
}

  export const routes: Routes = [
    {
      path: '',
      pathMatch: 'full',
      component: MarksListComponent
    },
  {
    path: 'admission-form',
    loadChildren: loadSchoolAdmissionFormModule
  },
//   {
//     path: 'bundled',
//     loadChildren: loadBundledModule
//     // Comment loadChildren above and uncomment the line below to get non lazy loading working with AoT
//     // Do not delete / comment the  `loadBundledModule` declaration or the module will be lazy loaded
//     // loadChildren: './bundled/bundled.module#BundledModule'
//   },
//   {
//     path: 'lazy',
//     loadChildren: './lazy/lazy.module#LazyModule'
//   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
