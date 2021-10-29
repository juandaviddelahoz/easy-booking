import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioDatosService {

  @Output() disparadorDeDatos: EventEmitter<any> = new EventEmitter();

  constructor() { }
}
