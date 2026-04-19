import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { mammals } from '../data/mammels-data'
import { mammal } from '../models/mammels.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-animal-kingdom',
  imports: [CommonModule],
  templateUrl: './animal-kingdom.html',
  styleUrl: './animal-kingdom.scss',
})
export class AnimalKingdom implements OnInit {

  @Input()
  newMammal?: mammal;

  @Output()
  newEventForMammal = new EventEmitter(); 
  
  constructor(){}

  cardClasses(){
    return{
      'animals':this.newMammal?.id ==3,
    }
  }

  buttonActionSelected(){
    console.log("button clicked");
    this.newEventForMammal.emit(this.newMammal)
  }
  ngOnInit() {
   
  }

}
