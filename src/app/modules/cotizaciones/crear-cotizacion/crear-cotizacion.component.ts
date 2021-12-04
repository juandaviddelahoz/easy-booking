import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
// import { aereoModel } from './models/aereo.model';
import { infoCotizanteModel } from './models/info-cotizante.model';
import { DataAereos } from './interfaces/dataAereos';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { MatTableDataSource } from '@angular/material/table';
import { DataCotizacion } from './models/dataCotizacion.model';
import { Persona } from './Entidades/persona.model';
import { Reserva } from './Entidades/reserva.model';
import { Aereo } from './Entidades/aereo.model';
import { Servicio } from './Entidades/servicio.model';
import { CotizacionService } from '../services/cotizacion.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2'
import { ActivatedRoute, Params } from '@angular/router';

let ELEMENT_DATA_TEMP: DataAereos[] = [];

@Component({
  selector: 'app-crear-cotizacion',
  templateUrl: './crear-cotizacion.component.html',
  styleUrls: ['./crear-cotizacion.component.scss']
})
export class CrearCotizacionComponent implements OnInit {

  public Editor = ClassicEditor;

  // Tablas

  displayedColumnsAereos: string[] = ['detalle', 'txBAdulto', 'txBChildren', 'txBInfante',
                                      'totalTktSinImp','impuesto','seguro','txAdministrativa', 'qse', 'totalTkt', 'acciones'];

  dataSourceAereos = new MatTableDataSource();

  displayedColumnsServicios: string[] = ['detalle', 'precPorPersona', 'precPorChildren',
                                         'totalPaqTuristico','tipoAlimentacion','tipoHabitacion','tipoAcomdacion', 
                                         'incluye', 'noIncluye', 'infoImportante', 'otrasCondiciones', 'acciones'];
 
  dataSourceServicios = new MatTableDataSource();

  // ---------------------------------------------------------------------------

  formInfoCotizante!: FormGroup; 
  // infoCotizanteModelObj: infoCotizanteModel = new infoCotizanteModel();

  formAereos!: FormGroup;
  listDataAereos: any = [];

  formServicios!: FormGroup;
  listDataServicios: any = [];

  dataCotizacion = new DataCotizacion;

  constructor(private formbuilder: FormBuilder,
              private _cotizacionService: CotizacionService,
              private _snackBar: MatSnackBar,
              private rutaActiva: ActivatedRoute) {
    this.dataCotizacion.persona = new Persona();
    this.dataCotizacion.reserva = new Reserva();
    this.dataCotizacion.aereos = new Array<Aereo>();
    this.dataCotizacion.servicios = new Array<Servicio>();
  }

  ngOnInit(): void {

    console.log(this.rutaActiva.snapshot.params.id);

    let paramIdReserva = this.rutaActiva.snapshot.params.id;

    this._cotizacionService.obtenerCotizacionCompleta(paramIdReserva).subscribe(data => {
         this.dataCotizacion = data;
         console.log(this.dataCotizacion.aereos)
         
         this.listDataAereos = this.dataCotizacion.aereos;
         this.dataSourceAereos.data = this.listDataAereos;

         this.listDataServicios = this.dataCotizacion.servicios;
         this.dataSourceServicios.data = this.listDataServicios;
    })

    this.formInfoCotizante = this.formbuilder.group ({
      nombres         : [''],
      apellidos       : [''],
      email           : [''],
      identificacion  : [''],
      fechaNacimiento : [''],
      fechaEntrada    : [''],
      fechaSalida     : [''],
      cantidadAdultos : [''],
      cantidadChildren: [''],
      cantidadInfantes: [''],
      destino         : [''],
      observaciones   : ['']
    })

    this.formAereos = this.formbuilder.group ({
      detalle             : [''],
      tarifaBaseAdultos   : [''],
      tarifaBaseChildren  : [''],
      tarifaBaseInfantes  : [''],
      impuesto            : [''],
      seguro              : [''],
      tarifaAdministraiva : [''],
      qse                 : ['']
    })

    this.formServicios = this.formbuilder.group ({
      detalle             : [''],
      precioPorPersona    : [''],
      precioPorChildren   : [''],
      tipoAlimentacion    : [''],
      tipoHabitacion      : [''],
      tipoAcomodacion     : [''],
      incluye             : [''],
      noIncluye           : [''],
      infoImportante      : [''],
      otrasCondiciones    : ['']
    }) 

    // this.obtenerCotizacion();

  }

  // obtenerCotizacion(){
  //   this._cotizacionService.obtenerCotizacion().subscribe(data => {
  //     console.log(data);
  //   }, error => {
  //     console.log(error);
  //   })
  // }

  enviarDatosInfoCotizante() {
    this.dataCotizacion.persona.idPersona       = 0;
    this.dataCotizacion.persona.nombres         = this.formInfoCotizante.value.nombres;
    this.dataCotizacion.persona.apellidos       = this.formInfoCotizante.value.apellidos;
    this.dataCotizacion.persona.email           = this.formInfoCotizante.value.email;
    this.dataCotizacion.persona.identificacion  = this.formInfoCotizante.value.identificacion;
    this.dataCotizacion.persona.fechaNacimiento = this.formInfoCotizante.value.fechaNacimiento;
    this.dataCotizacion.persona.fechaCreacion   = '2021-11-23';
    this.dataCotizacion.persona.fechaEdicion    = '2021-11-23';
    this.dataCotizacion.persona.idUsuario       = 3;

    this.dataCotizacion.reserva.idReserva       = 0;
    this.dataCotizacion.reserva.fechaEntrada    = this.formInfoCotizante.value.fechaEntrada;
    this.dataCotizacion.reserva.fechaSalida     = this.formInfoCotizante.value.fechaSalida;
    this.dataCotizacion.reserva.cantAdultos     = this.formInfoCotizante.value.cantidadAdultos;
    this.dataCotizacion.reserva.cantChildren    = this.formInfoCotizante.value.cantidadChildren;
    this.dataCotizacion.reserva.cantInfantes    = this.formInfoCotizante.value.cantidadInfantes;
    this.dataCotizacion.reserva.destino         = this.formInfoCotizante.value.destino;
    this.dataCotizacion.reserva.observaciones   = this.formInfoCotizante.value.observaciones;
    this.dataCotizacion.reserva.estado          = 0;
    this.dataCotizacion.reserva.fechaCreacion   = '2021-11-23';
    this.dataCotizacion.reserva.fechaEdicion    = '2021-11-23';
    this.dataCotizacion.reserva.idUsuario       = 3;
    this.dataCotizacion.reserva.idPersona       = 0

    this.formInfoCotizante.reset();

    console.log(this.dataCotizacion)

    // console.log(this.listDataAereos.length); 

    // if(this.listDataAereos.length > 0) {
    //   this.dataSourceAereos.data = this.listDataAereos;
    // }
  }

  editarInfoCotizante() {
    this.formInfoCotizante.controls['nombres'].setValue(this.dataCotizacion.persona.nombres);
    this.formInfoCotizante.controls['apellidos'].setValue(this.dataCotizacion.persona.apellidos);
    this.formInfoCotizante.controls['email'].setValue(this.dataCotizacion.persona.email);
    this.formInfoCotizante.controls['identificacion'].setValue(this.dataCotizacion.persona.identificacion);
    this.formInfoCotizante.controls['fechaNacimiento'].setValue(this.dataCotizacion.persona.fechaNacimiento);
    this.formInfoCotizante.controls['fechaEntrada'].setValue(this.dataCotizacion.reserva.fechaEntrada);
    this.formInfoCotizante.controls['fechaSalida'].setValue(this.dataCotizacion.reserva.fechaSalida);
    this.formInfoCotizante.controls['cantidadAdultos'].setValue(this.dataCotizacion.reserva.cantAdultos);
    this.formInfoCotizante.controls['cantidadChildren'].setValue(this.dataCotizacion.reserva.cantChildren);
    this.formInfoCotizante.controls['cantidadInfantes'].setValue(this.dataCotizacion.reserva.cantInfantes);
    this.formInfoCotizante.controls['destino'].setValue(this.dataCotizacion.reserva.destino);
    this.formInfoCotizante.controls['observaciones'].setValue(this.dataCotizacion.reserva.observaciones);
  }

  eliminarInfoCotizante() {
    this.dataCotizacion.persona.nombres           = "";
    this.dataCotizacion.persona.apellidos         = "";
    this.dataCotizacion.persona.email             = "";
    this.dataCotizacion.persona.identificacion    = "";
    this.dataCotizacion.persona.fechaNacimiento   = "";
    this.dataCotizacion.reserva.fechaEntrada      = "";
    this.dataCotizacion.reserva.fechaSalida       = "";
    this.dataCotizacion.reserva.cantAdultos       = 0;
    this.dataCotizacion.reserva.cantChildren      = 0;
    this.dataCotizacion.reserva.cantInfantes      = 0;
    this.dataCotizacion.reserva.destino           = "";
    this.dataCotizacion.reserva.observaciones     = "";

    console.log(this.dataCotizacion)
  }

  enviarDatosAereo() {

    let totalTkSinImpuesto =  (this.formAereos.value.tarifaBaseAdultos  * this.dataCotizacion.reserva.cantAdultos)  + 
                              (this.formAereos.value.tarifaBaseChildren * this.dataCotizacion.reserva.cantChildren) +
                              (this.formAereos.value.tarifaBaseInfantes * this.dataCotizacion.reserva.cantInfantes);

    let totalTkt            = (totalTkSinImpuesto) + (this.formAereos.value.impuesto) + (this.formAereos.value.seguro) +
                              (this.formAereos.value.tarifaAdministraiva) + (this.formAereos.value.qse);

    this.listDataAereos.push({
      "idAereo":             0,
      "detalle":             this.formAereos.value.detalle,
      "txBAdulto":           this.formAereos.value.tarifaBaseAdultos,
      "txBChildren":         this.formAereos.value.tarifaBaseChildren,
      "txBInfante":          this.formAereos.value.tarifaBaseInfantes,
      "totalTktSinImp":      totalTkSinImpuesto,
      "impuesto":            this.formAereos.value.impuesto,
      "seguro":              this.formAereos.value.seguro,
      "txAdministrativa":    this.formAereos.value.tarifaAdministraiva,
      "qse":                 this.formAereos.value.qse,
      "totalTkt":            totalTkt,
      "idReserva":           0,
      "fechaCreacion":       '2021-11-23',
      "fechaEdicion":        '2021-11-23',
      "idUsuario":           3
    });

    // console.log(this.listDataAereos);
   
    this.formAereos.reset();

    this.dataSourceAereos.data = this.listDataAereos;

    this.dataCotizacion.aereos = this.listDataAereos;

    console.log(this.dataCotizacion)
  }

  editarAereo(index:any, param:any){
    console.log(index, param)
    this.formAereos.controls['detalle'].setValue(param.detalle);
    this.formAereos.controls['tarifaBaseAdultos'].setValue(param.txBAdulto);
    this.formAereos.controls['tarifaBaseChildren'].setValue(param.txBChildren);
    this.formAereos.controls['tarifaBaseInfantes'].setValue(param.txBInfante);
    this.formAereos.controls['impuesto'].setValue(param.impuesto);
    this.formAereos.controls['seguro'].setValue(param.seguro);
    this.formAereos.controls['tarifaAdministraiva'].setValue(param.txAdministrativa);
    this.formAereos.controls['qse'].setValue(param.qse);

    this.listDataAereos.splice(index, 1);
  }

  eliminarAereo(index:any) {
    console.log(index)

    this.listDataAereos.splice(index, 1);

    this.dataSourceAereos.data = this.listDataAereos;

    // console.log(this.dataSourceAereos.data);   
    
    console.log(this.dataCotizacion)
  }

  enviarDatosServicio() {

    let totalPaqTuristico = (this.formServicios.value.precioPorPersona  * this.dataCotizacion.reserva.cantAdultos)  + 
                            (this.formServicios.value.precioPorChildren * this.dataCotizacion.reserva.cantChildren);

    this.listDataServicios.push({
      "idServicio":         0,
      "detalle":            this.formServicios.value.detalle,
      "precPorPersona":     this.formServicios.value.precioPorPersona,
      "precPorChildren":    this.formServicios.value.precioPorChildren,
      "totalPaqTuristico":  totalPaqTuristico,
      "tipoAlimentacion":   this.formServicios.value.tipoAlimentacion,
      "tipoHabitacion" :    this.formServicios.value.tipoHabitacion,
      "tipoAcomdacion":     this.formServicios.value.tipoAcomodacion,
      "incluye":            this.formServicios.value.incluye,
      "noIncluye":          this.formServicios.value.noIncluye,
      "infoImportante":     this.formServicios.value.infoImportante,
      "otrasCondiciones":   this.formServicios.value.otrasCondiciones,
      "idReserva":          0,
      "fechaCreacion":      '2021-11-23',
      "fechaEdicion":       '2021-11-23',
      "idUsuario":          3
    });

    // console.log(this.listDataServicios);
   
    this.formServicios.reset();

    this.dataSourceServicios.data = this.listDataServicios;

    this.dataCotizacion.servicios = this.listDataServicios;

    console.log(this.dataCotizacion);

    
  }

  editarServicio(index: any, param:any) {
    console.log(index, param.detalle);
    this.formServicios.controls['detalle'].setValue(param.detalle);
    this.formServicios.controls['precioPorPersona'].setValue(param.precPorPersona);
    this.formServicios.controls['precioPorChildren'].setValue(param.precPorChildren);
    this.formServicios.controls['tipoAlimentacion'].setValue(param.tipoAlimentacion);
    this.formServicios.controls['tipoHabitacion'].setValue(param.tipoHabitacion);
    this.formServicios.controls['tipoAcomodacion'].setValue(param.tipoAcomdacion);
    this.formServicios.controls['incluye'].setValue(param.incluye);
    this.formServicios.controls['noIncluye'].setValue(param.noIncluye);
    this.formServicios.controls['infoImportante'].setValue(param.infoImportante);
    this.formServicios.controls['otrasCondiciones'].setValue(param.otrasCondiciones);

    this.listDataServicios.splice(index, 1);

  }

  eliminarServicio(index:any) {
    console.log(index);

    this.listDataServicios.splice(index, 1);

    this.dataSourceServicios.data = this.listDataServicios

    // console.log(this.dataSourceServicios.data)

    console.log(this.dataCotizacion)
  }

  guardarDatosCotizacion() {
    Swal.fire({
      title: '¿Quieres guardar la cotización?',
      showDenyButton: true,
      confirmButtonText: '&nbsp;&nbsp;Si&nbsp;&nbsp;',
      denyButtonText: `&nbsp;&nbsp;No&nbsp;&nbsp;`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this._cotizacionService.guardarCotizacion(this.dataCotizacion).subscribe(data => {
      
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
          })
    
          Toast.fire({
            icon: 'success',
            title: data.message
          })
    
          // this._snackBar.open(data.message), {
          //   duration: 2000,
          //   verticalPosition: top,
          // }
          error => {
            console.log(error);
          };
        })
      } 
    })
  }

}


