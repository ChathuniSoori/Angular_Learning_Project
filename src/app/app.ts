import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AnimalKingdom } from './animal-kingdom/animal-kingdom';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,AnimalKingdom],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('AngularPractice');
}
