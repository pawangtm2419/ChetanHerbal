import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ProductModule } from './product/product.module';
import { DiseaseModule } from './disease/disease.module';
import { CanActivateRouteGuard } from './can-activate-route.guard';
import { AppService } from './app.service';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './section/header/header.component';
import { FooterComponent } from './section/footer/footer.component';
import { ReviewComponent } from './page/review/review.component';
import { SecproductComponent } from './section/secproduct/secproduct.component';
import { SecdiseaseComponent } from './section/secdisease/secdisease.component';
import { SecaboutComponent } from './section/secabout/secabout.component';
import { SecsliderComponent } from './section/secslider/secslider.component';
import { TopHeaderComponent } from './section/top-header/top-header.component';
import { SecblogComponent } from './section/secblog/secblog.component';
import { LoginComponent } from './login/login.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { SideComponent } from './cart-list/side/side.component';
import { PaymentOrderComponent } from './payment-order/payment-order.component';
import { SettingComponent } from './login/setting/setting.component';
import { EditProfileComponent } from './login/profile/edit-profile/edit-profile.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ResetPasswordComponent } from './login/reset-password/reset-password.component';
import { ChangepasswordComponent } from './login/changepassword/changepassword.component';
import { ProfileComponent } from './login/profile/profile.component';
import { ContactUsComponent } from './page/contact-us/contact-us.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ReviewComponent,
    SecproductComponent,
    SecdiseaseComponent,
    SecaboutComponent,
    SecsliderComponent,
    TopHeaderComponent,
    SecblogComponent,
    LoginComponent,
    CartListComponent,
    SideComponent,
    PaymentOrderComponent,
    SettingComponent,
    EditProfileComponent,
    ResetPasswordComponent,
    ChangepasswordComponent,
    ProfileComponent,
    ContactUsComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    DiseaseModule,
    ProductModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [AppService, CanActivateRouteGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
