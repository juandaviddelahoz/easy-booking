import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
// import { aereoModel } from './models/aereo.model';
import { aereoModel, Cotizacion, infoCotizanteModel, serviciosModel } from './models/info-cotizante.model';
import { DataAereos } from './interfaces/dataAereos';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { MatTableDataSource } from '@angular/material/table';

let ELEMENT_DATA_TEMP: DataAereos[] = [];

@Component({
  selector: 'app-crear-cotizacion',
  templateUrl: './crear-cotizacion.component.html',
  styleUrls: ['./crear-cotizacion.component.scss']
})
export class CrearCotizacionComponent implements OnInit {

  public Editor = ClassicEditor;

  // tabla

  displayedColumns: string[] = ['detalle', 'tarifaBaseAdultos', 'tarifaBaseChildren', 'tarifaBaseInfantes',
                                'totalTksSinImpuesto','impuesto','seguro','tarifaAdministraiva', 'qse', 'totalTks', 'acciones'];

  dataSource = new MatTableDataSource();

  // ---------------------------------------------------------------------------

  formInfoCotizante!: FormGroup;

  // infoCotizanteModelObj: infoCotizanteModel = new infoCotizanteModel(); 

  formAereos!: FormGroup;
  // aereoModelObj: aereoModel = new aereoModel();

  cotizacion : Cotizacion = new Cotizacion();

  listaDataAereos: any = [];

  formServicios!: FormGroup;
  serviciosModelObj: serviciosModel = new serviciosModel();
  

  constructor(private formbuilder: FormBuilder) {
    this.cotizacion.cotizante = new infoCotizanteModel();
    this.cotizacion.aereo = new Array<aereoModel>();
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
      precioPorChldren    : [''],
      precioPorAdicional  : [''],
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
    this.cotizacion.cotizante.nombres          = this.formInfoCotizante.value.nombres;
    this.cotizacion.cotizante.apellidos        = this.formInfoCotizante.value.apellidos;
    this.cotizacion.cotizante.email            = this.formInfoCotizante.value.email;
    this.cotizacion.cotizante.identificacion   = this.formInfoCotizante.value.identificacion;
    this.cotizacion.cotizante.fechaNacimiento  = this.formInfoCotizante.value.fechaNacimiento;
    this.cotizacion.cotizante.fechaEntrada     = this.formInfoCotizante.value.fechaEntrada;
    this.cotizacion.cotizante.fechaSalida      = this.formInfoCotizante.value.fechaSalida;
    this.cotizacion.cotizante.cantidadAdultos  = this.formInfoCotizante.value.cantidadAdultos;
    this.cotizacion.cotizante.cantidadChildren = this.formInfoCotizante.value.cantidadChildren;
    this.cotizacion.cotizante.cantidadInfantes = this.formInfoCotizante.value.cantidadInfantes;
    this.cotizacion.cotizante.destino          = this.formInfoCotizante.value.destino;
    this.cotizacion.cotizante.observaciones    = this.formInfoCotizante.value.observaciones;

    this.formInfoCotizante.reset();

    console.log(this.listaDataAereos.length); 

    if(this.listaDataAereos.length > 0) {
      this.dataSource.data = this.listaDataAereos;
    }
  }

  editarInfoCotizante() {
    this.formInfoCotizante.controls['nombres'].setValue(this.cotizacion.cotizante.nombres);
    this.formInfoCotizante.controls['apellidos'].setValue(this.cotizacion.cotizante.apellidos);
    this.formInfoCotizante.controls['email'].setValue(this.cotizacion.cotizante.email);
    this.formInfoCotizante.controls['identificacion'].setValue(this.cotizacion.cotizante.identificacion);
    this.formInfoCotizante.controls['fechaNacimiento'].setValue(this.cotizacion.cotizante.fechaNacimiento);
    this.formInfoCotizante.controls['fechaEntrada'].setValue(this.cotizacion.cotizante.fechaEntrada);
    this.formInfoCotizante.controls['fechaSalida'].setValue(this.cotizacion.cotizante.fechaSalida);
    this.formInfoCotizante.controls['cantidadAdultos'].setValue(this.cotizacion.cotizante.cantidadAdultos);
    this.formInfoCotizante.controls['cantidadChildren'].setValue(this.cotizacion.cotizante.cantidadChildren);
    this.formInfoCotizante.controls['cantidadInfantes'].setValue(this.cotizacion.cotizante.cantidadInfantes);
    this.formInfoCotizante.controls['destino'].setValue(this.cotizacion.cotizante.destino);
    this.formInfoCotizante.controls['observaciones'].setValue(this.cotizacion.cotizante.observaciones);
  }

  eliminarInfoCotizante() {
    this.cotizacion.cotizante.nombres           = "";
    this.cotizacion.cotizante.apellidos         = "";
    this.cotizacion.cotizante.email             = "";
    this.cotizacion.cotizante.identificacion    = "";
    this.cotizacion.cotizante.fechaNacimiento   = "";
    this.cotizacion.cotizante.fechaEntrada      = "";
    this.cotizacion.cotizante.fechaSalida       = "";
    this.cotizacion.cotizante.cantidadAdultos   = "";
    this.cotizacion.cotizante.cantidadChildren  = "";
    this.cotizacion.cotizante.cantidadInfantes  = "";
    this.cotizacion.cotizante.destino           = "";
    this.cotizacion.cotizante.observaciones     = ""
  }

  enviarDatosAereo() {

    let totalTksSinImpuesto = (this.formAereos.value.tarifaBaseAdultos  * +this.cotizacion.cotizante.cantidadAdultos)  + 
                              (this.formAereos.value.tarifaBaseChildren * +this.cotizacion.cotizante.cantidadChildren) +
                              (this.formAereos.value.tarifaBaseInfantes * +this.cotizacion.cotizante.cantidadInfantes);

    let totalTks            = (totalTksSinImpuesto) + (+this.formAereos.value.impuesto) + (+this.formAereos.value.seguro) +
                              (+this.formAereos.value.tarifaAdministraiva) + (+this.formAereos.value.qse);

    this.listaDataAereos.push({
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

    console.log(this.listaDataAereos);
   
    this.formAereos.reset();

    this.dataSource.data = this.listaDataAereos
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

    this.listaDataAereos.splice(index, 1);
  }

  eliminarAereo(index:any) {
    console.log(index)

    this.listaDataAereos.splice(index, 1);

    this.dataSource.data = this.listaDataAereos

    console.log(this.dataSource.data)    
  
  }

  enviarDatosServicios() {
    this.serviciosModelObj.detalle            = this.formServicios.value.detalle;
    this.serviciosModelObj.precioPorPersona   = this.formServicios.value.precioPorPersona;
    this.serviciosModelObj.precioPorChldren   = this.formServicios.value.precioPorChldren;
    this.serviciosModelObj.precioPorAdicional = this.formServicios.value.precioPorAdicional;
    this.serviciosModelObj.tipoAlimentacion   = this.formServicios.value.tipoAlimentacion;
    this.serviciosModelObj.tipoHabitacion     = this.formServicios.value.tipoHabitacion;
    this.serviciosModelObj.tipoAcomodacion    = this.formServicios.value.tipoAcomodacion;
    this.serviciosModelObj.incluye            = this.formServicios.value.incluye;
    this.serviciosModelObj.noIncluye          = this.formServicios.value.noIncluye;
    this.serviciosModelObj.infoImportante     = this.formServicios.value.infoImportante;
    this.serviciosModelObj.otrasCondiciones   = this.formServicios.value.otrasCondiciones;
    
    this.cotizacion.servicios.push(this.serviciosModelObj);

    console.log(this.cotizacion);
  }
}


