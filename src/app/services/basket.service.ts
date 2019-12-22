import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable()
export class BasketService {

  private basket: Array<Product> = [];
  private basketObs = new BehaviorSubject<Array<Product>>([]);

  private sum = 0;
  private sumObs = new BehaviorSubject<number>(0);

  constructor() {
    this.basketObs.next(this.basket);
    this.sumObs.next(this.sum);
  }

  add(product: Product) {
      this.basket.push(product);
      this.basketObs.next(this.basket);
  }

  countSum() {
    if (this.basket.length > 0) {
      this.sum = 0;
      this.basket.forEach(element => {
        this.sum = this.sum + element.price;
      });
    }
    this.sumObs.next(this.sum);
  }

  getBasketObs(): Observable<Array<Product>> {
    return this.basketObs.asObservable();
  }

  getSumObs(): Observable<number> {
    return this.sumObs.asObservable();
  }
}
