import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Reserva } from '../crear-cotizacion/Entidades/reserva.model';
import { ListEstadosCotizacion } from '../crear-cotizacion/interfaces/listEstadosCotizacion';
import { DataCotizacion } from '../crear-cotizacion/models/dataCotizacion.model';
import { CotizacionService } from '../services/cotizacion.service';

@Component({
  selector: 'app-cotizaciones-principal',
  templateUrl: './cotizaciones-principal.component.html',
  styleUrls: ['./cotizaciones-principal.component.scss']
})
export class CotizacionesPrincipalComponent implements OnInit {

  dataCotizacion: DataCotizacion = new DataCotizacion();

  displayedColumnsListCotizacion: string[] = ['idReserva', 'nombreCotizante', 'destino', 'fechaEntrada', 'fechaSalida', 'estado', 'acciones', 'cambiarEstado'];
  dataSourceListCotizacion = new MatTableDataSource();

  displayedColumnsListCotizacionesEliminadas: string[] = ['idReserva', 'nombreCotizante', 'destino', 'fechaEntrada', 'fechaSalida', 'estado', 'acciones'];
  dataSourceListCoizacionesEliminadas = new MatTableDataSource();

  // Paginadores
  @ViewChild('listCotizacionPaginator', {static: true}) listCotizacionPaginator: MatPaginator;
  @ViewChild('listCotizacionesEliminadasPaginator', {static: true}) listCotizacionesEliminadasPaginator: MatPaginator;

  mostrarCotizacionesEliminadas: boolean;

  mostrarEliminar: boolean;

  dataReserva = new Reserva;

  // listEstadosCotizacion: ListEstadosCotizacion[] = [
  //   {id_Estado: 1, estado: 'Activa'},
  //   {id_Estado: 2, estado: 'Enviada'},
  //   {id_Estado: 3, estado: 'Aprovada'},
  //   {id_Estado: 4, estado: 'Eliminada'},
  // ];

  listEstadosCotizacion: ListEstadosCotizacion[] = [];

  selectedFood: any;

  selected = 1;

  // selectedFood = this.listEstadosCotizacion[2].id_Estado;

  // prueba = 1;

  constructor(private _cotizacionService: CotizacionService,
              private route: Router) { }

  ngOnInit(): void {
    this.obtenerCotizacion();
    this.obtenerEstados();
  }

  ngAfterViewInit() {
    // Paginadores
    this.dataSourceListCotizacion.paginator = this.listCotizacionPaginator;
    this.dataSourceListCoizacionesEliminadas.paginator = this.listCotizacionesEliminadasPaginator;
  }

  // Filtro tabla
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceListCotizacion.filter = filterValue.trim().toLowerCase();
  }

  obtenerCotizacion(){
    this._cotizacionService.obtenerCotizacion().subscribe(data => {
      this.dataSourceListCotizacion.data = data;
      console.log(this.dataSourceListCotizacion.data);
    }, error => {
      console.log(error);
    })
  }

  obtenerEstados(){
    this._cotizacionService.obtenerEstados().subscribe(data => {
      console.log(data);
      this.listEstadosCotizacion = data;
      console.log(this.listEstadosCotizacion);
      // this.selectedFood = 1;
    })
  }

  obtenerCotizacionesEliminadas(){
    this._cotizacionService.obtenerCotizacionesEliminadas().subscribe(data => {
      console.log(data);
      this.dataSourceListCoizacionesEliminadas.data = data;
      this.mostrarCotizacionesEliminadas = true;
    }, error => {
      console.log(error);
    })
  }

  editarCotizacion(param:any) {
    this.route.navigate(['editar_cotizacion', param.id_Reserva]);
  }

  verCotizacion(param:any) {
    this.route.navigate(['ver_cotizacion', param.id_Reserva, param.estado]);
  }

  CambiarEstadoCotizacion(param:any) {
    this.dataReserva.idReserva = param.id_Reserva;
    this.dataReserva.fechaEntrada = param.fecha_Entrada;
    this.dataReserva.fechaSalida = param.fecha_Salida;
    this.dataReserva.cantAdultos = param.cant_Adultos;
    this.dataReserva.cantChildren = param.cant_Children;
    this.dataReserva.cantInfantes = param.cant_Infantes;
    this.dataReserva.destino = param.destino;
    this.dataReserva.observaciones = param.observaciones;
    this.dataReserva.fechaCreacion = param.fecha_Creacion;
    this.dataReserva.fechaEdicion = param.fecha_Edicion;
    this.dataReserva.idUsuario = param.id_Usuario;
    this.dataReserva.idPersona = param.id_Persona;
    this.dataReserva.idEstado = param.id_Estado;
    console.log(this.dataReserva);

    Swal.fire({
      title: '¿Estas Seguro de cambiar el estado de la cotización?',
      showDenyButton: true,
      confirmButtonText: '&nbsp;&nbsp;Si&nbsp;&nbsp;',
      denyButtonText: `&nbsp;&nbsp;No&nbsp;&nbsp;`,
    }).then((result) => {
      if(result.isConfirmed) {
        this._cotizacionService.CambiarEstadoCotizacion(this.dataReserva.idReserva, this.dataReserva).subscribe(data => {
          
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
          })

          if(data.message == 'No se pudo Realizar el cambio de Estado'){
            Toast.fire({
              icon: 'error',
              title: data.message
            })
          } else {
            Toast.fire({
              icon: 'success',
              title: data.message
            })
          }
          console.log(data);
          this.obtenerCotizacion();
          this.obtenerCotizacionesEliminadas()
          error => {
            console.log(data.message);
          };
        })
      }
    })

    
  }

  eliminarCotizacion(param: any) {
    this.dataReserva.idReserva = param.id_Reserva;
    this.dataReserva.fechaEntrada = param.fecha_Entrada;
    this.dataReserva.fechaSalida = param.fecha_Salida;
    this.dataReserva.cantAdultos = param.cant_Adultos;
    this.dataReserva.cantChildren = param.cant_Children;
    this.dataReserva.cantInfantes = param.cant_Infantes;
    this.dataReserva.destino = param.destino;
    this.dataReserva.observaciones = param.observaciones;
    this.dataReserva.fechaCreacion = param.fecha_Creacion;
    this.dataReserva.fechaEdicion = param.fecha_Edicion;
    this.dataReserva.idUsuario = param.id_Usuario;
    this.dataReserva.idPersona = param.id_Persona;
    this.dataReserva.idEstado = 4;
    console.log(this.dataReserva);

    this._cotizacionService.eliminarCotizacion(this.dataReserva.idReserva, this.dataReserva).subscribe(data => {
      console.log(data);
      
      //alerta Eliminar
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
      })

      if(data.message == 'La cotización No se pudo Eliminar'){
        Toast.fire({
          icon: 'error',
          title: data.message
        })
      } else {
        Toast.fire({
          icon: 'success',
          title: data.message
        })
      }
      /// ------------------------------------------------

      this.obtenerCotizacion();
      this.obtenerCotizacionesEliminadas();
    })
  }

  recuperarCotizacion(param: any){
    this.dataReserva.idReserva = param.id_Reserva;
    this.dataReserva.fechaEntrada = param.fecha_Entrada;
    this.dataReserva.fechaSalida = param.fecha_Salida;
    this.dataReserva.cantAdultos = param.cant_Adultos;
    this.dataReserva.cantChildren = param.cant_Children;
    this.dataReserva.cantInfantes = param.cant_Infantes;
    this.dataReserva.destino = param.destino;
    this.dataReserva.observaciones = param.observaciones;
    this.dataReserva.fechaCreacion = param.fecha_Creacion;
    this.dataReserva.fechaEdicion = param.fecha_Edicion;
    this.dataReserva.idUsuario = param.id_Usuario;
    this.dataReserva.idPersona = param.id_Persona;
    this.dataReserva.idEstado = 1;
    console.log(this.dataReserva);

    this._cotizacionService.recuperarCotizacion(this.dataReserva.idReserva, this.dataReserva).subscribe(data => {
      console.log(data);

      //alerta Recuperar
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
      })

      if(data.message == 'La Cotización No se pudo Recuperar'){
        Toast.fire({
          icon: 'error',
          title: data.message
        })
      } else {
        Toast.fire({
          icon: 'success',
          title: data.message
        })
      }
      /// ------------------------------------------------

      this.obtenerCotizacionesEliminadas();
      this.obtenerCotizacion();
    })
  }

}
