import { Adelanto } from './adelanto';

export class Pasaje {
    _id:string;
    dniPasajero: number;
    precioPasaje: number;
    categoriaPasajero: string;
    fechaCompra: Date;
    adelantos:Array<Adelanto>;

    Pasaje(_id:string, dniPasajero?:number, precioPasaje?:number, categoriaPasajero?:string, fechaCompra?:Date){
        this._id=_id;
        this.dniPasajero=dniPasajero;
        this.precioPasaje=precioPasaje;
        this.categoriaPasajero=categoriaPasajero;
        this.fechaCompra=fechaCompra;
        this.adelantos=new Array<Adelanto>();
    }
}
