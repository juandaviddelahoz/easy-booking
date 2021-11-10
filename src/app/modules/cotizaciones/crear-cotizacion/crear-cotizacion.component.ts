import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
// import { aereoModel } from './models/aereo.model';
import { aereoModel, Cotizacion, infoCotizanteModel, serviciosModel } from './models/info-cotizante.model';
import { DataAereos } from './interfaces/dataAereos';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { MatTableDataSource } from '@angular/material/table';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';

// tabla

// const ELEMENT_DATA: DataAereos[] = [
//   {detalle: '<p><strong>Barranquilla</strong></p><p>Ernesto Cotissoz Airport</p><p><strong>15 de Diciembre de 2021</strong></p><p><strong>15:57</strong></p><p><strong>Duración Vuelo:</strong> 2h 5m</p><p><strong>VivaAir 5618</strong></p><p><strong>Clase:</strong> Economy</p><p><strong>Equipaje:</strong> 0 Piezas</p><p>Directo</p><p><strong>San Andres Island</strong></p><p>San Andres Island Airport</p><p><strong>15 de Diciembre 2021</strong></p><p><strong>18:02</strong></p>', tarifaBaseAdultos: 100000, tarifaBaseChildren: 100000, tarifaBaseInfantes: 100000,
//   totalTksSinImpuesto: 300000, impuesto: 20000, seguro: 10000, tarifaAdministraiva: 10000, qse: 10000, totalTks: 350000},
//   {detalle: '<p><strong>Bogota</strong></p><p>El dorado International Airport</p><p><strong>15 de Diciembre de 2021</strong></p><p><strong>15:57</strong></p><p><strong>Duración Vuelo:</strong> 2h 5m</p><p><strong>VivaAir 5618</strong></p><p><strong>Clase:</strong> Economy</p><p><strong>Equipaje:</strong> 0 Piezas</p><p>Directo</p><p><strong>San Andres Island</strong></p><p>San Andres Island Airport</p><p><strong>15 de Diciembre 2021</strong></p><p><strong>18:02</strong></p>', tarifaBaseAdultos: 100000, tarifaBaseChildren: 100000, tarifaBaseInfantes: 100000,
//   totalTksSinImpuesto: 300000, impuesto: 20000, seguro: 10000, tarifaAdministraiva: 10000, qse: 10000, totalTks: 350000},
// ];

let ELEMENT_DATA_TEMP: DataAereos[] = [];

// --------------------------------------------------------------------

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

  // dataSource = ELEMENT_DATA;

  dataSource = new MatTableDataSource();

  // -------------------------------------------------------------------

  formInfoCotizante!: FormGroup;
  infoCotizanteModelObj: infoCotizanteModel = new infoCotizanteModel(); 

  formAereos!: FormGroup;
  aereoModelObj: aereoModel = new aereoModel();
  aereoData: any;
  cotizacion : Cotizacion = new Cotizacion();

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
    this.infoCotizanteModelObj.nombres          = "";
    this.infoCotizanteModelObj.apellidos        = "";
    this.infoCotizanteModelObj.email            = "";
    this.infoCotizanteModelObj.identificacion   = "";
    this.infoCotizanteModelObj.fechaNacimiento  = "";
    this.infoCotizanteModelObj.fechaEntrada     = "";
    this.infoCotizanteModelObj.fechaSalida      = "";
    this.infoCotizanteModelObj.cantidadAdultos  = 0;
    this.infoCotizanteModelObj.cantidadChildren = 0;
    this.infoCotizanteModelObj.cantidadInfantes = 0;
    this.infoCotizanteModelObj.destino          = "";
    this.infoCotizanteModelObj.observaciones    = ""
  }

  enviarDatosAereo() {
    console.log(this.cotizacion.aereo);
    this.aereoModelObj.detalle              = this.formAereos.value.detalle;
    this.aereoModelObj.tarifaBaseAdultos    = this.formAereos.value.tarifaBaseAdultos;
    this.aereoModelObj.tarifaBaseChildren   = this.formAereos.value.tarifaBaseChildren;
    this.aereoModelObj.tarifaBaseInfantes   = this.formAereos.value.tarifaBaseInfantes;
    this.aereoModelObj.totalTksSinImpuesto  = (this.aereoModelObj.tarifaBaseAdultos  * this.cotizacion.cotizante.cantidadAdultos)  + 
                                              (this.aereoModelObj.tarifaBaseChildren * this.cotizacion.cotizante.cantidadChildren) +
                                              (this.aereoModelObj.tarifaBaseInfantes * this.cotizacion.cotizante.cantidadInfantes);
    this.aereoModelObj.impuesto             = this.formAereos.value.impuesto;
    this.aereoModelObj.seguro               = this.formAereos.value.seguro;
    this.aereoModelObj.tarifaAdministraiva  = this.formAereos.value.tarifaAdministraiva;
    this.aereoModelObj.qse                  = this.formAereos.value.qse;
    this.aereoModelObj.totalTks             = (+this.aereoModelObj.totalTksSinImpuesto) + (+this.aereoModelObj.impuesto) + (+this.aereoModelObj.seguro) +
                                              (+this.aereoModelObj.tarifaAdministraiva) + (+this.aereoModelObj.qse);

    // this.cotizacion.aereo = JSON.parse(JSON.stringify(this.aereoModelObj));

    // this.cotizacion.aereo = [...this.cotizacion.aereo, this.aereoModelObj];

    console.log(this.aereoModelObj);

    // JSON.parse(JSON.stringify(this.arrayPasivosDetallesTemp))

    this.formAereos.reset();

    this.guardarLocalStorage();

    this.dataSource.data = this.cotizacion.aereo

  }

  guardarLocalStorage() {

    // let otro = this.cotizacion.aereo.push(this.aereoModelObj);

    let persona = this.cotizacion.aereo;

    let count = persona.push(this.aereoModelObj);

    console.log(count);

    localStorage.setItem("AereoDataLocal", JSON.stringify(persona));
  }

  obtenerLocalStorage() {

    let persona = JSON.parse(localStorage.getItem("AereoDataLocal"))

    console.log('obtenido local', persona)

  }

  editarAereo(index:any, param:any){
    console.log(index)
    this.formAereos.controls['detalle'].setValue(param.detalle);
    this.formAereos.controls['tarifaBaseAdultos'].setValue(param.tarifaBaseAdultos);
    this.formAereos.controls['tarifaBaseChildren'].setValue(param.tarifaBaseChildren);
    this.formAereos.controls['tarifaBaseInfantes'].setValue(param.tarifaBaseInfantes);
    this.formAereos.controls['impuesto'].setValue(param.impuesto);
    this.formAereos.controls['seguro'].setValue(param.seguro);
    this.formAereos.controls['tarifaAdministraiva'].setValue(param.tarifaAdministraiva);
    this.formAereos.controls['qse'].setValue(param.qse);

    ELEMENT_DATA_TEMP = this.formAereos.value;

    // ELEMENT_DATA.splice(index, 1);
    console.log(ELEMENT_DATA_TEMP)
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


