import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostComponent } from './modules/post/post.component';
import { CotizacionesPrincipalComponent } from './modules/cotizaciones/cotizaciones-principal/cotizaciones-principal.component';
import { CrearCotizacionComponent } from './modules/cotizaciones/crear-cotizacion/crear-cotizacion.component';
import { GenerarCotizacionComponent } from './modules/cotizaciones/generar-cotizacion/generar-cotizacion.component';

const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{
    path: '',
    component: DashboardComponent
  }, 
  {
    path: 'posts',
    component: PostComponent
  },
  {
    path: 'cotizaciones',
    component: CotizacionesPrincipalComponent
  },
  {
    path: 'crear_cotizacion',
    component: CrearCotizacionComponent
  },
  {
    path: 'editar_cotizacion/:id',
    component: CrearCotizacionComponent
  },
  {
    path: 'ver_cotizacion/:id/:estado',
    component: CrearCotizacionComponent
  },
  {
    path: 'generar_cotizacion',
    component: GenerarCotizacionComponent
  }
]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
