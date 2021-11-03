import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-agregar-aereo',
  templateUrl: './agregar-aereo.component.html',
  styleUrls: ['./agregar-aereo.component.scss']
})
export class AgregarAereoComponent implements OnInit {

  public Editor = ClassicEditor;

  formAereo: FormGroup;




  constructor(private formbuilder: FormBuilder) {
      this.formAereo = this.formbuilder.group ({
        tarifaBaseAdultos: [''],
        tarifaBaseNiños: [''],
        tarifaBaseInfantes: [''],
        impuesto: [''],
        seguro: [''],
        tarifaAdministraiva: [''],
        qse: ['']
      })
   }

  ngOnInit(): void {
  }

}
