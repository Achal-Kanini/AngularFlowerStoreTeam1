import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http"; 
import { Injectable } from "@angular/core"; 
import { jwtcustomer } from "Models/jwtcustomer";
import { Observable, throwError } from "rxjs"; 
import {catchError,tap} from 'rxjs/operators'; 
import { ICustomer } from "../../../Models/ICustomer";

@Injectable({ providedIn:'root' }) 
 
export class LoginServService{ 
     // private loginUrl = 'https://localhost:44327/api/Customer/';
     private loginUrl = 'https://customerapiflower.azurewebsites.net/api/Customer/'
     // private req = "https://localhost:44311/api/Auth";
     private req = "https://jwtteam1.azurewebsites.net/api/Auth";
     
     constructor(private http: HttpClient) { }
     
     loginMethod(tempPhone:string, tempPass:string, tempType:string): Observable<ICustomer> {


          return this.http.get<ICustomer>(this.loginUrl + "CustomerLogin" + "?tempPhone=" + tempPhone
          + "&tempPass=" + tempPass + "&tempType=" + tempType,

            { headers:new HttpHeaders({
                 'Content-Type':'application/json;charset=UTF-8',
                  'Access-Control-Allow-Origin':'*', 
                  'Access-Control-Allow-Method':'*' })
          })            
     }
     getToken(cust:jwtcustomer):Observable<any>{
          return this.http.post(this.req,cust,
          {
               headers: new HttpHeaders({
                 'Content-Type':'application/json;charset=UTF-8',
                 'Access-Control-Allow-Origin':'*',
                 'Access-Control-Allow-Method':'*',    
                 'Accept': 'text/html, application/xhtml+xml, */*'
           }),responseType:"text"} 
          )
     }
}

