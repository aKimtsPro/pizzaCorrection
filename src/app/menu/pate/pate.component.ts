import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pate',
  templateUrl: './pate.component.html',
  styleUrls: ['./pate.component.css']
})
export class PateComponent implements OnInit {

  listPate: string[] = [
    'pâte pesto',
    'pâte carbonnara',
    'pâte bolognèse',
    'pâte arabiata',
    "pâte à l'encre de seiche"
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
