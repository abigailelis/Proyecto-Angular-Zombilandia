import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Article } from '../articles-list/Article';

const URL = "https://66480f4a2bb946cf2f9f8b42.mockapi.io/api/v1/articles";

@Injectable({
  providedIn: 'root'
})
export class ArticleDataService {

  constructor(private http: HttpClient) {}

  /**
   * Consume la api rest
   * this.http.verbo (get, post, put, etc).
   * Retorna un observable de la respueta a diferencia del fetch que retorna una promesa.
   */
  public getAll(): Observable<Article[]>{
    return this.http.get<Article[]>(URL)
      .pipe(tap((articles: Article[])=> articles.forEach(article => article.quantity = 0)));
  }
}
