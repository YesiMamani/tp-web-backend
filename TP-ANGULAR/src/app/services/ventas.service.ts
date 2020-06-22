import { Injectable } from '@angular/core';
import { Pasaje } from '../models/pasaje';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VentasService {
  pasajes:Array<Pasaje>;

  urlBase: string="http://localhost:3000/api/punto3/";
  
    constructor(private _http:HttpClient) { 
        this.pasajes = new Array<Pasaje>();
    }
  
    getPasajes():Observable<any>{
      const httpOptions={
        headers: new HttpHeaders({
  
        })
      }
      return this._http.get(this.urlBase,httpOptions);
    }
  
    addPasaje(pasaje: Pasaje):Observable<any>{
      console.log("Entro a ADD PASAJE SERVICE");
      console.log(pasaje);
      const httpOptions={
        headers: new HttpHeaders({
          "Content-Type":"application/json"//le digo que el objeto que va es JSON
        })
      }
      var body=JSON.stringify(pasaje)//convierte objeto a json
      return this._http.post(this.urlBase,body,httpOptions);
    }
  
    deletePasaje(pasaje: Pasaje):Observable<any>{
      const httpOptions={
        headers: new HttpHeaders({
  
        })
      }
      return this._http.delete(this.urlBase + pasaje._id,httpOptions);
    }
  
    updatePasaje(pasaje: Pasaje):Observable<any>{
      const httpOptions={
        headers: new HttpHeaders({
          "Content-Type":"application/json"//le digo que el objeto que va es JSON
        })
      }
      var body=JSON.stringify(pasaje)//convierte objeto a json
      return this._http.put(this.urlBase + pasaje._id,body,httpOptions);
    }
}
