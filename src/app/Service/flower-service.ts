import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import {catchError,tap} from 'rxjs/operators';
import { FlowerPost } from "src/Models/flowerpost";
import { IFlower } from "../flower/flower";
@Injectable({
    providedIn:'root'
})


export class FlowerService{
  private flowerUrl = 'https://localhost:44322/api/Flow/GetAllFlower';
  req:string="https://localhost:44359/api/Cart/";
  req1:string="https://localhost:44322/api/Flow/";
  req2:string="https://localhost:44343/api/Order/";

  constructor(private http: HttpClient) { }
  getFlowers(): Observable<IFlower[]> {
    return this.http.get<IFlower[]>(this.flowerUrl,
        {
            headers:new HttpHeaders({
            'Content-Type':'application/json;charset=UTF-8',
              'Access-Control-Allow-Origin':'*',
              'Access-Control-Allow-Method':'*'
            })}).pipe(
      //tap(data => console.log('All: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
    

  }

  getFlowerByID(id:number):Observable<IFlower>
  {
    return this.http.get<IFlower>(this.req1+"id?Id="+id,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    });
  }

  putFlower(flower:IFlower):Observable<any>
    {
      return this.http.put<IFlower>(this.req1+"UpdateFlower",flower,{
        headers:new HttpHeaders(
          {
            'Content-Type':'application/json;charset=UTF-8',
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Method':'*'
          }
        )
      })
    }

    deleteFlower(id:number):Observable<any>
    {
     return this.http.delete<any>(this.req1+"DeleteFlowerbyId"+"?id="+id,{
        headers:new HttpHeaders({
          'Content-Type':'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin':'*',
          'Access-Control-Allow-Method':'*'
        })
      });
    }

    AddFlowerDetails(flo:FlowerPost):Observable<any>
    {
      return this.http.post<any>(this.req1+ "RegisterFlower",flo,{
        headers:new HttpHeaders({
          'Content-Type':'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin':'*',
          'Access-Control-Allow-Method':'*'
        })
      })
    }


  private handleError(err: HttpErrorResponse): Observable<never> {

    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {

      errorMessage = `An error occurred: ${err.error.message}`;
    } else {

      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  } 

}


