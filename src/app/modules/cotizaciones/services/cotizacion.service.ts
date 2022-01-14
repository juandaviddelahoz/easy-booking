import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataCotizacion } from '../crear-cotizacion/models/dataCotizacion.model';
import { Reserva } from '../crear-cotizacion/Entidades/reserva.model';
import { Persona } from '../crear-cotizacion/Entidades/persona.model';

@Injectable({
  providedIn: 'root'
})
export class CotizacionService {

  private myAppUrl = "https://localhost:44353/";

  private myApiUrl = "api/Cotizaciones/";

  private myApiUrlObtCotizacionCompleta = "api/Cotizaciones/ObtenerCotizcionCompleta";

  private myApiUrlCambiarEstCotizacion = "api/Cotizaciones/CambiarEstado/";

  private myApiUrlEliminarCotizacion = "api/Cotizaciones/eliminar/";

  private myApiUrlRecuperarCotizacion = "api/Cotizaciones/recuperar/"

  private myApiUrlObtCotizacionesEliminadas = "api/Cotizaciones/ObtenerCotizacionesEliminadas";

  private myApiUrlObtEstados = "api/Cotizaciones/ObtenerEstados";

  constructor(private http:HttpClient) { }

  guardarCotizacion(cotizacion: DataCotizacion): Observable<any> {
    // console.log(cotizacion);
    let encabezado = new HttpHeaders();
    encabezado.append('Content-Type', 'application/json');
    return this.http.post(this.myAppUrl + this.myApiUrl, cotizacion, { headers: encabezado });
  }

  obtenerCotizacion(): Observable<any>{
    return this.http.get(this.myAppUrl + this.myApiUrl);
  }

  obtenerCotizacionCompleta(idReserva: any): Observable<any> {
    return this.http.get(this.myAppUrl + this.myApiUrlObtCotizacionCompleta + "?idReserva="+idReserva);
  }

  obtenerCotizacionesEliminadas(): Observable<any> {
    return this.http.get(this.myAppUrl + this.myApiUrlObtCotizacionesEliminadas);
  }

  obtenerEstados(): Observable<any> {
    return this.http.get(this.myAppUrl + this.myApiUrlObtEstados);
  }

  editarCotizacion(idReserva: any, cotizacion: DataCotizacion): Observable<any> {
    return this.http.put(this.myAppUrl + this.myApiUrl + idReserva, cotizacion)
  }

  eliminarCotizacion(idReserva: any, reserva: Reserva): Observable<any> {
    return this.http.put(this.myAppUrl + this.myApiUrlEliminarCotizacion + idReserva, reserva)
  }

  recuperarCotizacion(idReserva: any, reserva: Reserva): Observable<any> {
    return this.http.put(this.myAppUrl + this.myApiUrlRecuperarCotizacion + idReserva, reserva)
  }

  CambiarEstadoCotizacion(idReserva: any, reserva: Reserva): Observable<any> {
    return this.http.put(this.myAppUrl + this.myApiUrlCambiarEstCotizacion + idReserva, reserva)
  }

}
