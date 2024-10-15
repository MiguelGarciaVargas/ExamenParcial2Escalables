import { Component, inject, OnInit } from '@angular/core';
import { CardComponent } from '../../card/card/card.component';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  private productsService = inject(ProductService);
  // productsList: Product[] = [];

  ngOnInit() {
    this.productsService.fetchProducts();
    // this.products = this.productsService.getProducts();
  }

  public get products(): Product[] {
    return this.productsService.getProducts();
  }
}
