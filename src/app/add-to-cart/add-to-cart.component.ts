import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Cart } from 'src/Models/cart';
import { Flower } from 'src/Models/flower';
import { orderdetails } from 'src/Models/orderdetils';

import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {

  msg:string = "";
  remark:string;
  flowerdetails :Flower={id: 0,
    name: "",
    occassion: "",
    unitPrice: 0,
    availableQuantity: 0,
    flImage: "",}

  cartdetails :Cart={cartId :0,
    customerId :0,
    flowerId :0,
    quantity :0,
    itemPrice :0,
    status:"",
    flower:this.flowerdetails
  }

  orderdetail :orderdetails={
    "flowerId": 0,
    "customerId": 0,
    "cartId": 0,
    "totalprice": 0,
    "remark": "",
    "paymentStatus": "",
  }
  
  constructor(private router: Router,private route:ActivatedRoute, private obj: CartServiceService,private jwtHelper:JwtHelperService) {this.remark = ""}

  ngOnInit(): void {
    const cart_id=Number(this.route.snapshot.paramMap.get('cartId'));
    this.getcartbycartID(cart_id);
  }

  getcartbycartID(id:number):void
  {
    // this.flag=true;
    this.obj.getCartByCartId(id).subscribe(data=>
      {
        this.cartdetails=data;

        this.orderdetail.cartId = this.cartdetails.cartId;
        this.orderdetail.customerId = this.cartdetails.customerId;
        this.orderdetail.flowerId = this.cartdetails.flowerId;
        this.orderdetail.totalprice = this.cartdetails.quantity*this.cartdetails.itemPrice;
        this.orderdetail.paymentStatus = "Out for Delievery";

        console.log(this.cartdetails);
      })
  }

  postOrderDetails():void{
    if(this.orderdetail.remark == ""){
      this.orderdetail.remark = "--NA--";
    }
    this.obj.AddtoOrderDetails(this.orderdetail).subscribe(data=>
      {
        console.log("Added data for orderdetails is succedded")
        this.obj.updateStatusInCart(this.orderdetail.cartId).subscribe(data2=>
          {
            console.log("Updated status of cart: "+data2.status)
          })
        this.msg="Added"
        this.router.navigate(['/myorder']);
      });
      console.log(this.msg);

      //this.router.navigate(['/myorder']);

  }
  
IsAuthendicated():boolean{
  const token:string|null=localStorage.getItem("jwt");
  if(token && !this.jwtHelper.isTokenExpired(token) && token!=null)
  {
    return true;
  }
  else
  {
    return false;
  }
}
}
