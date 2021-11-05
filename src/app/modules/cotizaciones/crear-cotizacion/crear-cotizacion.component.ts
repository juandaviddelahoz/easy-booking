import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
// import { aereoModel } from './models/aereo.model';
import { aereoModel, Cotizacion, infoCotizanteModel } from './models/info-cotizante.model';

@Component({
  selector: 'app-crear-cotizacion',
  templateUrl: './crear-cotizacion.component.html',
  styleUrls: ['./crear-cotizacion.component.scss']
})
export class CrearCotizacionComponent implements OnInit {

  formInfoCotizante!: FormGroup;
  infoCotizanteModelObj: infoCotizanteModel = new infoCotizanteModel(); 

  formAereos!: FormGroup;
  aereoModelObj: aereoModel = new aereoModel();
  aereoData: any;
  cotizacion : Cotizacion = new Cotizacion();
  

  constructor(private formbuilder: FormBuilder) {}

  ngOnInit(): void {
    this.cotizacion.aereo = new Array<aereoModel>()
 
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

    this.obtenerAereo();
  }

  enviarDatosInfoCotizante() {

    this.cotizacion.cotizante = new infoCotizanteModel();
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
    //----------------------------------------------------------------------------
    this.infoCotizanteModelObj.nombres          = this.formInfoCotizante.value.nombres;
    this.infoCotizanteModelObj.apellidos        = this.formInfoCotizante.value.apellidos;
    this.infoCotizanteModelObj.email            = this.formInfoCotizante.value.email;
    this.infoCotizanteModelObj.identificacion   = this.formInfoCotizante.value.identificacion;
    this.infoCotizanteModelObj.fechaNacimiento  = this.formInfoCotizante.value.fechaNacimiento;
    this.infoCotizanteModelObj.fechaEntrada     = this.formInfoCotizante.value.fechaEntrada;
    this.infoCotizanteModelObj.fechaSalida      = this.formInfoCotizante.value.fechaSalida;
    this.infoCotizanteModelObj.cantidadAdultos  = this.formInfoCotizante.value.cantidadAdultos;
    this.infoCotizanteModelObj.cantidadChildren = this.formInfoCotizante.value.cantidadChildren;
    this.infoCotizanteModelObj.cantidadInfantes = this.formInfoCotizante.value.cantidadInfantes;
    this.infoCotizanteModelObj.destino          = this.formInfoCotizante.value.destino;
    this.infoCotizanteModelObj.observaciones    = this.formInfoCotizante.value.observaciones;

    console.log(this.infoCotizanteModelObj);
    console.log(Object.values(this.infoCotizanteModelObj))

    let cerrarFormInfoCotizante = document.getElementById('cerrarFormInfoCotizante');
    cerrarFormInfoCotizante?.click();

    this.formInfoCotizante.reset();
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
    this.aereoModelObj.detalle              = this.formAereos.value.detalle;
    this.aereoModelObj.tarifaBaseAdultos    = this.formAereos.value.tarifaBaseAdultos;
    this.aereoModelObj.tarifaBaseChildren   = this.formAereos.value.tarifaBaseChildren;
    this.aereoModelObj.tarifaBaseInfantes   = this.formAereos.value.tarifaBaseInfantes;
    this.aereoModelObj.totalTksSinImpuesto  = (this.aereoModelObj.tarifaBaseAdultos  * this.infoCotizanteModelObj.cantidadAdultos) + 
                                              (this.aereoModelObj.tarifaBaseChildren * this.infoCotizanteModelObj.cantidadChildren) +
                                              (this.aereoModelObj.tarifaBaseInfantes * this.infoCotizanteModelObj.cantidadInfantes);
    this.aereoModelObj.impuesto             = this.formAereos.value.impuesto;
    this.aereoModelObj.seguro               = this.formAereos.value.seguro;
    this.aereoModelObj.tarifaAdministraiva  = this.formAereos.value.tarifaAdministraiva;
    this.aereoModelObj.qse                  = this.formAereos.value.qse;
    this.aereoModelObj.totalTks             = (+this.aereoModelObj.totalTksSinImpuesto) + (+this.aereoModelObj.impuesto) + (+this.aereoModelObj.seguro) +
                                              (+this.aereoModelObj.tarifaAdministraiva) + (+this.aereoModelObj.qse);

    this.cotizacion.aereo.push(this.aereoModelObj);



    console.log(this.cotizacion);
    console.log(this.aereoModelObj.tarifaBaseAdultos);

    let ref = document.getElementById('cerrar');
    ref?.click();

    this.formAereos.reset();

    this.obtenerAereo();
  }

  obtenerAereo() {
    this.aereoData = [
      {detalle: this.aereoModelObj.detalle, tarifaBaseAdultos: this.aereoModelObj.tarifaBaseAdultos, 
       tarifaBaseChildren: this.aereoModelObj.tarifaBaseChildren, tarifaBaseInfantes: this.aereoModelObj.tarifaBaseInfantes,
       totalTksSinImpuesto: this.aereoModelObj.totalTksSinImpuesto, impuesto: this.aereoModelObj.impuesto, 
       seguro: this.aereoModelObj.seguro, tarifaAdministraiva: this.aereoModelObj.tarifaAdministraiva, 
       qse: this.aereoModelObj.qse, totalTks: this.aereoModelObj.totalTks},
    ]
  }

  editarAereo(){
    this.formAereos.controls['detalle'].setValue(this.aereoModelObj.detalle);
    this.formAereos.controls['tarifaBaseAdultos'].setValue(this.aereoModelObj.tarifaBaseAdultos);
    this.formAereos.controls['tarifaBaseChildren'].setValue(this.aereoModelObj.tarifaBaseChildren);
    this.formAereos.controls['tarifaBaseInfantes'].setValue(this.aereoModelObj.tarifaBaseInfantes);
    this.formAereos.controls['impuesto'].setValue(this.aereoModelObj.impuesto);
    this.formAereos.controls['seguro'].setValue(this.aereoModelObj.seguro);
    this.formAereos.controls['tarifaAdministraiva'].setValue(this.aereoModelObj.tarifaAdministraiva);
    this.formAereos.controls['qse'].setValue(this.aereoModelObj.qse)
  }
}
