import { Component, OnInit } from '@angular/core';
// import { FormBuilder } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ICustomer } from 'Models/ICustomer';
import { jwtcustomer } from 'Models/jwtcustomer';
import { LoginServService } from '../Service/login-serv.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  phone: string = "";
  password: string = "";
  vendor: string = "";
 // status:boolean=false;

  customer : ICustomer = {
    id: 0,
    name: "",
    email: "",
    phone: "",
    address: "",
    vendor: "",
    password: ""
  }

  jwtcust : jwtcustomer={
    phone :"",
    password:"",
  }
  token:string="";

  edit_emp: FormGroup;
  constructor(public fb:FormBuilder,private router: Router, private obj: LoginServService,private jwtHelper:JwtHelperService) { 

    this.edit_emp=this.fb.group(
      {
        password:[this.customer.password,[Validators.required]],
        phone:[this.customer.phone,[Validators.required]],
        //phone:[this.customer.phone,[Validators.required,Validators.minLength(10)]],
        vendor:[this.customer.vendor,[Validators.required]]
      });
  }


  ngOnInit(): void {
    // this.getid_api();
  }

  
  getid_loginapi(tempPhone:string, tempPass:string ,tempType:string):void
  {

    // this.flag=true;

//    console.log(tempPhone);

    this.obj.loginMethod(tempPhone, tempPass, tempType).subscribe(data=>
      {
        this.customer = data;
        this.jwtcust.phone = this.customer.phone;
        this.jwtcust.password = this.customer.password;
        this.obj.getToken(this.jwtcust).subscribe(data=>{
          this.token = data;
          localStorage.setItem("jwt",this.token);  
          console.log(this.token);  

          localStorage.setItem("custmid",this.customer.id.toString());
          localStorage.setItem("userType",this.customer.vendor);

          this.router.navigate(['/flower']);
         // this.status=true;
        },function(){
          alert("Invalid Username/Password");
        })
        
      })

      // if(this.status==false){
      //   alert("Invalid Username/Password");
      // }
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
