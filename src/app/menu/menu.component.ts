import { Component, OnInit } from '@angular/core';
import { Plat } from '../models/plat.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  listCommandes: Plat[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onAdd( plat: Plat ){
    this.listCommandes.push( plat );
  }

}
