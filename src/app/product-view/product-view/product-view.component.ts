import { Component, inject, Input, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-product-view',
  standalone: true,
  imports: [NgIf, RouterLink],
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.css',
})
export class ProductViewComponent implements OnInit {
  public product!: Product | undefined;

  private productsService = inject(ProductService);

  constructor(private route: ActivatedRoute) {
    this.product = {
      id: 0,
      title: '',
      price: 0,
      description: '',
      category: 'string',
      image: 'string',
    };
  }

  ngOnInit() {
    this.productsService.fetchProducts();
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.product = this.productsService.getProductById(+productId);
    }
  }
}
