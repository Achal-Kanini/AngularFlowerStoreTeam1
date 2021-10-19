import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { IOrderDetails } from 'Models/IOrderDetails';
import { MyorderService } from '../myorder.service';

@Component({
  selector: 'app-update-status',
  templateUrl: './update-status.component.html',
  styleUrls: ['./update-status.component.css']
})
export class UpdateStatusComponent implements OnInit {

  orders:IOrderDetails={
    orderId:0,
    flowerId:0,
    totalprice:0,
    remark:"",
    paymentStatus:"",

  }

  names=["Pending","Approved","Out for delivery","Delivered"];
  selected:string="";

  //option:string="";
  //update(e:string){ this.selected = e.target.value }

  constructor(private router: Router,private route:ActivatedRoute, private obj: MyorderService,private jwtHelper:JwtHelperService) {

   
   }

  ngOnInit(): void {
    const cart_id=Number(this.route.snapshot.paramMap.get('id'));
    this.getid_api(cart_id);
  }

  getid_api(id:number):void
  {
    // this.flag=true;
    this.obj.GetOrderById(id).subscribe(data=>
      {
        this.orders=data;
        console.log(this.orders);
      })
  }

  putStatus():void{
    
    this.obj.UpdateStatus(this.orders).subscribe(data=>
      {
        this.router.navigate(['/myorder']);
      })

  }

  // get_status(status){

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

