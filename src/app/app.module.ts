
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlowerComponent } from './flower/flower.component';
import { JwtModule } from "@auth0/angular-jwt";
import { CommonModule } from "@angular/common";


import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EditflowerComponent } from './editflower/editflower.component';
import { DeleteflowerComponent } from './deleteflower/deleteflower.component';
import { RegisterflowerComponent } from './registerflower/registerflower.component';
import { RouterModule } from '@angular/router';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { CartComponent } from './cart/cart.component';
import { RemovefromcartComponent } from './removefromcart/removefromcart.component';
import { CartadditionComponent } from './cartaddition/cartaddition.component';
import { CustomerComponent } from './customer/customer.component';
import { RegisterComponent } from './register/register.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ManageProfileComponent } from './manage-profile/manage-profile.component';
import { LogoutComponent } from './logout/logout.component';
import { MyorderComponent } from './myorder/myorder.component';
import { JwtComponent } from './jwt/jwt.component';
import { UpdateStatusComponent } from './update-status/update-status.component';
//import { MatCardModule } from '@angular/material/card';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';
export function tokenGet() {
  return localStorage.getItem("jwt");
}
@NgModule({
  declarations: [
    AppComponent,
    FlowerComponent,
    EditflowerComponent,
    DeleteflowerComponent,
    RegisterflowerComponent,
    AddToCartComponent,
    CartComponent,
    RemovefromcartComponent,
    CartadditionComponent,
    CustomerComponent,
    RegisterComponent,
    PrivacyComponent,
    ManageProfileComponent,
    LogoutComponent,
    MyorderComponent,
    JwtComponent,
    UpdateStatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
    CommonModule,
    
    RouterModule,JwtModule.forRoot({
      config: {
        tokenGetter: tokenGet,
        allowedDomains: ["*"],
        disallowedRoutes: []
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
