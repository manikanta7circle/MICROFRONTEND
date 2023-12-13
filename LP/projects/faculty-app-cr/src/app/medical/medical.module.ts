import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicalComponent } from './medical.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MedicalComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forChild([
      {
        path: '',
        component: MedicalComponent
      }
    ])
  ]
})
export class MedicalModule { }
