import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
// import { aereoModel } from './models/aereo.model';
import { infoCotizanteModel } from './models/info-cotizante.model';
import { DataAereos } from './interfaces/dataAereos';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { MatTableDataSource } from '@angular/material/table';
import { DataCotizacion } from './models/dataCotizacion.model';

let ELEMENT_DATA_TEMP: DataAereos[] = [];

@Component({
  selector: 'app-crear-cotizacion',
  templateUrl: './crear-cotizacion.component.html',
  styleUrls: ['./crear-cotizacion.component.scss']
})
export class CrearCotizacionComponent implements OnInit {

  public Editor = ClassicEditor;

  // Tablas

  displayedColumnsAereos: string[] = ['detalle', 'tarifaBaseAdultos', 'tarifaBaseChildren', 'tarifaBaseInfantes',
                                      'totalTksSinImpuesto','impuesto','seguro','tarifaAdministraiva', 'qse', 'totalTks', 'acciones'];

  dataSourceAereos = new MatTableDataSource();

  displayedColumnsServicios: string[] = ['detalle', 'precioPorPersona', 'precioPorChildren',
                                         'totalPaqTuristico','tipoAlimentacion','tipoHabitacion','tipoAcomodacion', 
                                         'incluye', 'noIncluye', 'infoImportante', 'otrasCondiciones', 'acciones'];
 
  dataSourceServicios = new MatTableDataSource();

  // ---------------------------------------------------------------------------

  formInfoCotizante!: FormGroup; 
  infoCotizanteModelObj: infoCotizanteModel = new infoCotizanteModel();

  formAereos!: FormGroup;
  listDataAereos: any = [];

  formServicios!: FormGroup;
  listDataServicios: any = [];

  dataCotizacion2: DataCotizacion;

  dataCotizacion: any = [this.infoCotizanteModelObj, this.listDataAereos, this.listDataServicios];

  constructor(private formbuilder: FormBuilder) {

  }

  ngOnInit(): void {
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

  }

  enviarDatosInfoCotizante() {
    this.infoCotizanteModelObj.nombres         = this.formInfoCotizante.value.nombres;
    this.infoCotizanteModelObj.apellidos       = this.formInfoCotizante.value.apellidos;
    this.infoCotizanteModelObj.email           = this.formInfoCotizante.value.email;
    this.infoCotizanteModelObj.identificacion  = this.formInfoCotizante.value.identificacion;
    this.infoCotizanteModelObj.fechaNacimiento = this.formInfoCotizante.value.fechaNacimiento;
    this.infoCotizanteModelObj.fechaEntrada    = this.formInfoCotizante.value.fechaEntrada;
    this.infoCotizanteModelObj.fechaSalida     = this.formInfoCotizante.value.fechaSalida;
    this.infoCotizanteModelObj.cantidadAdultos = this.formInfoCotizante.value.cantidadAdultos;
    this.infoCotizanteModelObj.cantidadChildren= this.formInfoCotizante.value.cantidadChildren;
    this.infoCotizanteModelObj.cantidadInfantes= this.formInfoCotizante.value.cantidadInfantes;
    this.infoCotizanteModelObj.destino         = this.formInfoCotizante.value.destino;
    this.infoCotizanteModelObj.observaciones   = this.formInfoCotizante.value.observaciones;

    this.formInfoCotizante.reset();

    // console.log(this.listDataAereos.length); 

    // if(this.listDataAereos.length > 0) {
    //   this.dataSourceAereos.data = this.listDataAereos;
    // }
  }

  editarInfoCotizante() {
    this.formInfoCotizante.controls['nombres'].setValue(this.infoCotizanteModelObj.nombres);
    this.formInfoCotizante.controls['apellidos'].setValue(this.infoCotizanteModelObj.apellidos);
    this.formInfoCotizante.controls['email'].setValue(this.infoCotizanteModelObj.email);
    this.formInfoCotizante.controls['identificacion'].setValue(this.infoCotizanteModelObj.identificacion);
    this.formInfoCotizante.controls['fechaNacimiento'].setValue(this.infoCotizanteModelObj.fechaNacimiento);
    this.formInfoCotizante.controls['fechaEntrada'].setValue(this.infoCotizanteModelObj.fechaEntrada);
    this.formInfoCotizante.controls['fechaSalida'].setValue(this.infoCotizanteModelObj.fechaSalida);
    this.formInfoCotizante.controls['cantidadAdultos'].setValue(this.infoCotizanteModelObj.cantidadAdultos);
    this.formInfoCotizante.controls['cantidadChildren'].setValue(this.infoCotizanteModelObj.cantidadChildren);
    this.formInfoCotizante.controls['cantidadInfantes'].setValue(this.infoCotizanteModelObj.cantidadInfantes);
    this.formInfoCotizante.controls['destino'].setValue(this.infoCotizanteModelObj.destino);
    this.formInfoCotizante.controls['observaciones'].setValue(this.infoCotizanteModelObj.observaciones);
  }

  eliminarInfoCotizante() {
    this.infoCotizanteModelObj.nombres           = "";
    this.infoCotizanteModelObj.apellidos         = "";
    this.infoCotizanteModelObj.email             = "";
    this.infoCotizanteModelObj.identificacion    = "";
    this.infoCotizanteModelObj.fechaNacimiento   = "";
    this.infoCotizanteModelObj.fechaEntrada      = "";
    this.infoCotizanteModelObj.fechaSalida       = "";
    this.infoCotizanteModelObj.cantidadAdultos   = 0;
    this.infoCotizanteModelObj.cantidadChildren  = 0;
    this.infoCotizanteModelObj.cantidadInfantes  = 0;
    this.infoCotizanteModelObj.destino           = "";
    this.infoCotizanteModelObj.observaciones     = "";

    console.log(this.infoCotizanteModelObj)
  }

  enviarDatosAereo() {

    let totalTksSinImpuesto = (this.formAereos.value.tarifaBaseAdultos  * +this.infoCotizanteModelObj.cantidadAdultos)  + 
                              (this.formAereos.value.tarifaBaseChildren * +this.infoCotizanteModelObj.cantidadChildren) +
                              (this.formAereos.value.tarifaBaseInfantes * +this.infoCotizanteModelObj.cantidadInfantes);

    let totalTks            = (totalTksSinImpuesto) + (+this.formAereos.value.impuesto) + (+this.formAereos.value.seguro) +
                              (+this.formAereos.value.tarifaAdministraiva) + (+this.formAereos.value.qse);

    this.listDataAereos.push({
      "detalle":             this.formAereos.value.detalle,
      "tarifaBaseAdultos":   this.formAereos.value.tarifaBaseAdultos,
      "tarifaBaseChildren":  this.formAereos.value.tarifaBaseChildren,
      "tarifaBaseInfantes":  this.formAereos.value.tarifaBaseInfantes,
      "totalTksSinImpuesto": totalTksSinImpuesto,
      "impuesto":            this.formAereos.value.impuesto,
      "seguro":              this.formAereos.value.seguro,
      "tarifaAdministraiva": this.formAereos.value.tarifaAdministraiva,
      "qse":                 this.formAereos.value.qse,
      "totalTks":            totalTks
    });

    console.log(this.listDataAereos);
   
    this.formAereos.reset();

    this.dataSourceAereos.data = this.listDataAereos
  }

  editarAereo(index:any, param:any){
    console.log(index, param)
    this.formAereos.controls['detalle'].setValue(param.detalle);
    this.formAereos.controls['tarifaBaseAdultos'].setValue(param.tarifaBaseAdultos);
    this.formAereos.controls['tarifaBaseChildren'].setValue(param.tarifaBaseChildren);
    this.formAereos.controls['tarifaBaseInfantes'].setValue(param.tarifaBaseInfantes);
    this.formAereos.controls['impuesto'].setValue(param.impuesto);
    this.formAereos.controls['seguro'].setValue(param.seguro);
    this.formAereos.controls['tarifaAdministraiva'].setValue(param.tarifaAdministraiva);
    this.formAereos.controls['qse'].setValue(param.qse);

    this.listDataAereos.splice(index, 1);
  }

  eliminarAereo(index:any) {
    console.log(index)

    this.listDataAereos.splice(index, 1);

    this.dataSourceAereos.data = this.listDataAereos

    console.log(this.dataSourceAereos.data)    
  }

  enviarDatosServicio() {

    let totalPaqTuristico = (this.formServicios.value.precioPorPersona * +this.infoCotizanteModelObj.cantidadAdultos)  + 
                            (this.formServicios.value.precioPorChildren * +this.infoCotizanteModelObj.cantidadChildren);

    this.listDataServicios.push({
      "detalle":            this.formServicios.value.detalle,
      "precioPorPersona":   this.formServicios.value.precioPorPersona,
      "precioPorChildren":   this.formServicios.value.precioPorChildren,
      "totalPaqTuristico":  totalPaqTuristico,
      "tipoAlimentacion":   this.formServicios.value.tipoAlimentacion,
      "tipoHabitacion" :    this.formServicios.value.tipoHabitacion,
      "tipoAcomodacion":    this.formServicios.value.tipoAcomodacion,
      "incluye":            this.formServicios.value.incluye,
      "noIncluye":          this.formServicios.value.noIncluye,
      "infoImportante":     this.formServicios.value.infoImportante,
      "otrasCondiciones":   this.formServicios.value.otrasCondiciones
    });

    console.log(this.listDataServicios);
   
    this.formServicios.reset();

    this.dataSourceServicios.data = this.listDataServicios;

    this.mostrarDatosCotizacion();
  }

  editarServicio(index: any, param:any) {
    console.log(index, param.detalle);
    this.formServicios.controls['detalle'].setValue(param.detalle);
    this.formServicios.controls['precioPorPersona'].setValue(param.precioPorPersona);
    this.formServicios.controls['precioPorChildren'].setValue(param.precioPorChildren);
    this.formServicios.controls['tipoAlimentacion'].setValue(param.tipoAlimentacion);
    this.formServicios.controls['tipoHabitacion'].setValue(param.tipoHabitacion);
    this.formServicios.controls['tipoAcomodacion'].setValue(param.tipoAcomodacion);
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

    console.log(this.dataSourceServicios.data)
  }

  mostrarDatosCotizacion() {
    console.log(this.dataCotizacion[1])
  }
}


