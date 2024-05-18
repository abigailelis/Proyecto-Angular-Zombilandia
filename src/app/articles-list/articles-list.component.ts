import { Component, OnInit } from '@angular/core';
import { Article } from './Article';
import { ArticleCartService } from '../services/article-cart.service';
import { ArticleDataService } from '../services/article-data.service';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrl: './articles-list.component.scss'
})
export class ArticlesListComponent implements OnInit {

  articles: Article[] = [];

  constructor (
    private cart: ArticleCartService,
    private articlesDataService: ArticleDataService){}

  ngOnInit(): void {
    this.articlesDataService.getAll()
      .subscribe(articles => this.articles = articles);
  }

  maxReached(msg: String){
    alert(msg);
  }

  addToCart(article: Article): void{
    this.cart.addToCart(article);
    article.stock -= article.quantity;
    article.quantity = 0;
  }
}
