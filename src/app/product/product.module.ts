import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { SehatPrashComponent } from './sehat-prash/sehat-prash.component';
import { DardMochakComponent } from './dard-mochak/dard-mochak.component';
import { MhaMochakComponent } from './mha-mochak/mha-mochak.component';
import { ChetanTilaComponent } from './chetan-tila/chetan-tila.component';
import { ChetanCapsuleComponent } from './chetan-capsule/chetan-capsule.component';
import { ShilajitPrashComponent } from './shilajit-prash/shilajit-prash.component';
import { TriphlaChurnComponent } from './triphla-churn/triphla-churn.component';
import { TrulivComponent } from './truliv/truliv.component';
import { AshwagandhaCapsulesComponent } from './ashwagandha-capsules/ashwagandha-capsules.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  declarations: [
    SehatPrashComponent,
    DardMochakComponent,
    MhaMochakComponent,
    ChetanTilaComponent,
    ChetanCapsuleComponent,
    ShilajitPrashComponent,
    TriphlaChurnComponent,
    TrulivComponent,
    AshwagandhaCapsulesComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
