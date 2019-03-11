import { Component, OnInit } from '@angular/core';
import { NivelModel } from '../model/nivel-model';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {
  niveles: NivelModel[];
  idNivel: number;
  
  constructor() { 
    this.niveles = [
      { id: 1, name: "Senior" },
      { id: 2, name: "Middle" },
      { id: 3, name: "Junior" }
    ];
  }
  
  ngOnInit() {
  }

}
