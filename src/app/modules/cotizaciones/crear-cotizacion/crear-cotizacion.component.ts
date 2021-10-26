import { Component, OnInit } from '@angular/core';
import { CrearInfoCotizanteComponent } from '../cotizaciones-modal/crear-info-cotizante/crear-info-cotizante.component';
import { MatDialog } from '@angular/material/dialog';
import { AgregarAereoComponent } from '../cotizaciones-modal/agregar-aereo/agregar-aereo.component';
import { AgregarServicioComponent } from '../cotizaciones-modal/agregar-servicio/agregar-servicio.component';

@Component({
  selector: 'app-crear-cotizacion',
  templateUrl: './crear-cotizacion.component.html',
  styleUrls: ['./crear-cotizacion.component.scss']
})
export class CrearCotizacionComponent implements OnInit {

  constructor(private dialogRef: MatDialog) { }

  openDialogCrearInfoCotizante() {
    this.dialogRef.open(CrearInfoCotizanteComponent);
  }

  openDialogAgregarAereo() {
    this.dialogRef.open(AgregarAereoComponent);
  }

  openDialogAgregarServicio() {
    this.dialogRef.open(AgregarServicioComponent);
  }

  ngOnInit(): void {
  }

}
