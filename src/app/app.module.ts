import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { FormsModule } from '@angular/forms';
import { ZombilandiaAboutComponent } from './zombilandia-about/zombilandia-about.component';
import { ZombilandiaArticlesComponent } from './zombilandia-articles/zombilandia-articles.component';
import { CartComponent } from './cart/cart.component';
import { InputIntegerComponent } from './input-integer/input-integer.component'

@NgModule({
  declarations: [
    AppComponent,
    ArticlesListComponent,
    ZombilandiaAboutComponent,
    ZombilandiaArticlesComponent,
    CartComponent,
    InputIntegerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
