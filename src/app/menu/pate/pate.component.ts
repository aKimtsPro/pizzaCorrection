import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Plat } from 'src/app/models/plat.model';

@Component({
  selector: 'app-pate',
  templateUrl: './pate.component.html',
  styleUrls: ['./pate.component.css']
})
export class PateComponent implements OnInit {

  @Output('add')
  addEvent = new EventEmitter<Plat>();

  listPate: Plat[] = [
    { nom: 'pâte pesto', prix: 5 },
    { nom: 'pâte carbonnara', prix: 6 },
    { nom: 'pâte bolognèse', prix: 4 },
    { nom: 'pâte arabiata', prix: 4.5 },
    { nom: "pâte à l'encre de seiche", prix: 8 }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onAdd( plat: Plat ) {
    this.addEvent.emit( plat );
  }
}
