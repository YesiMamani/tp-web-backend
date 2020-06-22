import { Component, OnInit } from '@angular/core';
import { PalabrasService } from 'src/app/services/palabras.service';
import { Palabra } from 'src/app/models/palabra';

@Component({
  selector: 'app-punto4',
  templateUrl: './punto4.component.html',
  styleUrls: ['./punto4.component.css']
})
export class Punto4Component implements OnInit {
  cantidad_vidas: number=6;
  cantidad_puntaje: number=0;
  tematica_actual: string="";
  vector_palabras_actual: Array<any>;
  palabra_espaniol_actual:Palabra;
  palabraLetraIngresada:Array<any>;
  disabledLetraIngresada:Array<boolean>;
  palabra_ingles_Actual:Array<string>;
  cantidad_letras_correctas:number=0; 
  posicion_elemento_palabra:number=0;
  abecedario = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  palabras_juego = [];
    
  constructor(private palabrasService:PalabrasService) { 
    this.palabras_juego=palabrasService.listPalabras();
    this.vector_palabras_actual= new Array<any>();
    this.palabra_espaniol_actual=new Palabra;
    this.palabra_ingles_Actual=new Array<any>();
    this.palabraLetraIngresada=[];//["","","","","","","","","",""];
    this.disabledLetraIngresada=[];//[false,false,false,false,false,false,false,false,false,false];
  } 

  ngOnInit(): void {
  }
  seleccionarPalabra(){
    if (this.tematica_actual!="") {
      console.log('ingreso a seleccionarPalabra');
      this.vector_palabras_actual=this.palabrasService.listPalabrasPorCategoria(this.tematica_actual);
      console.log(this.vector_palabras_actual);
      console.log(this.posicion_elemento_palabra);
      this.palabra_espaniol_actual=this.vector_palabras_actual[this.posicion_elemento_palabra];
      console.log(this.palabra_espaniol_actual);
      this.palabra_ingles_Actual=this.palabra_espaniol_actual.palabraingles.split('');
      this.palabraLetraIngresada=[];//["","","","","","","","","",""];
      this.disabledLetraIngresada=[];//[false,false,false,false,false,false,false,false,false,false];
      this.cantidad_letras_correctas=0;
    }
  }

  controlarLetra(posicion?:string){
    console.log("controlarLetra-Position-->"+posicion);
    if (this.palabraLetraIngresada[posicion]!="") {
      if (this.palabraLetraIngresada[posicion].toLowerCase()==this.palabra_ingles_Actual[posicion].toLowerCase()) {
        console.log(this.disabledLetraIngresada);
        this.disabledLetraIngresada[posicion]=true;
        console.log(this.disabledLetraIngresada);
        this.cantidad_letras_correctas=this.cantidad_letras_correctas+1;
        console.log("---------------------");
      }else{
        this.disabledLetraIngresada[posicion]=false;
        this.cantidad_vidas=this.cantidad_vidas-1;
      }
      this.controlarIntentosyVidas();
    }
  }

  controlarIntentosyVidas(){
    if (this.cantidad_vidas==0) {
      alert('GAME OVER');
      this.resetearVariablesyVidas();
    }else{
      //verifico palabra completa para cargar la siguiente
      if (this.cantidad_letras_correctas==this.palabra_ingles_Actual.length) {
        this.cantidad_puntaje=this.cantidad_puntaje+1;
        this.posicion_elemento_palabra=this.posicion_elemento_palabra+1;
        if (this.posicion_elemento_palabra<this.vector_palabras_actual.length) {
          this.seleccionarPalabra();
        }else{
          alert('FIN DEL JUEGO!');
          this.posicion_elemento_palabra=0;
        }
      }
    }
  }
  resetearVariablesyVidas(){
    this.palabraLetraIngresada=[];
    this.disabledLetraIngresada=[];
    this.cantidad_letras_correctas=0;
    this.cantidad_vidas=6;
    this.tematica_actual="";
    this.cantidad_puntaje=0;
    this.posicion_elemento_palabra=0;
    this.palabras_juego=this.palabrasService.listPalabras();
    this.vector_palabras_actual= new Array<any>();
    this.palabra_espaniol_actual=new Palabra;
    this.palabra_ingles_Actual=new Array<any>();
  }
}




  
