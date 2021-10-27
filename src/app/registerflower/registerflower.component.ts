import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Cart } from 'src/Models/cart';
import { IFlower } from '../flower/flower';
import { FlowerService } from '../Service/flower-service';
declare const encodeImageFileAsURL: any;
@Component({
  selector: 'app-registerflower',
  templateUrl: './registerflower.component.html',
  styleUrls: ['./registerflower.component.css']
})
export class RegisterflowerComponent implements OnInit {
  
  remark: string;
  flowerdetails: IFlower={id: 0,
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
  usertype:string|null="";
  Admin:boolean = true;
  data:File|any;
  custname : string|null = "";
 

  constructor(private router: Router,private route:ActivatedRoute, private obj: FlowerService,private jwtHelper:JwtHelperService) {this.remark = ""}

  ngOnInit(): void {
    this.custname = localStorage.getItem("custname");
    this.usertype=localStorage.getItem("userType"); 
    if(this.usertype=="User"){ 
      this.Admin=false;
    }

    
  }

  fileloader(){
    this.data = encodeImageFileAsURL();

    // var base64 = btoa(this.data);
    // console.log("bas64 is "+base64);
    console.log("data",this.data);
  }

  PostFlower():void{
    console.log(this.flowerdetails);
    this.obj.AddFlowerDetails(this.flowerdetails).subscribe(data=>
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
