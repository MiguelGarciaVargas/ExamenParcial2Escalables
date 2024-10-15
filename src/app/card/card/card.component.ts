import { Component, Input } from '@angular/core';
import { Product } from '../../interfaces/product';

import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input()
  public product: Product = {
    id: 0,
    title: '',
    price: 0,
    description: '',
    category: 'string',
    image: 'string',
  };
}
