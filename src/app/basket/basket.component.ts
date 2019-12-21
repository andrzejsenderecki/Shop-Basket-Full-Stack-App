import { Component, OnInit, Input, DoCheck } from '@angular/core';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})

export class BasketComponent implements OnInit, DoCheck {
  title = 'Basket';
  sum = 0;

  @Input()
  basketContent = [];

  constructor() { }

  ngDoCheck() {
    this.countSum();
  }

  ngOnInit() {
    this.countSum();
  }

  countSum() {
    if (this.basketContent.length > 0) {
      this.sum = 0;
      this.basketContent.forEach(element => {
        this.sum = this.sum + Number(element.price);
      });
    }
  }
}
