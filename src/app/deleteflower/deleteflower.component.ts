import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Cart } from 'src/Models/cart';
import { IFlower } from '../flower/flower';
import { FlowerService } from '../Service/flower-service';

@Component({
  selector: 'app-deleteflower',
  templateUrl: './deleteflower.component.html',
  styleUrls: ['./deleteflower.component.css']
})
export class DeleteflowerComponent implements OnInit {
  remark: string;
  flowerdetails :IFlower={id: 0,
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
  msg: string='';
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
        this.flowerdetails.flImage='data:image/jpeg;base64,' +this.flowerdetails.flImage;
        console.log(this.flowerdetails);
      })
  }

  delete_api(id:number):void
  {
    this.obj.deleteFlower(id).subscribe(data=>
      {
        this.msg="Deleted";
        alert(this.msg);
      });
      this.router.navigate(['/flower']);
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
