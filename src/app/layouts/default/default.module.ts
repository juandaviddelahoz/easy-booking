import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from '../../modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { PostComponent } from '../../modules/post/post.component';
import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../material/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CotizacionesPrincipalComponent } from '../../modules/cotizaciones/cotizaciones-principal/cotizaciones-principal.component';
import { CrearCotizacionComponent } from '../../modules/cotizaciones/crear-cotizacion/crear-cotizacion.component';
import { CrearInfoCotizanteComponent } from '../../modules/cotizaciones/cotizaciones-modal/crear-info-cotizante/crear-info-cotizante.component';
import { AgregarAereoComponent } from '../../modules/cotizaciones/cotizaciones-modal/agregar-aereo/agregar-aereo.component';
import { AgregarServicioComponent } from '../../modules/cotizaciones/cotizaciones-modal/agregar-servicio/agregar-servicio.component';


@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostComponent,
    CotizacionesPrincipalComponent,
    CrearCotizacionComponent,
    CrearInfoCotizanteComponent,
    AgregarAereoComponent,
    AgregarServicioComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MaterialModule,
    FlexLayoutModule
  ],
})
export class DefaultModule { }
