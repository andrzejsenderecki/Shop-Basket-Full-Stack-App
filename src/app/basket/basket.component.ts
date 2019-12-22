import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { BasketService } from '../services/basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})

export class BasketComponent implements OnInit, DoCheck {
  title = 'Basket';

  basketContent = [];
  sum = 0;

  constructor(private basketBasketService: BasketService) {
    this.basketBasketService.getBasketObs().subscribe(products => {
      this.basketContent = products;
    });

    this.basketBasketService.getSumObs().subscribe(sum => {
      this.sum = sum;
    });
  }

  ngDoCheck() {
    this.basketBasketService.getSumObs().subscribe(sum => {
      this.sum = sum;
      console.log(sum);
    });

  }
}
