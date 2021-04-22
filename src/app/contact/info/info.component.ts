import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  adresse: string = "45 rue de la pizza PizzaCity";
  email: string = "angular@pizza.city";
  tel: string = "0444/99.99.99";

  constructor() { }

  ngOnInit(): void {
  }

}
