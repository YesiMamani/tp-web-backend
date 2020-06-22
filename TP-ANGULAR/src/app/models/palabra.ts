export class Palabra {
    urlimagen: string;
    palabraespaniol: string;
    palabraingles: string;

    Palabra(urlimagen?:string, palabraespaniol?:string, palabraingles?:string){
        this.urlimagen=urlimagen;
        this.palabraespaniol=palabraespaniol;
        this.palabraingles=palabraingles;
    }
}
