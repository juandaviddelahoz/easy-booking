import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-agregar-aereo',
  templateUrl: './agregar-aereo.component.html',
  styleUrls: ['./agregar-aereo.component.scss']
})
export class AgregarAereoComponent implements OnInit {

  public Editor = ClassicEditor;

  constructor() { }

  ngOnInit(): void {
  }

}
