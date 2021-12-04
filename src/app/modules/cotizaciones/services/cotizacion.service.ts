import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataCotizacion } from '../crear-cotizacion/models/dataCotizacion.model';
import { Persona } from '../crear-cotizacion/Entidades/persona.model';

@Injectable({
  providedIn: 'root'
})
export class CotizacionService {

  private myAppUrl = "https://localhost:44353/";

  private myApiUrl = "api/Cotizaciones/";

  private myApiUrlObtCotizacionCompleta = "api/Cotizaciones/ObtenerCotizcionCompleta";

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
}
