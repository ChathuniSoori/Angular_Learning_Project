import { Component, Input, OnInit } from '@angular/core';
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
  mammal?: mammal;
  
  constructor(){}

  ngOnInit() {
      
  }
}
