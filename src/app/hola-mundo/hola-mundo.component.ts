import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-hola-mundo',
  templateUrl: './hola-mundo.component.html',
  styleUrls: ['./hola-mundo.component.css']
})
export class HolaMundoComponent implements OnInit {
  @Input() message: string;
  @Output() MessageReturn= new EventEmitter<String>();

  constructor(private _data: DataService) { }

  ngOnInit() {
  this.MessageReturn.emit(this.message);
}
   clickLike(message:string){
     this.MessageReturn.emit(`Me Gusto el Chiste, ${message}`);
   } 

   clickShare(message:string){
    this._data.setGeneralNotificationMessage(`Mensaje Compartido, ${message}`);
    //this._data.getGeneralNotificationMessage();
  } 
}
