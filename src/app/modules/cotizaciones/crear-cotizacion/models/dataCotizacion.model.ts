import { Persona } from "../Entidades/persona.model";
import { Reserva } from '../Entidades/reserva.model';
import { Aereo } from '../Entidades/aereo.model';
import { Servicio } from "../Entidades/servicio.model";

export class DataCotizacion {
    persona: Persona;
    reserva: Reserva;
    aereo: Array<Aereo>;
    servicio: Array<Servicio>
}