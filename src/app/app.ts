import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AnimalKingdom } from './animal-kingdom/animal-kingdom';
import { mammals } from './data/mammels-data'
import { animationFrameScheduler } from 'rxjs';
import { mammal } from './models/mammels.model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,AnimalKingdom],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('AngularPractice');

  mammalsData = mammals;
  
  buttonActionView(newMammalView: mammal){
    console.log(newMammalView.description)
  }
}
