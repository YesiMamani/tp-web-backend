export class Adelanto {
    fecha:Date;
    cobrador:string;
    montoAdelanto:number;

    Adelanto(fecha?:Date, cobrador?:string, montoAdelanto?:number){
        this.fecha=fecha;
        this.cobrador=cobrador;
        this.montoAdelanto=montoAdelanto;
    }
}
