import { Component, OnInit } from '@angular/core';
import * as html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-generar-cotizacion',
  templateUrl: './generar-cotizacion.component.html',
  styleUrls: ['./generar-cotizacion.component.scss']
})
export class GenerarCotizacionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onExportClick(){
    const options = {
      margin: 0.2,
      filename: 'Cotizacion_1-pdf',
      image: {type: 'jpeg', quality: 5},
      html2canvas: {},
      jsPDF: {unit: 'in', format: 'letter', orientation: 'portrait'}
    };

    const content: Element = document.getElementById('element-to-export');

    html2pdf()
    .from(content)
    .set(options)
    .save();
  }

}
