import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Cart } from 'src/Models/cart';
import { Flower } from 'src/Models/flower';
import { FlowerService } from '../Service/flower-service';

@Component({
  selector: 'app-editflower',
  templateUrl: './editflower.component.html',
  styleUrls: ['./editflower.component.css']
})
export class EditflowerComponent implements OnInit {
  remark: string;
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
  constructor(private router: Router,private route:ActivatedRoute, private obj: FlowerService,private jwtHelper:JwtHelperService) {this.remark = ""}

  ngOnInit(): void {
    const cart_id=Number(this.route.snapshot.paramMap.get('id'));
    this.getflowerid_api(cart_id);
    
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

  putFlowerDetails():void{
    this.obj.putFlower(this.flowerdetails).subscribe(data=>
      {
        this.router.navigate(['/flower']);
      })

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
