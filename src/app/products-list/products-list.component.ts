import { Component, Input } from '@angular/core';
import { BasketService } from '../services/basket.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {
  title = 'Products';

  @Input()
  productsList: Array<Product> = [];

  constructor(private basketBasketService: BasketService) {

  }

  addToCard(product: Product) {
    this.basketBasketService.add(product);
    this.basketBasketService.countSum();
  }
}
