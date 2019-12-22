import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { BasketService } from '../services/basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})

export class BasketComponent implements OnInit, DoCheck {
  title = 'Basket';
  // sum = 0;

  // @Input()
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

  // ngDoCheck() {
  //   this.countSum();
  // }

  ngOnInit() {
    
  }

  // countSum() {
  //   if (this.basketContent.length > 0) {
  //     this.sum = 0;
  //     this.basketContent.forEach(element => {
  //       this.sum = this.sum + Number(element.price);
  //     });
  //   }
  // }
}
