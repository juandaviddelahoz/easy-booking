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

  dataReserva = new Reserva;

  // Arreglo que carga la lista de los estados
  listEstadosCotizacion: ListEstadosCotizacion[] = [];

  // variable llenada por el mensaje correspondiente del alert de cambio de estado
  mensajeAlertEstado: any;

  // Mostrar o no icono guardar cambio estado
  mostrarIconGuardar: boolean;

  // Cambio de estado a id_estado
  cambioEstadoaIdEstado: any;

  capturaEstado: any;

  value1: any;

  estadoPrueba: any;

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

  verCotizacionesEliminadas(){
    this.mostrarCotizacionesEliminadas = true;
    this.obtenerCotizacionesEliminadas()
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

  eventoSeleccionEstado(value: any, param:any){

    switch(param.estado) {
      case "Activa":
        this.cambioEstadoaIdEstado = 1;
        break;
      case "Enviada":
        this.cambioEstadoaIdEstado = 2;
        break;
      case "Aprobada":
        this.cambioEstadoaIdEstado = 3;
        break;
      case "Eliminada":
        this.cambioEstadoaIdEstado = 4;
        break;
    }

    if (value != this.cambioEstadoaIdEstado){
      console.log("fUNCIONA");
      this.mostrarIconGuardar = true;
    }

    // if (param.id_Estado != 1){
    //   this.mostrarIconGuardar = true;
    // }

    // if(value == param.estado){
    //   this.mostrarIconGuardar = true;
    // }
    
    // if(param.estado == "Activa"){
    //   this.estadoPrueba = param.estado;
    //   this.estadoPrueba = 1;
    //   console.log(this.estadoPrueba);
    // } else if (param.estado == "Enviada"){
    //   this.estadoPrueba = param.estado;
    //   this.estadoPrueba = 2;
    //   console.log(this.estadoPrueba);
    // } else if (param.estado == "Aprobada"){
    //   this.estadoPrueba = param.estado;
    //   this.estadoPrueba = 3;
    //   console.log(this.estadoPrueba);
    // } else if (param.estado == "Eliminada"){
    //   this.estadoPrueba = param.estado;
    //   this.estadoPrueba = 4;
    //   console.log(this.estadoPrueba);
    // }

    


        // switch(param.estado) {
    //   case "Activa":
    //     this.cambioEstadoaIdEstado = 1;
    //     break;
    //   case "Enviada":
    //     this.cambioEstadoaIdEstado = 2;
    //     break;
    //   case "Aprobada":
    //     this.cambioEstadoaIdEstado = 3;
    //     break;
    //   case "Eliminada":
    //     this.cambioEstadoaIdEstado = 4;
    //     break;
    // }


    // console.log(param.estado)

    // if(param.estado == "Activa"){
    //   this.cambioEstadoaIdEstado = 1
    // } 
    // else if(param.estado == "Enviada"){
    //   this.cambioEstadoaIdEstado = 2
    // }
    // else if(param.estado == "Aprobada"){
    //   this.cambioEstadoaIdEstado = 3
    // }
    // else if(param.estado == "Eliminada"){
    //   this.cambioEstadoaIdEstado = 4
    // }

    // console.log(this.cambioEstadoaIdEstado)

    // switch(param.estado) {
    //   case "Activa":
    //     this.cambioEstadoaIdEstado = 1;
    //     break;
    //   case "Enviada":
    //     this.cambioEstadoaIdEstado = 2;
    //     break;
    //   case "Aprobada":
    //     this.cambioEstadoaIdEstado = 3;
    //     break;
    //   case "Eliminada":
    //     this.cambioEstadoaIdEstado = 4;
    //     break;
    // }

    // this.value = value; 

    // this.capturaEstado = param.estado;

    // console.log(this.cambioEstadoaIdEstado);

    // console.log(this.value);

    // console.log(this.cambioEstadoaIdEstado)

    // if(value == this.cambioEstadoaIdEstado){
    //   this.mostrarIconGuardar = false;
    // } else {
    //   this.mostrarIconGuardar = true;
    // }
  }

  obtenerCotizacionesEliminadas(){
    this._cotizacionService.obtenerCotizacionesEliminadas().subscribe(data => {
      console.log(data);
      this.dataSourceListCoizacionesEliminadas.data = data;
      
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

  // verificarIdEstadoIguales(param: any){
  //   if(param.id_Estado == param.cambiarEstado){
  //     this.mostrarIconGuardar = true;
  //   }
  // }

  CambiarEstadoCotizacion(param:any) {
    console.log(param.estado);
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
    // console.log(this.dataReserva);

    switch(param.estado) {
      case "Activa":
        this.cambioEstadoaIdEstado = 1;
        break;
      case "Enviada":
        this.cambioEstadoaIdEstado = 2;
        break;
      case "Aprobada":
        this.cambioEstadoaIdEstado = 3;
        break;
      case "Eliminada":
        this.cambioEstadoaIdEstado = 4;
        break;
    }

    if(this.cambioEstadoaIdEstado == param.id_Estado){
      Swal.fire({
        icon: 'error',
        title: 'El estado seleccionado debe ser diferente al inicial.',
        confirmButtonText: '&nbsp;&nbsp;Salir&nbsp;&nbsp;',
        confirmButtonColor: "#345c96",
      })
    } else {

      if(this.dataReserva.idEstado != 4){
        this.mensajeAlertEstado = '¿Estas Seguro de Cambiar el Estado de la cotización?'
      } 
      else{
        this.mensajeAlertEstado = '¿Estas Seguro de Eliminar la cotización?'
      }
  
      Swal.fire({
        title: this.mensajeAlertEstado,
        showDenyButton: true,
        confirmButtonText: '&nbsp;&nbsp;Si&nbsp;&nbsp;',
        confirmButtonColor: "#345c96",
        denyButtonText: `&nbsp;&nbsp;No&nbsp;&nbsp;`,
        denyButtonColor: "#d4021a",
      }).then((result) => {
        if(result.isConfirmed) {
          this._cotizacionService.CambiarEstadoCotizacion(this.dataReserva.idReserva, this.dataReserva).subscribe(data => {
            const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000,
            })
  
            if(data.message == 'No se pudo Realizar el cambio'){
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

    Swal.fire({
      title: '¿Desea Recuperar la cotización?',
      showDenyButton: true,
      confirmButtonText: '&nbsp;&nbsp;Si&nbsp;&nbsp;',
      confirmButtonColor: "#345c96",
      denyButtonText: `&nbsp;&nbsp;No&nbsp;&nbsp;`,
      denyButtonColor: "#d4021a",
    }).then((result) => {
      if(result.isConfirmed) {
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
          /// ---------------------------------
          
          this.obtenerCotizacion();
          this.obtenerCotizacionesEliminadas()
          error => {
            console.log(data.message);
          };
        })
      }
    })
  }
}
