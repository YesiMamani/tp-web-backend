import { Component, OnInit } from '@angular/core';
import { Mensaje} from '../../models/mensaje';
import { Empresa } from 'src/app/models/empresa';
import { MensajeService } from 'src/app/services/mensaje.service';
import { EmpresaService } from 'src/app/services/empresa.service';

@Component({
  selector: 'app-punto1',
  templateUrl: './punto1.component.html',
  styleUrls: ['./punto1.component.css']
})
export class Punto1Component implements OnInit {
  ////////////////////////--------------AHORA ESTE ES EL PUNTO 2 DEL TP BACKEND-------- //////////////////////
  mensaje: Mensaje;
  caracteresRest:number;
  caracteresMax:number;
  empresas: Array<Empresa>;

  constructor(private mensajeService:MensajeService, private empresaService:EmpresaService) { 
    this.mensaje=new Mensaje();
    this.caracteresMax=120;
    this.caracteresRest=120;
    this.refrescarEmpresas();
  }

  ngOnInit(): void {
  }

  actualizarCaracteresRestantes(){
    this.caracteresRest=this.caracteresMax-this.mensaje.texto.length;
  }

  limpiarFormulario(){
    this.mensaje=new Mensaje();
    this.caracteresRest=120;
  }

  enviarMensaje(){
    this.mensaje.fecha = new Date();
    console.log(this.mensaje);
    this.mensajeService.addMensaje(this.mensaje).subscribe(
      (result)=>{
        alert("Mensaje Enviado");
      },
      (error)=>{
        console.log(error);
      }
    );
    
    this.mensaje = new Mensaje();
    this.limpiarFormulario();
  }

  refrescarEmpresas(){
    this.empresas = new Array<Empresa>();
    this.empresaService.getEmpresas().subscribe(
        (result)=>{
          var vempresa: Empresa=new Empresa();
          result.forEach(element => {
            Object.assign(vempresa, element);
            this.empresas.push(vempresa);
            vempresa=new Empresa();
          });
        },
    (error)=>{console.log(error);}
    );
  }
}
