import { Component, OnInit } from '@angular/core';
import { CrearInfoCotizanteComponent } from '../cotizaciones-modal/crear-info-cotizante/crear-info-cotizante.component';
import { MatDialog } from '@angular/material/dialog';
import { AgregarAereoComponent } from '../cotizaciones-modal/agregar-aereo/agregar-aereo.component';
import { AgregarServicioComponent } from '../cotizaciones-modal/agregar-servicio/agregar-servicio.component';
import { ServicioDatosService } from '../services/servicio-datos.service';
import { infoCotizanteModel } from '../cotizaciones-modal/crear-info-cotizante/models/info-cotizante.model';

@Component({
  selector: 'app-crear-cotizacion',
  templateUrl: './crear-cotizacion.component.html',
  styleUrls: ['./crear-cotizacion.component.scss']
})
export class CrearCotizacionComponent implements OnInit {

  infoCotizante!: infoCotizanteModel 

  constructor(private dialogRef: MatDialog, private _servicioDatos: ServicioDatosService) { }

  public listaDatos: Array<any> = []

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
      console.log(data.data.nombres);
      // this.listaDatos.push(data);
      this.infoCotizante.nombres = data.data.nombres;
    })
  }

}
