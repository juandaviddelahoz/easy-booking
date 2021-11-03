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

  formInfoCotizante: FormGroup;

   

  constructor(private fb: FormBuilder, 
              private _servicioDatos: ServicioDatosService, 
              private _servicioDatosPadreHijo: ServicioDatosPadreHijoService) { 
                this.formInfoCotizante = this.fb.group ({
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
              this._servicioDatosPadreHijo.disparadorDeDatosPadreHijo.subscribe(dataPH => {
                  
                console.log('data1', dataPH.dataPH);
          
                this.nombresValue = dataPH.dataPH;

                // this.actualizar();
          
                console.log('esto es', this.nombresValue);
                
                // this.inicializarFormulario(dataPH.dataPH);
                
                // this.nombresValue = dataPH.dataPH;
          
                // console.log(this.nombresValue);
          
                // this.actualizarInformacion('juanda');
                console.log('rayos', this.nombresValue);
                // this.formInfoCotizante.get('nombres')?.setValue('hfghdf')
              })
              // this.formInfoCotizante.get('nombres')?.setValue('hfghdf')
                
              }

  ngOnInit(): void {
    
  }

  actualizar(dato:any) {
    this.formInfoCotizante.get('nombres')?.setValue(dato)
  }

  // inicializarFormulario(datos:Partial<any>) {
  //   this.formInfoCotizante = this.fb.group ({
  //     nombres         : ['Dios', [Validators.required]],
  //     apellidos       : ['blabla', [Validators.required]],
  //     email           : ['blabla', [Validators.required]],
  //     identificacion  : ['blabla', [Validators.required]],
  //     fechaNacimiento : ['blabla', [Validators.required]],
  //     fechaEntrada    : ['blabla', [Validators.required]],
  //     fechaSalida     : ['blabla', [Validators.required]],
  //     cantidadAdultos : ['blabla', [Validators.required]],
  //     cantidadNiños   : ['blabla', [Validators.required]],
  //     cantidadInfantes: ['blabla', [Validators.required]],
  //     destino         : ['blabla', [Validators.required]],
  //     observaciones   : ['blabla', [Validators.required]]
  //   })
  // }

  // actualizarInformacion(data:any){
  //   this.formInfoCotizante.setValue({
  //     nombres: data,
  //     apellidos: 'gdrhdr',
  //       email: '',
  //       identificacion  : '',
  //       fechaNacimiento : '',
  //       fechaEntrada    : '',
  //       fechaSalida     : '',
  //       cantidadAdultos : '',
  //       cantidadNiños   : '',
  //       cantidadInfantes: '',
  //       destino         : '',
  //       observaciones   : ''
  //   }) 
  // }

  // iniciarFormulario(data: any) {
  //   console.log('esta data', data);
    
  //   if(data == Array){
  //     this.formInfoCotizante = this.fb.group({
  //       nombres         : ['', [Validators.required]],
  //       apellidos       : ['', [Validators.required]],
  //       email           : ['', [Validators.required]],
  //       identificacion  : ['', [Validators.required]],
  //       fechaNacimiento : ['', [Validators.required]],
  //       fechaEntrada    : ['', [Validators.required]],
  //       fechaSalida     : ['', [Validators.required]],
  //       cantidadAdultos : ['', [Validators.required]],
  //       cantidadNiños   : ['', [Validators.required]],
  //       cantidadInfantes: ['', [Validators.required]],
  //       destino         : ['', [Validators.required]],
  //       observaciones   : ['', [Validators.required]]
  //     })
  //   } else {
  //     this.formInfoCotizante = this.fb.group({
  //       nombres         : [data, [Validators.required]],
  //       apellidos       : ['', [Validators.required]],
  //       email           : ['', [Validators.required]],
  //       identificacion  : ['', [Validators.required]],
  //       fechaNacimiento : ['', [Validators.required]],
  //       fechaEntrada    : ['', [Validators.required]],
  //       fechaSalida     : ['', [Validators.required]],
  //       cantidadAdultos : ['', [Validators.required]],
  //       cantidadNiños   : ['', [Validators.required]],
  //       cantidadInfantes: ['', [Validators.required]],
  //       destino         : ['', [Validators.required]],
  //       observaciones   : ['', [Validators.required]]
  //     })
  //   }
    
  // }

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
