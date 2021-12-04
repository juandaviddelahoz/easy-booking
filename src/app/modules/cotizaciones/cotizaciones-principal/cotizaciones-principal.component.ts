import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { DataCotizacion } from '../crear-cotizacion/models/dataCotizacion.model';
import { CotizacionService } from '../services/cotizacion.service';

@Component({
  selector: 'app-cotizaciones-principal',
  templateUrl: './cotizaciones-principal.component.html',
  styleUrls: ['./cotizaciones-principal.component.scss']
})
export class CotizacionesPrincipalComponent implements OnInit {

  dataCotizacion: DataCotizacion = new DataCotizacion();

  displayedColumnsListCotizacion: string[] = ['idReserva', 'nombreCotizante', 'destino', 'fechaEntrada', 'fechaSalida', 'estado', 'acciones'];
  dataSourceListCotizacion = new MatTableDataSource();

  constructor(private _cotizacionService: CotizacionService,
              private route: Router) { }

  ngOnInit(): void {

    this.obtenerCotizacion();
  }

  obtenerCotizacion(){
    this._cotizacionService.obtenerCotizacion().subscribe(data => {
      console.log(data);
      this.dataSourceListCotizacion.data = data;
    }, error => {
      console.log(error);
    })
  }

  editarAereo(param:any) {
    this.route.navigate(['editar_cotizacion',param.id_Reserva]);
    // console.log(param.id_Reserva)
    // this._cotizacionService.obtenerCotizacionCompleta(param.id_Reserva).subscribe(data => {
    //   this.dataCotizacion = data;
    //   console.log(this.dataCotizacion.persona.nombres)
    // })
  }

}
