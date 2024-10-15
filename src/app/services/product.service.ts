import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private http = inject(HttpClient);
  private apiUrl = 'https://fakestoreapi.com/products';

  private _products: Product[] = [];

  public fetchProducts() {
    this.http.get<Product[]>(this.apiUrl).subscribe({
      next: (response) => {
        console.log(response);
        this._products = response;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  public getProducts(): Product[] {
    return this._products;
  }

  public getProductById(id: number): Product | undefined {
    return this._products.find((product) => product.id === id);
  }
}
