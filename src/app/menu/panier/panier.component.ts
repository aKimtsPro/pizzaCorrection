import { Component, Input, OnInit } from '@angular/core';
import { Plat } from 'src/app/models/plat.model';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  @Input('cmd')
  platCommandes: Plat[] = []; 

  constructor() { }

  ngOnInit(): void {
  }

}
