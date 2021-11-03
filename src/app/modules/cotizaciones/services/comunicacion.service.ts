import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicacionService {

  verDatos!: string;

  muestraDatos(datos:string){
    this.verDatos = datos;
  }
}
