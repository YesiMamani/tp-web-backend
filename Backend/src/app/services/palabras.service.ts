import { Injectable } from '@angular/core';
import {Palabra} from '../models/palabra';
@Injectable({
  providedIn: 'root'
})
export class PalabrasService {
  vector_palabras = [
    {
      "categoria":"animal",
      "elementos": [        
        {"urlimagen":"../../../assets/img/animales/leon.jpg","palabraespaniol":"leon","palabraingles":"lion"},
        {"urlimagen":"../../../assets/img/animales/jirafa.jpg","palabraespaniol":"jirafa","palabraingles":"giraffe"},
        {"urlimagen":"../../../assets/img/animales/gato.jpg","palabraespaniol":"gato","palabraingles":"cat"},
        {"urlimagen":"../../../assets/img/animales/perro.jpg","palabraespaniol":"perro","palabraingles":"dog"},
        {"urlimagen":"../../../assets/img/animales/gallina.jpg","palabraespaniol":"gallina","palabraingles":"chicken"},
        {"urlimagen":"../../../assets/img/animales/mono.jpg","palabraespaniol":"mono","palabraingles":"monkey"},
        {"urlimagen":"../../../assets/img/animales/raton.jpg","palabraespaniol":"raton","palabraingles":"mouse"},
        {"urlimagen":"../../../assets/img/animales/cerdo.jpg","palabraespaniol":"cerdo","palabraingles":"pig"},
        {"urlimagen":"../../../assets/img/animales/elefante.jpg","palabraespaniol":"elefante","palabraingles":"elephant"},
        {"urlimagen":"../../../assets/img/animales/tigre.jpg","palabraespaniol":"tigre","palabraingles":"tiger"}
      ]
    },
    {
      "categoria":"tecnologia",
      "elementos": [
        {"urlimagen":"../../../assets/img/tecnologia/camera.jpg","palabraespaniol":"camara", "palabraingles":"camera"},
        {"urlimagen":"../../../assets/img/tecnologia/computadora.jpg","palabraespaniol":"computadora","palabraingles":"computer"},
        {"urlimagen":"../../../assets/img/tecnologia/ipad.jpg","palabraespaniol":"iPad","palabraingles":"iPad"},
        {"urlimagen":"../../../assets/img/tecnologia/iPhone.jpg","palabraespaniol":"iPhone", "palabraingles":"iPhone"},
        {"urlimagen":"../../../assets/img/tecnologia/mouse.jpg","palabraespaniol":"raton","palabraingles":"mouse"},
        {"urlimagen":"../../../assets/img/tecnologia/notebook.jpg","palabraespaniol":"notebook","palabraingles":"notebook"},
        {"urlimagen":"../../../assets/img/tecnologia/pendrive.jpg","palabraespaniol":"memoria USB", "palabraingles":"pendrive"},
        {"urlimagen":"../../../assets/img/tecnologia/smartphone.jpg","palabraespaniol":"telefono inteligente","palabraingles":"smartphone"},
        {"urlimagen":"../../../assets/img/tecnologia/smartwatch.jpg","palabraespaniol":"reloj inteligente","palabraingles":"smartwatch"},
        {"urlimagen":"../../../assets/img/tecnologia/tablet.jpg","palabraespaniol":"tableta", "palabraingles":"tablet"}
      ]
    },
    {
      "categoria":"indumentaria",
      "elementos": [
        {"urlimagen":"../../../assets/img/indumentaria/bota.jpg","palabraespaniol":"bota", "palabraingles":"boot"},
        {"urlimagen":"../../../assets/img/indumentaria/camisa.jpg","palabraespaniol":"camisa","palabraingles":"shirt"},
        {"urlimagen":"../../../assets/img/indumentaria/campera.jpg","palabraespaniol":"campera","palabraingles":"jacket"},
        {"urlimagen":"../../../assets/img/indumentaria/medias.jpg","palabraespaniol":"media", "palabraingles":"sock"},
        {"urlimagen":"../../../assets/img/indumentaria/pantalon.jpg","palabraespaniol":"jean","palabraingles":"jean"},
        {"urlimagen":"../../../assets/img/indumentaria/remera.jpg","palabraespaniol":"remera","palabraingles":"tshirt"},
        {"urlimagen":"../../../assets/img/indumentaria/sombrero.jpg","palabraespaniol":"sombrero", "palabraingles":"hat"},
        {"urlimagen":"../../../assets/img/indumentaria/vestido.jpg","palabraespaniol":"vestido","palabraingles":"dress"},
        {"urlimagen":"../../../assets/img/indumentaria/zapatilla.jpg","palabraespaniol":"zapatilla","palabraingles":"shoe"},
        {"urlimagen":"../../../assets/img/indumentaria/zapato.jpg","palabraespaniol":"zapato", "palabraingles":"shoe"}
      ]
    }
  ];
  constructor() { }

  listPalabras(){
    return this.vector_palabras;
  }

  listPalabrasPorCategoria(tematica_actual:string){
    //retorna un array de palabras
    console.log(tematica_actual);
    var idCategoria = this.vector_palabras.findIndex((item) => item.categoria == tematica_actual);
    console.log(idCategoria);
    console.log(this.vector_palabras[idCategoria].elementos);
    return this.vector_palabras[idCategoria].elementos;
  }
}
