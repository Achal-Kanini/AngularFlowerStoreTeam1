import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICustomer } from 'Models/ICustomer';
import { ICustomerPost } from 'Models/ICustomerPost';
import { Observable, throwError } from "rxjs"; 

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private regUrl = 'https://localhost:44327/api/Customer/';
     
     constructor(private http: HttpClient) { }
     
     registerMethod(cust: ICustomerPost): Observable<ICustomerPost> {


          return this.http.post<ICustomerPost>(this.regUrl + "RegisterCustomer" , cust ,

            { headers:new HttpHeaders({
                 'Content-Type':'application/json;charset=UTF-8',
                  'Access-Control-Allow-Origin':'*', 
                  'Access-Control-Allow-Method':'*' })})

                
            }
}
