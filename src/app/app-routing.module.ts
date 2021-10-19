import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { CartComponent } from './cart/cart.component';
import { CartadditionComponent } from './cartaddition/cartaddition.component';
import { CustomerComponent } from './customer/customer.component';
//import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
//import { CartComponent } from './cart/cart.component';
import { DeleteflowerComponent } from './deleteflower/deleteflower.component';
import { EditflowerComponent } from './editflower/editflower.component';
import { FlowerComponent } from './flower/flower.component';
import { LogoutComponent } from './logout/logout.component';
import { ManageProfileComponent } from './manage-profile/manage-profile.component';
import { MyorderComponent } from './myorder/myorder.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { RegisterComponent } from './register/register.component';
import { RegisterflowerComponent } from './registerflower/registerflower.component';
import { RemovefromcartComponent } from './removefromcart/removefromcart.component';
import { UpdateStatusComponent } from './update-status/update-status.component';

const routes: Routes = [
  {path:'cartadd/:id',component:CartadditionComponent},
  {path:'cart',component:CartComponent},
  {path:'removefromcart/:cartId',component:RemovefromcartComponent},
  {path:'addtocart/:cartId',component:AddToCartComponent},
  {path:'editflower/:id',component:EditflowerComponent},
  {path:'deleteflower/:id',component:DeleteflowerComponent},
  {path:'flower',component:FlowerComponent},
  {path:'registerflower',component:RegisterflowerComponent},
  {path:'', component : CustomerComponent},
  {path:'register', component : RegisterComponent},
  {path:'privacy', component : PrivacyComponent},
  {path:'manageProfile', component : ManageProfileComponent},
  {path:'logout', component : LogoutComponent},
  {path:'myorder', component : MyorderComponent},
  {path:'updateStatus/:id', component : UpdateStatusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
