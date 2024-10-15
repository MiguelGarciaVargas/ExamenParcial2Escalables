import { Routes } from '@angular/router';
import { ProductViewComponent } from './product-view/product-view/product-view.component';
import { HomeComponent } from './home/home/home.component';
import { NotFoundComponent } from './not-found/not-found/not-found.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'product/:id', component: ProductViewComponent },
  { path: '**', component: NotFoundComponent },
];
