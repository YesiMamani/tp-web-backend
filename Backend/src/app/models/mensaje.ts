import { Empresa } from './empresa';

export class Mensaje {
    _id:string;
    para: number;
    desde: number;
    texto: string;
    fecha:Date;
    empresa:Empresa;

    Mensaje(_id?:string,para?:number, desde?:number, texto?:string, fechaEnvio?:Date){
        this._id=_id;
        this.para=para;
        this.desde=desde;
        this.texto=texto;
        this.empresa=new Empresa();
    }
}
