export class TableCotizaciones {
    id_Reserva: number;
    id_Estado: number;
    nombre_Cotizante: string;
    destino: string;
    fecha_Entrada: string;
    fecha_Salida: string;
    estado: string;
    acciones: any;
    cambiarEstado: any;
    btnCambiarEstado: boolean = false;
}