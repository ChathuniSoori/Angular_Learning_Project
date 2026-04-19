import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { mammals } from '../data/mammels-data'
import { mammal } from '../models/mammels.model';
import { CommonModule } from '@angular/common';
import { url } from 'inspector';


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
      'animals':true,
    }
  }
  cardStyles(){
    return{
    'font-family': "'Josefin Sans', sans-serif",
    'font-weight': '700',
    'font-style': 'normal'
    }
  }

  buttonActionSelected(){
    console.log("button clicked");
    this.newEventForMammal.emit(this.newMammal)
  }
  ngOnInit() {
   
  }

}
