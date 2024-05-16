import { Component } from '@angular/core';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrl: './articles-list.component.scss'
})
export class ArticlesListComponent {
  article1 = {
    "name" : "Granada",
    "type": "Arma",
    "price" : 125000,
    "stock": 1053,
    "image" : "assets/img/granade.jpg"
  }
  article2 = {
    "name" : "Botiquin",
    "type": "Primeros auxilios",
    "price" : 50000,
    "stock": 24990,
    "image" : "assets/img/botiquin.jpg"
  }
  article3 = {
    "name" : "Antidoto",
    "type": "Primeros auxilios",
    "price" : 1000000,
    "stock": 103,
    "image" : "assets/img/antidoto.jpg"
  }
  article4 = {
    "name" : "Bengalas x2",
    "type": "Primeros auxilios",
    "price" : 91000,
    "stock": 500,
    "image" : "assets/img/bengala.jpg"
  }
}
