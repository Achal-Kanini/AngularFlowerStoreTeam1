import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import jsPDF from 'jspdf';

import { IOrderDetails } from 'Models/IOrderDetails';
import { MyorderService } from '../myorder.service';
import { FlowerService } from '../Service/flower-service';



@Component({
  selector: 'app-myorder',
  templateUrl: './myorder.component.html',
  styleUrls: ['./myorder.component.css']
})
export class MyorderComponent implements OnInit {

  orderdetails:IOrderDetails[]=[];
  remark: string;

  Admin:boolean=true; usertype:string|null='';
 

  constructor(private router: Router,private route:ActivatedRoute, private obj:MyorderService,private jwtHelper:JwtHelperService) {this.remark = ""}
//constructor(){  }

  // ngOnInit(){
  //   this.orderdetails=this._flowerService.getOrderDetails();
  // }
  
  ngOnInit(){
    this.obj.getOrderDetails().subscribe(data=>{
      this.orderdetails = data;
      console.log(this.orderdetails);
      this.usertype=localStorage.getItem("userType"); if(this.usertype=="User"){ this.Admin=false;}
    });
  }

  downloadPDf(Oid:number,Fid:number,Tprice:number,remark:string,paystatus:string){
    const doc=new jsPDF();
    var temp="Bill:-"+"\n"+"\n"+"Order Number: "+Oid.toString()+"\n"+"Flower Id: "+Fid.toString()+"\n"+"Total Price: "+Tprice.toString()+"\n"+"Remark: "+remark+"\n"+"Payment Status: "+paystatus;
    doc.text(temp,10,10);
    doc.save("bill.pdf");
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
