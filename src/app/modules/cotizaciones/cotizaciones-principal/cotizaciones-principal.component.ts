import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cotizaciones-principal',
  templateUrl: './cotizaciones-principal.component.html',
  styleUrls: ['./cotizaciones-principal.component.scss']
})
export class CotizacionesPrincipalComponent implements OnInit {

  formInfoCotizante: FormGroup = this.fb.group({
    nombres         : ['Juan David', Validators.required],
    apellidos       : [''],
    email           : [''],
    identificacion  : [''],
    fechaNacimiento : [''],
    fechaEntrada    : [''],
    fechaSalida     : [''],
    cantidadAdultos : [''],
    cantidadNiños   : [''],
    cantidadInfantes: [''],
    destino         : [''],
    obervaciones    : ['']
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  enviarInfoCotizante(){
    console.log(this.formInfoCotizante.value)
    this.formInfoCotizante.reset();
  }
}
