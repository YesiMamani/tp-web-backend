import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mensaje } from '../models/mensaje';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {

  mensajes:Array<Mensaje>;

  urlBase: string="http://localhost:3000/api/punto2/";
  
    constructor(private _http:HttpClient) { 
        this.mensajes = new Array<Mensaje>();
    }
  
    getMensajes():Observable<any>{
      const httpOptions={
        headers: new HttpHeaders({
  
        })
      }
      return this._http.get(this.urlBase,httpOptions);
    }
  
    addMensaje(mensaje: Mensaje):Observable<any>{
      console.log("Entro a ADD PUNTO SERVICE");
      console.log(mensaje);
      const httpOptions={
        headers: new HttpHeaders({
          "Content-Type":"application/json"//le digo que el objeto que va es JSON
        })
      }
      var body=JSON.stringify(mensaje)//convierte objeto a json
      return this._http.post(this.urlBase,body,httpOptions);
    }
  
    deleteMensaje(mensaje: Mensaje):Observable<any>{
      const httpOptions={
        headers: new HttpHeaders({
  
        })
      }
      return this._http.delete(this.urlBase + mensaje._id,httpOptions);
    }
  
    updateMensaje(mensaje: Mensaje):Observable<any>{
      const httpOptions={
        headers: new HttpHeaders({
          "Content-Type":"application/json"//le digo que el objeto que va es JSON
        })
      }
      var body=JSON.stringify(mensaje)//convierte objeto a json
      return this._http.put(this.urlBase + mensaje._id,body,httpOptions);
    }
}
