import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZombilandiaAboutComponent } from './zombilandia-about/zombilandia-about.component';
import { ZombilandiaArticlesComponent } from './zombilandia-articles/zombilandia-articles.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'articles',
    pathMatch: 'full'
  },
  {
    path: 'articles',
    component: ZombilandiaArticlesComponent
  },
  {
    path: 'about',
    component: ZombilandiaAboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
