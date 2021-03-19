import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AshwagandhaCapsulesComponent } from './ashwagandha-capsules/ashwagandha-capsules.component';
import { SehatPrashComponent } from './sehat-prash/sehat-prash.component';
import { DardMochakComponent } from './dard-mochak/dard-mochak.component';
import { MhaMochakComponent } from './mha-mochak/mha-mochak.component';
import { ChetanTilaComponent } from './chetan-tila/chetan-tila.component';
import { ChetanCapsuleComponent } from './chetan-capsule/chetan-capsule.component';
import { ShilajitPrashComponent } from './shilajit-prash/shilajit-prash.component';
import { TriphlaChurnComponent } from './triphla-churn/triphla-churn.component';
import { TrulivComponent } from './truliv/truliv.component';

const routes: Routes = [
  { path: 'ashwagandha-capsules', component: AshwagandhaCapsulesComponent },
  { path: 'sehat-prash', component: SehatPrashComponent },
  { path: 'dard-mochak', component: DardMochakComponent },
  { path: 'mha-mochak', component: MhaMochakComponent },
  { path: 'chetan-tila', component: ChetanTilaComponent },
  { path: 'chetan-capsule', component: ChetanCapsuleComponent },
  { path: 'shilajit-prash', component: ShilajitPrashComponent },
  { path: 'triphla-churn', component: TriphlaChurnComponent },
  { path: 'truliv', component: TrulivComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
