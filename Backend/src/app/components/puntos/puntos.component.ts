import { Component, OnInit } from '@angular/core';
import { PuntoInteres  } from './../../models/punto-interes';
import { PuntoService } from 'src/app/services/punto.service';
import { SectorService } from 'src/app/services/sector.service';

@Component({
  selector: 'app-puntos',
  templateUrl: './puntos.component.html',
  styleUrls: ['./puntos.component.css']
})
export class PuntosComponent implements OnInit {

  puntoInteres: PuntoInteres;
  puntosInteres: Array<PuntoInteres>;
  urlTest: string;


  constructor(private puntoService: PuntoService, private sectorService: SectorService) { 
    this.puntoInteres = new PuntoInteres();
    this.puntosInteres = new Array<PuntoInteres>();

    this.urlTest = "http://www.google.com/maps/place/";
    this.refrescarPuntos();
  }

  ngOnInit(): void {
  }

  actualizarUrlTest(){
    this.urlTest = "http://www.google.com/maps/place/" + this.puntoInteres.latitud + "," + this.puntoInteres.longitud;
  }

  guardarPunto(){
    //console.log("Guardando ...");
    //this.puntosInteres.push(this.puntoInteres);
    //console.log(this.puntosInteres);
  
    this.puntoInteres.ultimaModificacion = new Date();

    this.puntoService.addPunto(this.puntoInteres);
    this.refrescarPuntos();
    this.puntoInteres = new PuntoInteres();

    console.log(this.puntosInteres);

  }

  refrescarPuntos(){
    this.puntosInteres = this.puntoService.getPuntos();
  }

  elegirPunto(punto: PuntoInteres){
    this.puntoInteres = punto;
  }

  borrarPunto(punto: PuntoInteres){
    this.puntoService.deletePunto(punto);
    this.refrescarPuntos();
  }

  limpiarPunto(){
    this.puntoInteres = new PuntoInteres();
  }


  modificarPunto(){
    //actualizo fecha ultima modificación
    this.puntoInteres.ultimaModificacion = new Date();

    this.puntoService.updatePunto(this.puntoInteres);
    this.puntoInteres = new PuntoInteres();
    this.refrescarPuntos()
  }

}
