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

  formInfoCotizante!: FormGroup;

   

  constructor(private formbuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formInfoCotizante = this.formbuilder.group ({
      nombres         : [this.nombresValue, [Validators.required]],
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
  }

  enviarInfoCotizante(){
    
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
  }
}
