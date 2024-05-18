import { Injectable } from '@angular/core';
import { Article } from '../articles-list/Article';
import { BehaviorSubject, Observable } from 'rxjs';
/**
 * Maneja la lógica del carrito
 */

@Injectable({
  providedIn: 'root'
})
export class ArticleCartService {
  private _cartList: Article[] = [];
  cartList: BehaviorSubject<Article[]> = new BehaviorSubject(this._cartList);

  constructor(){}

  addToCart(article: Article){

    let item:Article | undefined = this._cartList.find((v1)=>v1.name == article.name);

    if(!item)
      this._cartList.push({...article});
    else
      item.quantity += article.quantity;
    
    this.cartList.next(this._cartList);
    console.log(this._cartList);
  }
}
