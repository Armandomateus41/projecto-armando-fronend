import { hero } from './../hero.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  hero:  hero = {
    id: 1,
    name: 'Wolverine'
  } ;
  constructor() { }

  ngOnInit(): void {
  }

}
