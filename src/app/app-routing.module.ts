import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanActivateRouteGuard } from './can-activate-route.guard';
import { LoginComponent } from './login/login.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { PaymentOrderComponent } from './payment-order/payment-order.component';
import { SecblogComponent } from './section/secblog/secblog.component';
import { SecaboutComponent } from './section/secabout/secabout.component';
import { SecproductComponent } from './section/secproduct/secproduct.component';
import { ProfileComponent } from './login/profile/profile.component';
import { SettingComponent } from './login/setting/setting.component';
import { EditProfileComponent } from './login/profile/edit-profile/edit-profile.component';
import { ResetPasswordComponent } from './login/reset-password/reset-password.component';
import { ChangepasswordComponent } from './login/changepassword/changepassword.component';
import { ContactUsComponent } from './page/contact-us/contact-us.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutUsModule } from './page/about-us/about-us.module';
import { DiseasesModule } from './page/diseases/diseases.module';
import { ProductsModule } from './page/products/products.module';
import { BlogModule } from './page/blog/blog.module';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'about-us', loadChildren: './page/about-us/about-us.module#AboutUsModule'},
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'diseases', loadChildren: './page/diseases/diseases.module#DiseasesModule' },
  { path: 'products', loadChildren: './page/products/products.module#ProductsModule' },
  { path: 'blog', loadChildren: './page/blog/blog.module#BlogModule'  },
  { path: 'cart-list', component: CartListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'payment-order', component: PaymentOrderComponent, canActivate: [CanActivateRouteGuard] },
  { path: 'secblog', component: SecblogComponent },
  { path: 'secabout', component: SecaboutComponent },
  { path: 'profile/:number', component: ProfileComponent, canActivate: [CanActivateRouteGuard] },
  { path: 'edit-profile', component: EditProfileComponent, canActivate: [CanActivateRouteGuard] },
  { path: 'setting/:number', component: SettingComponent, canActivate: [CanActivateRouteGuard] },
  { path: 'secproduct', component: SecproductComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'changepassword', component: ChangepasswordComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
