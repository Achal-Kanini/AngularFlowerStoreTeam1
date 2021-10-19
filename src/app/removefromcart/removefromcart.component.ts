import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/Models/cart';
import { CartServiceService } from '../cart-service.service';
import { ActivatedRoute, Router } from "@angular/router";
import { JwtHelperService } from '@auth0/angular-jwt';
import { Flower } from 'src/Models/flower';

@Component({
  selector: 'app-removefromcart',
  templateUrl: './removefromcart.component.html',
  styleUrls: ['./removefromcart.component.css']
})
export class RemovefromcartComponent implements OnInit {
  msg:string = "";
  flowerdetails :Flower={id: 0,
    name: "",
    occassion: "",
    unitPrice: 0,
    availableQuantity: 0,
    flImage: "",}

  cart :Cart={cartId :0,
    customerId :0,
    flowerId :0,
    quantity :0,
    itemPrice :0,
    status:"",
    flower:this.flowerdetails}

  constructor(private router: Router,private route:ActivatedRoute, private obj: CartServiceService,private jwtHelper:JwtHelperService) {
    const cart_id=Number(this.route.snapshot.paramMap.get('cartId'));
    this.getid_api(cart_id);
  }
  ngOnInit(): void {
    
  }

  getid_api(id:number):void
  {
    // this.flag=true;
    this.obj.getCartByCartId(id).subscribe(data=>
      {
        this.cart=data;
        console.log(this.cart);
      })
  }

  delete_api(id:number):void
  {
    this.obj.deleteCart(id).subscribe(data=>
      {
        this.msg="Deleted";
        alert(this.msg);
      });
      this.router.navigate(['/cart']);
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
