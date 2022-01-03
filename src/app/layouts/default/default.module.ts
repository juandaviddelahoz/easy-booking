import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from '../../modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { PostComponent } from '../../modules/post/post.component';
import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../material/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CotizacionesPrincipalComponent } from '../../modules/cotizaciones/cotizaciones-principal/cotizaciones-principal.component';
import { CrearCotizacionComponent } from '../../modules/cotizaciones/crear-cotizacion/crear-cotizacion.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { HttpClientModule } from '@angular/common/http'
import { GenerarCotizacionComponent } from 'src/app/modules/cotizaciones/generar-cotizacion/generar-cotizacion.component';

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostComponent,
    CotizacionesPrincipalComponent,
    CrearCotizacionComponent,
    GenerarCotizacionComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MaterialModule,
    FlexLayoutModule,
    CKEditorModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
})
export class DefaultModule { }
