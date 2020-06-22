import { Injectable } from '@angular/core';
import { Asistente } from '../models/asistente';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AsistenteService {

  asistentes:Array<Asistente>;

  urlBase: string="http://localhost:3000/api/punto1/";
  
    constructor(private _http:HttpClient) { 
        this.asistentes = new Array<Asistente>();
    }
  
    getAsistentes():Observable<any>{
      const httpOptions={
        headers: new HttpHeaders({
  
        })
      }
      return this._http.get(this.urlBase,httpOptions);
    }
  
    addAsistente(asistente: Asistente):Observable<any>{
      console.log("Entro a ADD ASISTENTE SERVICE");
      console.log(asistente);
      const httpOptions={
        headers: new HttpHeaders({
          "Content-Type":"application/json"//le digo que el objeto que va es JSON
        })
      }
      var body=JSON.stringify(asistente)//convierte objeto a json
      return this._http.post(this.urlBase,body,httpOptions);
    }
  
    deleteAsistente(asistente: Asistente):Observable<any>{
      const httpOptions={
        headers: new HttpHeaders({
  
        })
      }
      return this._http.delete(this.urlBase + asistente._id,httpOptions);
    }
  
    updateAsistente(asistente: Asistente):Observable<any>{
      const httpOptions={
        headers: new HttpHeaders({
          "Content-Type":"application/json"//le digo que el objeto que va es JSON
        })
      }
      var body=JSON.stringify(asistente)//convierte objeto a json
      return this._http.put(this.urlBase + asistente._id,body,httpOptions);
    }
  
  }
