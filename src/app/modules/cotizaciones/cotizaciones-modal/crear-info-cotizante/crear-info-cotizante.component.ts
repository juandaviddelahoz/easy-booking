import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { infoCotizanteModel } from './models/info-cotizante.model';
import { ServicioDatosService } from '../../services/servicio-datos.service';
import { ServicioDatosPadreHijoService } from '../../services/servicio-datos-padre-hijo.service';

@Component({
  selector: 'app-crear-info-cotizante',
  templateUrl: './crear-info-cotizante.component.html',
  styleUrls: ['./crear-info-cotizante.component.scss']
})
export class CrearInfoCotizanteComponent implements OnInit {
  
  nombresValue!          : string;

  debugger:any;
  formInfoCotizante: FormGroup =
   this.fb.group({
    nombres         : ['jorge', [Validators.required]],
    apellidos       : ['', [Validators.required]],
    email           : ['', [Validators.required]],
    identificacion  : ['', [Validators.required]],
    fechaNacimiento : ['', [Validators.required]],
    fechaEntrada    : ['', [Validators.required]],
    fechaSalida     : ['', [Validators.required]],
    cantidadAdultos : ['', [Validators.required]],
    cantidadNiños   : ['', [Validators.required]],
    cantidadInfantes: ['', [Validators.required]],
    destino         : ['', [Validators.required]],
    observaciones   : ['', [Validators.required]]
  })

  constructor(private fb: FormBuilder, 
              private _servicioDatos: ServicioDatosService, 
              private _servicioDatosPadreHijo: ServicioDatosPadreHijoService) { 
                console.log('Envio', this.nombresValue);
              }

  ngOnInit(): void {
    this.debugger
    this._servicioDatosPadreHijo.disparadorDeDatosPadreHijo.subscribe(dataPH => {
      console.log(dataPH.dataPH);

      this.nombresValue          = (dataPH.dataPH);

      this.formInfoCotizante.patchValue({ nombres: 'mi nombre'});
      console.log('Envio prueba', this.nombresValue);

      // this.formInfoCotizante.patchValue({
      //   nombres: 'Diego'
      // })
    })
  }

  prueba(){
    console.log(this.nombresValue)
    this.formInfoCotizante.controls['nombres'].setValue(this.nombresValue)
  }

  actualizarPersonas(){
    this.formInfoCotizante.patchValue({
      nombres: 'Nancy'
    })
  }

  

  enviarInfoCotizante(){
    // console.log(this.formInfoCotizante.value);
    
    const infoCotizanteDTO: infoCotizanteModel = {
      nombres         : this.formInfoCotizante.get('nombres')?.value,
      apellidos       : this.formInfoCotizante.get('apellidos')?.value,   
      email           : this.formInfoCotizante.get('email')?.value,
      identificacion  : this.formInfoCotizante.get('identificacion')?.value,
      fechaNacimiento : this.formInfoCotizante.get('fechaNacimiento')?.value, 
      fechaEntrada    : this.formInfoCotizante.get('fechaEntrada')?.value,    
      fechaSalida     : this.formInfoCotizante.get('fechaSalida')?.value,      
      cantidadAdultos : this.formInfoCotizante.get('cantidadAdultos')?.value,  
      cantidadNiños   : this.formInfoCotizante.get('cantidadNiños')?.value,    
      cantidadInfantes: this.formInfoCotizante.get('cantidadInfantes')?.value, 
      destino         : this.formInfoCotizante.get('destino')?.value,          
      observaciones   : this.formInfoCotizante.get('observaciones')?.value,     
    }

    // localStorage.setItem('informacionCotizante', JSON.stringify(infoCotizanteDTO));

    // localStorage.getItem("informacionCotizante")

    console.log(infoCotizanteDTO);

    this._servicioDatos.disparadorDeDatos.emit({
      data:infoCotizanteDTO
    })
    
    this.formInfoCotizante.reset();
  }

  // grabar_localstorage() {
  //   let persona = {
  //     nombre: "Juan",
  //     apellido: "De la hoz",
  //     edad: 23
  //   }

  //   localStorage.setItem("personakey", JSON.stringify (persona))
  // }

  // obtener_localstorage() {
  //   let persona = JSON.parse(localStorage.getItem("personakey") || '{}');
  //   console.log(persona.nombre)
  // }

}
