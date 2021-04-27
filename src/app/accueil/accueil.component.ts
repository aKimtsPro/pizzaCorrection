import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  username: string = 'utilisateur';

  constructor() { }

  ngOnInit(): void {
  }

  onTest(){
    let tab = [
      'samuel',
      'john',
      'tarik',
      'melinda',
      'marie'
    ]

    let obs = from(tab).pipe(
      filter((value) => value.charAt(0) == 'm' ),
      map( (value) => value.length ),
      filter(value => value > 6)
    );

    let tabFini = [];

    obs.subscribe(value => tabFini.push(value), undefined, () => console.log(tabFini));
  }

}
