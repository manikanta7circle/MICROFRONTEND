import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicalComponent } from './medical/medical.component';

const routes: Routes = [
  {path: '', redirectTo:'/home', pathMatch: 'full'},
  {path: 'home', component: MedicalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
