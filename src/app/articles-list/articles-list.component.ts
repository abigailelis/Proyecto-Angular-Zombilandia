import { Component, OnInit } from '@angular/core';
import { Article } from './Article';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrl: './articles-list.component.scss'
})
export class ArticlesListComponent {
  articles: Article[] = [
    {
      name: "Granada",
      type: "Arma",
      price: 1250,
      stock: 0,
      image: "assets/img/granade.jpg",
      clearance: false
    },
    {
      name: "Botiquin",
      type: "Primeros auxilios",
      price: 50000,
      stock: 24990,
      image: "assets/img/botiquin.jpg",
      clearance: true
    },
    {
      name: "Antidoto",
      type: "Primeros auxilios",
      price: 10000,
      stock: 0,
      image: "assets/img/antidoto.jpg",
      clearance:false
    },
    {
      name: "Bengalas x2",
      type: "Primeros auxilios",
      price: 910,
      stock: 500,
      image: "assets/img/bengala.jpg",
      clearance: false
    }
  ];


}
