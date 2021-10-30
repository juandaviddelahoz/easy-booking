import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioDatosPadreHijoService {

  @Output() disparadorDeDatosPadreHijo: EventEmitter<any> = new EventEmitter();

  constructor() { }
}
