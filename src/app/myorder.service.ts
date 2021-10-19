import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IOrderDetails } from 'Models/IOrderDetails';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MyorderService {

  // orderdetails:OrderDetails[]=[
  //   {
  //     orderId:1,
  //     flowerId:11,
  //     totalprice:1000,
  //     remark:"Birthday",
  //     paymentStatus:"pending"
  //   },
  //   {orderId:2,
  //     flowerId:12,
  //     totalprice:500,
  //     remark:"Anniversary",
  //     paymentStatus:"Done"
  //   }
  // ];

  public _url : string= "https://localhost:44343/api/Order/OrderdetailsbyCustomerId?id=";

  //public _urlV2 : string= "https://localhost:44343/api/Order/GetAllOrders";
  public _urlV2 : string= "https://localhost:44343/api/Order/AllOrders";

  public _urlV3 : string= "https://localhost:44343/api/Order/UpdateStatusForOrders";
  public _urlV4:string="https://localhost:44343/api/Order/OrderByOrderID?id=";


  usertype:string|null="";

  id:number|null=0;
  constructor( private http:HttpClient) { }
  getOrderDetails():Observable<IOrderDetails[]>{
    //this.id=parseInt(localStorage.getItem("custmid"));
    this.id=Number(localStorage.getItem("custmid"));
    this.usertype=localStorage.getItem("userType");
    console.log(this.id)
    if(this.usertype=="Admin"){
      return this.http.get<IOrderDetails[]>(this._urlV2,
        {
          headers:new HttpHeaders({
          'Content-Type':'application/json;charset=UTF-8',
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Method':'*'
          })
      
        })
    }
    else{
      return this.http.get<IOrderDetails[]>(this._url+this.id,
        {
          headers:new HttpHeaders({
          'Content-Type':'application/json;charset=UTF-8',
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Method':'*'
          })
      
        })
    }
    
  }

  GetOrderById(id:number):Observable<any>{
    return this.http.get<IOrderDetails[]>(this._urlV4+id,
      {
        headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin':'*',
          'Access-Control-Allow-Method':'*'
        })
    
      })
  }

  UpdateStatus(ord:IOrderDetails):Observable<any>
    {
      return this.http.put<IOrderDetails>(this._urlV3,ord,{
        headers:new HttpHeaders(
          {
            'Content-Type':'application/json;charset=UTF-8',
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Method':'*'
          }
        )
      })
    }
  // getOrderDetails(){
  //   return this.orderdetails;
  // }
}
