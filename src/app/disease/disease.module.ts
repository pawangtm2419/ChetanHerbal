import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiseaseRoutingModule } from './disease-routing.module';
import { DiabetesComponent } from './diabetes/diabetes.component';
import { FatLossComponent } from './fat-loss/fat-loss.component';
import { HairLoseComponent } from './hair-lose/hair-lose.component';
import { HeightUpComponent } from './height-up/height-up.component';
import { IncreaseBreastComponent } from './increase-breast/increase-breast.component';
import { JointPainComponent } from './joint-pain/joint-pain.component';
import { PilesComponent } from './piles/piles.component';
import { SexProblemComponent } from './sex-problem/sex-problem.component';
import { SharabMuktiComponent } from './sharab-mukti/sharab-mukti.component';
import { WeightGainComponent } from './weight-gain/weight-gain.component';
import { WhiteSkinComponent } from './white-skin/white-skin.component';
import { AlwaysBeActiveComponent } from './always-be-active/always-be-active.component';
import { StoneProblemComponent } from './stone-problem/stone-problem.component';



@NgModule({
  declarations: [
    DiabetesComponent,
    FatLossComponent,
    HairLoseComponent,
    HeightUpComponent,
    IncreaseBreastComponent,
    JointPainComponent,
    PilesComponent,
    SexProblemComponent,
    SharabMuktiComponent,
    WeightGainComponent,
    WhiteSkinComponent,
    AlwaysBeActiveComponent,
    StoneProblemComponent
  ],
  imports: [
    CommonModule,
    DiseaseRoutingModule
  ]
})
export class DiseaseModule { }
