import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DiseasesComponent } from './diseases.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
  { path: '', component: DiseasesComponent }
];

@NgModule({
  declarations: [
    DiseasesComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatButtonModule,
    RouterModule.forChild(routes)
  ]
})
export class DiseasesModule { }
