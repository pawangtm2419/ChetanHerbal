import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

const routes: Routes = [
    { path: 'diabetes', component: DiabetesComponent },
    { path: 'fat-loss', component: FatLossComponent},
    { path: 'hair-lose', component: HairLoseComponent},
    { path: 'height-up', component: HeightUpComponent},
    { path: 'increase-breast', component: IncreaseBreastComponent},
    { path: 'joint-pain', component: JointPainComponent},
    { path: 'piles', component: PilesComponent},
    { path: 'sex-problem', component: SexProblemComponent},
    { path: 'sharab-mukti', component: SharabMuktiComponent},
    { path: 'weight-gain', component: WeightGainComponent},
    { path: 'white-skin', component: WhiteSkinComponent},
    { path: 'always-be-active', component: AlwaysBeActiveComponent},
    { path: 'stone-problem', component: StoneProblemComponent}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiseaseRoutingModule { }
