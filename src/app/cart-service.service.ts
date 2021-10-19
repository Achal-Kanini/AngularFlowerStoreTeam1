import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cart } from 'src/Models/cart';
import { Flower } from 'src/Models/flower';
import { orderdetails } from 'src/Models/orderdetils';
import { CartPost } from 'src/Models/CartPost';


@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

    constructor(private http:HttpClient) { }
  
    req:string="https://localhost:44359/api/Cart/";
    req1:string="https://localhost:44322/api/Flow/";
    req2:string="https://localhost:44343/api/Order/";
  
    getCartByCustID(id:number):Observable<Cart[]>
    {
      return this.http.get<Cart[]>(this.req+"CartbyCustID"+"?id="+id,{
        headers:new HttpHeaders({
          'Content-Type':'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin':'*',
          'Access-Control-Allow-Method':'*'
        })
      });
    }
  
    getCartByCartId(id:number):Observable<Cart>
    {
      return this.http.get<Cart>(this.req+"CartByCartID"+"?id="+id,{
        headers:new HttpHeaders({
          'Content-Type':'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin':'*',
          'Access-Control-Allow-Method':'*'
        })
      });
    }
  
    deleteCart(id:number):Observable<any>
    {
     return this.http.delete<any>(this.req+"DeleteItemFromCart"+"?id="+id,{
        headers:new HttpHeaders({
          'Content-Type':'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin':'*',
          'Access-Control-Allow-Method':'*'
        })
      });
    }

    updateStatusInCart(id:number):Observable<Cart>
    {
      return this.http.get<Cart>(this.req+"UpdateStatusInCart?id="+id,{
        headers:new HttpHeaders({
          'Content-Type':'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin':'*',
          'Access-Control-Allow-Method':'*'
        })
      });
    }

    getFlowerByID(id:number):Observable<Flower>
    {
      return this.http.get<Flower>(this.req1+"id?Id="+id,{
        headers:new HttpHeaders({
          'Content-Type':'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin':'*',
          'Access-Control-Allow-Method':'*'
        })
      });
    }

    AddtoOrderDetails(ord:orderdetails):Observable<any>
    {
      return this.http.post<any>(this.req2 + "AddingToOrderDetails",ord,{
        headers:new HttpHeaders({
          'Content-Type':'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin':'*',
          'Access-Control-Allow-Method':'*'
        })
      })
    }


    CartAdd(ord:CartPost):Observable<any>
    {
      return this.http.post<any>(this.req + "AdditemtoCart",ord,{
        headers:new HttpHeaders({
          'Content-Type':'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin':'*',
          'Access-Control-Allow-Method':'*'
        })
      })
    }

  
    // putEmployee(employee:Employee,id:number):Observable<any>
    // {
    //   return this.http.put<Employee>(this.req+"?id="+id,employee,{
    //     headers:new HttpHeaders(
    //       {
    //         'Content-Type':'application/json;charset=UTF-8',
    //         'Access-Control-Allow-Origin':'*',
    //         'Access-Control-Allow-Method':'*'
    //       }
    //     )
    //   })
    // }
  
}
