import { Component, OnInit } from '@angular/core';
import { Asistente} from '../../models/asistente';
import { AsistenteService } from 'src/app/services/asistente.service';

@Component({
  selector: 'app-punto2',
  templateUrl: './punto2.component.html',
  styleUrls: ['./punto2.component.css']
})
export class Punto2Component implements OnInit {
  ////////////////////////--------------AHORA ESTE ES EL PUNTO 1 DEL TP BACKEND-------- //////////////////////
  asistente:Asistente;

  asistentes:Array<Asistente>;

  constructor(private asistenteService:AsistenteService) { 
    this.asistente= new Asistente();
    this.asistente.solicitaConstancia=false;
    this.asistentes=new Array<Asistente>();
    this.refrescarAsistentes();
  }

  ngOnInit(): void {
  }

  registrarAsistente(){    
    console.log(this.asistente);
    this.asistenteService.addAsistente(this.asistente).subscribe(
      (result)=>{
        alert("Asistente Guardado");
      },
      (error)=>{
        console.log(error);
      }
    );
    
    this.refrescarAsistentes();
    this.asistente = new Asistente();
    this.asistente.solicitaConstancia=false;
    console.log(this.asistentes);    
  }

  refrescarAsistentes(){
    this.asistentes = new Array<Asistente>();
    this.asistenteService.getAsistentes().subscribe(
        (result)=>{
          var asist:Asistente=new Asistente();
          result.forEach(element => {
            Object.assign(asist, element);
            this.asistentes.push(asist);
            asist=new Asistente();
          });
        },
    (error)=>{console.log(error);}
    );
  }

  elegirAsistente(asistente: Asistente){    
    this.asistente = asistente;    
  }

  borrarAsistente(asistente: Asistente){
    this.asistenteService.deleteAsistente(asistente).subscribe(
      (result)=>{
        alert("Asistente Eliminado");
      },
      (error)=>{
        console.log(error);
      }
    );    
    this.refrescarAsistentes();
  }

  modificarAsistente(){
    //actualizo fecha ultima modificación    

    this.asistenteService.updateAsistente(this.asistente).subscribe(
      (result)=>{
        alert("Asistente Actualizado");
      },
      (error)=>{
        console.log(error);
      }
    );    
    this.asistente = new Asistente();
    this.asistente.solicitaConstancia=false;
    this.refrescarAsistentes()
  }
}
