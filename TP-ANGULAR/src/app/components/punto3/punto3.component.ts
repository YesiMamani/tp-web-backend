import { Component, OnInit } from '@angular/core';
import { Pasaje } from 'src/app/models/pasaje';
import { VentasService } from 'src/app/services/ventas.service';

@Component({
  selector: 'app-punto3',
  templateUrl: './punto3.component.html',
  styleUrls: ['./punto3.component.css']
})
export class Punto3Component implements OnInit {
  venta: Pasaje;
  vector_ventas:Array<Pasaje>;
  precio_descuento: number=0;
  precio_actual:number=0;
  mostrar:boolean;
  cantMenor:number;
  cantAdulto:number;
  cantJubilado:number;

  constructor(private ventaservice: VentasService) { 
    this.venta=new Pasaje();
    this.vector_ventas=new Array<Pasaje>();
    this.cantMenor=0;
    this.cantAdulto=0;
    this.cantJubilado=0;
    this.listVenta();
  }

  ngOnInit(): void {
  }

  saveVenta(){
    this.venta.fechaCompra=new Date();
    this.ventaservice.addPasaje(this.venta);
    if (this.venta.categoriaPasajero=='a') {
      this.cantAdulto=this.cantAdulto+1;
    } else {
      if (this.venta.categoriaPasajero=='m') {
        this.cantMenor=this.cantMenor+1;
      }else{
        this.cantJubilado=this.cantJubilado+1;
      }
    }
    this.venta=new Pasaje();
    this.mostrar=false;
    this.precio_descuento=0;
    this.precio_actual=0;
  }

  listVenta(){    
    this.vector_ventas = new Array<Pasaje>();
    this.ventaservice.getPasajes().subscribe(
        (result)=>{
          var pasaje:Pasaje=new Pasaje();
          result.forEach(element => {
            Object.assign(pasaje, element);
            this.vector_ventas.push(pasaje);
            pasaje=new Pasaje();
          });
        },
    (error)=>{console.log(error);}
    );
  }

  limpiarVenta(){
    this.venta=new Pasaje();
  }

  elegirVenta(venta: Pasaje){
    this.venta = venta;
  }

  calcularDescuento(){
    if(this.venta.categoriaPasajero=='m'){
      this.precio_descuento=(this.venta.precioPasaje*25)/100;
      this.precio_actual=this.venta.precioPasaje-this.precio_descuento;
      this.mostrar=true;
    }
    if(this.venta.categoriaPasajero=='j'){
      this.precio_descuento=(this.venta.precioPasaje*50)/100;
      this.precio_actual=this.venta.precioPasaje-this.precio_descuento;
      this.mostrar=true;
    }
    if(this.venta.categoriaPasajero=='a' || this.venta.categoriaPasajero=='s'){
      this.mostrar=false;
    }
  }

  borrarVenta(venta: Pasaje){
    if (this.venta.categoriaPasajero=='a') {
      this.cantAdulto=this.cantAdulto-1;
    } else {
      if (this.venta.categoriaPasajero=='m') {
        this.cantMenor=this.cantMenor-1;
      }else{
        this.cantJubilado=this.cantJubilado-1;
      }
    }
    this.ventaservice.deletePasaje(venta);
    this.listVenta(); 
  }

  modificarVenta(){
    //actualizo fecha ultima modificación
    this.venta.fechaCompra = new Date();

    this.ventaservice.updatePasaje(this.venta);
    this.venta = new Pasaje();
    this.listVenta();
  }
}
