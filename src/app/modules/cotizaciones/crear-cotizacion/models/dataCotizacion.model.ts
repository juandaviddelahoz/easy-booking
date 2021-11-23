import { Persona } from "../Entidades/persona.model";
import { Reserva } from '../Entidades/reserva.model';
import { Aereo } from '../Entidades/aereo.model';
import { Servicio } from "../Entidades/servicio.model";

export class DataCotizacion {
    persona: Persona;
    reserva: Reserva;
    aereos: Array<Aereo>;
    servicios: Array<Servicio>
}