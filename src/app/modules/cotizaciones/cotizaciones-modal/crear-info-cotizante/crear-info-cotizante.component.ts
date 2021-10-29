import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { infoCotizanteModel } from './models/info-cotizante.model';
import { ServicioDatosService } from '../../services/servicio-datos.service';

@Component({
  selector: 'app-crear-info-cotizante',
  templateUrl: './crear-info-cotizante.component.html',
  styleUrls: ['./crear-info-cotizante.component.scss']
})
export class CrearInfoCotizanteComponent implements OnInit {

  formInfoCotizante: FormGroup = this.fb.group({
    nombres         : ['', [Validators.required]],
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
    obervaciones    : ['', [Validators.required]]
  })

  constructor(private fb: FormBuilder, private _servicioDatos: ServicioDatosService) { 
    // this.obtener_localstorage()
  }

  ngOnInit(): void {
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
      obervaciones    : this.formInfoCotizante.get('obervaciones')?.value,     
    }

    // localStorage.setItem('informacionCotizante', JSON.stringify(infoCotizanteDTO));

    // localStorage.getItem("informacionCotizante")

    // console.log(infoCotizanteDTO);
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
