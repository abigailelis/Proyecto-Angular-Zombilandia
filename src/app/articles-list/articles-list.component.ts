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
      clearance: false,
      quantity:0
    },
    {
      name: "Botiquin",
      type: "Primeros auxilios",
      price: 500,
      stock: 20,
      image: "assets/img/botiquin.jpg",
      clearance: true,
      quantity:0
    },
    {
      name: "Antidoto",
      type: "Primeros auxilios",
      price: 10000,
      stock: 0,
      image: "assets/img/antidoto.jpg",
      clearance:false,
      quantity:0
    },
    {
      name: "Bengalas x2",
      type: "Primeros auxilios",
      price: 91000,
      stock: 5,
      image: "assets/img/bengala.jpg",
      clearance: false,
      quantity:0
    }
  ];
  
  upQuantity(article: Article): void{
    if(article.quantity < article.stock)
      article.quantity++;
  }
  downQuantity(article: Article): void{
    if(article.quantity > 0)
      article.quantity--;
  }
  changeQuantity(article: Article, event: any):void{
    event.preventDefault();
  }

}
