import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/Models/cart';
import { CartServiceService } from '../cart-service.service';
import { Router } from "@angular/router";
import { JwtHelperService } from '@auth0/angular-jwt';
import { Flower } from "src/Models/flower";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart :Cart[]=[];
  firstnum : number;
  cusid:number;
  msg:string="";
custmid:number=0;
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
  
  constructor(private router: Router, private obj: CartServiceService,private jwtHelper:JwtHelperService) { this.firstnum = 0,this.cusid = 0}

  ngOnInit(): void {
    this.custmid = Number(localStorage.getItem("custmid"));
this.get_apibyCustId(this.custmid);
  }

  get_apibyCustId(id:number):void{
    this.obj.getCartByCustID(id).subscribe(data=>
      {
        this.cart=data;

        // for(var item of this.cart){
        //   this.obj.getFlowerByID(item.flowerId).subscribe(data2=>
        //     {
        //       item.flower=data2;
        //       console.log("Flower item is :" + item.flower.name);
        //       console.log("Flower object is :"+this.cart[0].flower.name);
        //       console.log("Flower object is :"+this.cart[1].flower.name);
        //       console.log("Flower object is :"+this.cart[2].flower.name);
        //     })
        // }
        this.cart.forEach((item,index) =>{
          this.obj.getFlowerByID(item.flowerId).subscribe(data2=>
            {
              this.cart[index].flower=data2;
              console.log("Flower item in forEach loop index :"+index+" is " + this.cart[index].flower.name);
            })
        })
        // console.log(this.cart);
      }
    );
    // for(var item of this.cart){
    //   this.obj.getFlowerByID(item.flowerId).subscribe(data2=>
    //     {
    //       item.flower=data2;
    //       console.log("Flower item is :" + item.flower);
    //       console.log(this.cart);
    //     })
    // }
  }

  getid_api(id:number):void
  {
    // this.flag=true;
    this.obj.getCartByCartId(id).subscribe(data=>
      {
        this.cartdetails=data;
        console.log(this.cartdetails);
      })
  }

  getflowerid_api(id:number):void
  {
    // this.flag=true;
    this.obj.getFlowerByID(id).subscribe(data=>
      {
        this.flowerdetails=data;
        console.log(this.cartdetails);
      })
  }

  // delete_api(id:number):void
  // {
  //   this.obj.deleteCart(id).subscribe(data=>
  //     {
  //       this.msg="Deleted";
  //       alert(this.msg);
  //     });
  // }

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
