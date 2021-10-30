import { Component, OnInit } from '@angular/core';
import { CrearInfoCotizanteComponent } from '../cotizaciones-modal/crear-info-cotizante/crear-info-cotizante.component';
import { MatDialog } from '@angular/material/dialog';
import { AgregarAereoComponent } from '../cotizaciones-modal/agregar-aereo/agregar-aereo.component';
import { AgregarServicioComponent } from '../cotizaciones-modal/agregar-servicio/agregar-servicio.component';
import { ServicioDatosService } from '../services/servicio-datos.service';
import { infoCotizanteModel } from '../cotizaciones-modal/crear-info-cotizante/models/info-cotizante.model';
import { infoContizanteInterf } from '../cotizaciones-modal/crear-info-cotizante/interfaces/info-cotizante.interface';
import { ServicioDatosPadreHijoService } from '../services/servicio-datos-padre-hijo.service';

@Component({
  selector: 'app-crear-cotizacion',
  templateUrl: './crear-cotizacion.component.html',
  styleUrls: ['./crear-cotizacion.component.scss']
})
export class CrearCotizacionComponent implements OnInit {

  nombres!          : string;
  apellidos!        : string;
  email!            : string; 
  identificacion!   : string;
  fechaNacimiento!  : string;
  fechaEntrada!     : string;
  fechaSalida!      : string;
  cantidadAdultos!  : string;
  cantidadNiños!    : string;
  cantidadInfantes! : string;
  destino!          : string;
  observaciones!     : string;

  constructor(private dialogRef: MatDialog, 
              private _servicioDatos: ServicioDatosService, 
              private _servicioDatosPadreHijo: ServicioDatosPadreHijoService) {}

  // Arreglo para el ngFoR
  public listaDatos: Array<any> = [];

  openDialogCrearInfoCotizante() {
    this.dialogRef.open(CrearInfoCotizanteComponent);
  }

  openDialogAgregarAereo() {
    this.dialogRef.open(AgregarAereoComponent);
  }

  openDialogAgregarServicio() {
    this.dialogRef.open(AgregarServicioComponent);
  }

  // prueba(){
  //   console.log(localStorage.getItem('informacionCotizante'));
  // }

  ngOnInit(): void {
    this._servicioDatos.disparadorDeDatos.subscribe(data => {
      console.log(data.data.nombres)
      // mandar la data a el arreglo listDatos
      this.listaDatos.push(data);

      // this.listaDatos.push(data);

      this.nombres          = (data.data.nombres),
      this.apellidos        = (data.data.apellidos),
      this.email            = (data.data.email),
      this.identificacion   = (data.data.identificacion),
      this.fechaNacimiento  = (data.data.fechaNacimiento),
      this.fechaEntrada     = (data.data.fechaEntrada),
      this.fechaSalida      = (data.data.fechaSalida),
      this.cantidadAdultos  = (data.data.cantidadAdultos),
      this.cantidadInfantes = (data.data.cantidadInfantes),
      this.destino          = (data.data.destino),
      this.observaciones     = (data.data.observaciones)
    })
  }

  eliminarInfoCotizante() {
      this.nombres          = "",
      this.apellidos        = "",
      this.email            = "",
      this.identificacion   = "",
      this.fechaNacimiento  = "",
      this.fechaEntrada     = "",
      this.fechaSalida      = "",
      this.cantidadAdultos  = "",
      this.cantidadInfantes = "",
      this.destino          = "",
      this.observaciones    = ""
  }

  editarInfoCotizante() {
    this._servicioDatosPadreHijo.disparadorDeDatosPadreHijo.emit({
      dataPH:this.nombres
    })
  }

}
