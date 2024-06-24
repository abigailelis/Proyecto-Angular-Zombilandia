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
  
  /**Para el cálculo del precio total del carrito */
  private _total: number = 0;
  total: BehaviorSubject<number> = new BehaviorSubject(this._total);
 
  constructor(){}

  addToCart(article: Article){
    let item:Article | undefined = this._cartList.find((v1)=>v1.name == article.name);

    if(!item)
      this._cartList.push({...article});
    else
      item.quantity += article.quantity;

    this.cartList.next(this._cartList);
  
    /**Precio total del carrito */
    this._total+= article.price * article.quantity; 
    this.total.next(this._total);
  }

}
