import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { CartPost } from 'src/Models/CartPost';
import { Flower } from 'src/Models/flower';
import { CartServiceService } from '../cart-service.service';
import { FlowerService } from '../Service/flower-service';

@Component({
  selector: 'app-cartaddition',
  templateUrl: './cartaddition.component.html',
  styleUrls: ['./cartaddition.component.css']
})
export class CartadditionComponent implements OnInit {
  remark: string;
  custmid:number=0;
  flowerdetails :Flower={id: 0,
    name: "",
    occassion: "",
    unitPrice: 0,
    availableQuantity: 0,
    flImage: "",}

  cartdetails :CartPost={
    customerId :0,
    flowerId :0,
    quantity :0,
    itemPrice :0,
    status:"",
    
  }
  constructor(private router: Router,private route:ActivatedRoute, private obj: FlowerService,private obj1:CartServiceService,private jwtHelper:JwtHelperService) {this.remark = ""}

  ngOnInit(): void {

    const cart_id=Number(this.route.snapshot.paramMap.get('id'));
    this.getflowerid_api(cart_id);
    
  }
  getflowerid_api(id:number):void
  {
    // this.flag=true;
    this.obj.getFlowerByID(id).subscribe(data=>
      {
        this.custmid = Number(localStorage.getItem("custmid"));
        this.flowerdetails=data;

        this.cartdetails.customerId=this.custmid;
        this.cartdetails.flowerId=this.flowerdetails.id;
        this.cartdetails.itemPrice=this.flowerdetails.unitPrice;
        this.cartdetails.quantity=1;
        ////check
        this.cartdetails.status="Pending";

        console.log(this.cartdetails);

      })
  }

  cartAdd():void{
    this.obj1.CartAdd(this.cartdetails).subscribe(data=>{
      this.router.navigate(['/cart']);
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
