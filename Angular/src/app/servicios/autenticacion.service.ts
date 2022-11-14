import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AutenticateModel } from '../modelos/AutenticateModel';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  private endPoint = "http://localhost:3000/clientes"
  constructor(private http:HttpClient) { }

  login(user:string,password:string):Observable<AutenticateModel>{
    console.log(user);
    console.log(password);
    return this.http.post<AutenticateModel>(this.endPoint,{
      nombre:user,
      clave:password.toString()
    },{
      headers: new HttpHeaders({})
    })
  }
}
