import { Injectable } from '@angular/core';
import { PuntoInteres } from '../models/punto-interes';

@Injectable({
  providedIn: 'root'
})
export class PuntoService {

puntosInteres:Array<PuntoInteres>;


  constructor() { 
      this.puntosInteres = new Array<PuntoInteres>();
      this.puntosInteres = [
        {
          id:1,
          nombre: "Facultad de Ciencias Económicas",
          descripcion: "Casa de Estudios dedicada a la enseñanza universitaria de carreras afines a las económicas, como ser ...",
          latitud: -24.1839416,
          longitud: -65.3049208,
          urlmapa: "http://www.google.com/maps/place/-24.1839416,-65.3049208",
          ultimaModificacion: null
        },
        {
          id:1,
          nombre: "Facultad de Ciencias Agrarias",
          descripcion: "Casa de Estudios dedicada a la enseñanza universitaria de carreras afines a las económicas, como ser ...",
          latitud: -24.1839416,
          longitud: -65.3049208,
          urlmapa: "http://www.google.com/maps/place/-24.1839416,-65.3049208",
          ultimaModificacion: null
        },


      ]

  }

  getPuntos(){
    return this.puntosInteres;
  }

  addPunto(punto: PuntoInteres){

    punto.id = this.getIdDisponible();
    this.puntosInteres.push(punto);


  }

  deletePunto(punto: PuntoInteres){
    var idBorrar = this.puntosInteres.findIndex((item: PuntoInteres) => item.id == punto.id);
    this.puntosInteres.splice(idBorrar, 1);
  }

  updatePunto(punto: PuntoInteres){
    var idBorrar = this.puntosInteres.findIndex((item: PuntoInteres) => item.id == punto.id);    
    this.puntosInteres.splice(idBorrar, 1,punto);

  }

  getIdDisponible(){
    var maxid: number;
    maxid = 0;
    for( var i= 0; i < this.puntosInteres.length; i++){
      if(maxid < this.puntosInteres[i].id){
        maxid = this.puntosInteres[i].id
      }
    }
    return (maxid + 1);
  }

}
