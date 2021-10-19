import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FlowerService } from '../Service/flower-service';
import { IFlower } from './flower';
import { DomSanitizer } from '@angular/platform-browser';
import { SecurityContext } from '@angular/core';
import { Injectable, Type } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { JwtHelperService } from '@auth0/angular-jwt';
@Component({
  selector: 'app-flower',
  templateUrl: './flower.component.html',
  styleUrls: ['./flower.component.css']
})
export class FlowerComponent implements OnInit {
  // form = new FormGroup({
  //   website: new FormControl('', Validators.required)
  // })
  // websiteList: any = ['Anniversary','Birthday','Love n Romance','I am sorry','Thank you','Sympathy n Funeral','Congratulations','House Warming']
  // get f(){
  //   return this.form.controls;
  // }
  // submit(){
  //   console.log(this.form.value);
  //   this.filteredFlowers = this.performFilter(this.form.value);
  //   console.log(this.filteredFlowers)
    
  // }

admin:boolean=true;
usertype:string|null='';




pageTitle: string = 'Flowers';
  
sub!: Subscription;
flowers: IFlower[] = [];
filteredFlowers:IFlower[]=[];
base64data:any
private _listFilter: string = '';
get listFilter(): string {
  return this._listFilter;
}
set listFilter(value: string) {
  this._listFilter = value;
  console.log('In setter:', value);
  this.filteredFlowers = this.performFilter(value);
}
performFilter(filterBy: string): IFlower[] {
 filterBy = filterBy.toLocaleLowerCase();
  return this.flowers.filter((flowers: IFlower) =>
  flowers.occassion.toLocaleLowerCase().includes(filterBy));
}
constructor(private productService: FlowerService,
    private sanitizer : DomSanitizer,private jwtHelper:JwtHelperService) {}
  ngOnInit(): void {
    this.usertype=localStorage.getItem("userType");
    if(this.usertype=="User"){

  this.admin=false;
}
    this.sub = this.productService.getFlowers().subscribe({
      next:flowers=>{
      for (const key in flowers) {
        if (Object.prototype.hasOwnProperty.call(flowers, key)) {
            const element = flowers[key].flImage;
            flowers[key].flImage='data:image/jpeg;base64,' +element;
        }   
      }
      this.flowers=flowers;
      this.filteredFlowers = this.flowers;
      },
    }); 
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

addToCart():void{
  console.log("add to cart")
}
editFlower():void{
  console.log("edit flower")
}
deleteFlower():void{
  console.log("delete flower")

}

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
