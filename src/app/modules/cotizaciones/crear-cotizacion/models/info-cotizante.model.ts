//InformaciónCotizante

export class Cotizacion{
    cotizante! : infoCotizanteModel;
    aereo : Array<aereoModel> = [];
}

export class infoCotizanteModel {
    nombres!            : string;
    apellidos!          : string;
    email!              : string;
    identificacion!     : string;
    fechaNacimiento!    : string;
    fechaEntrada!       : string;
    fechaSalida!        : string;
    cantidadAdultos!    : number;
    cantidadChildren!   : number;
    cantidadInfantes!   : number;
    destino!            : string;
    observaciones!      : string
}

export class aereoModel {
    detalle!            : string;
    tarifaBaseAdultos!  : number;
    tarifaBaseChildren! : number;
    tarifaBaseInfantes! : number;
    totalTksSinImpuesto!: number;
    impuesto!           : number;
    seguro!             : number;
    tarifaAdministraiva!: number;
    qse!                : number;
    totalTks!           : number
}