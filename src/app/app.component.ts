import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  products = [
    {
      id: '1',
      name: 'Rower',
      price: '500',
      description: 'Opis roweru'
    },
    {
      id: '2',
      name: 'Samochód',
      price: '20000',
      description: 'Opis samochodu'
    },
    {
      id: '3',
      name: 'Laptop',
      price: '3000',
      description: 'Opis laptopa'
    }
  ];

  basket: Array<string> = [];

  add(product: string) {
      this.basket.push(product);
  }
}
