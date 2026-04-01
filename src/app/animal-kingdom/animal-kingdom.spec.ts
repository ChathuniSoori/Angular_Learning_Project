import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalKingdom } from './animal-kingdom';

describe('AnimalKingdom', () => {
  let component: AnimalKingdom;
  let fixture: ComponentFixture<AnimalKingdom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimalKingdom],
    }).compileComponents();

    fixture = TestBed.createComponent(AnimalKingdom);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
