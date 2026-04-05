import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { mammals } from '../data/mammels-data'
import { mammal } from '../models/mammels.model';


@Component({
  selector: 'app-animal-kingdom',
  imports: [],
  templateUrl: './animal-kingdom.html',
  styleUrl: './animal-kingdom.scss',
})
export class AnimalKingdom implements OnInit {

  @Input()
  newMammal?: mammal;

  @Output()
  newEventForMammal = new EventEmitter(); 
  
  constructor(){}

  buttonActionSelected(){
    console.log("button clicked");
    this.newEventForMammal.emit(this.newMammal)
  }
  ngOnInit() {
   
  }

}
