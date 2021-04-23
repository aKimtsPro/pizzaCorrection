import { Component, OnInit } from '@angular/core';
import { Plat } from 'src/app/models/plat.model';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {

  prixMax: number;

  pizzaList: Plat[] = [
    {
      nom:'pizza 4 fromages',
      prix: 12
    },
    {
      nom:'pizza spéciale',
      prix: 8
    },
    {
      nom:'pizza végétale',
      prix: 9
    },
    {
      nom:'pizza hawaïenne',
      prix: 7
    },
    {
      nom:'pizza épinard',
      prix: 13
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
