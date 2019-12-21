import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  title = 'Products';

  @Input()
  productsList = [];

  @Output()
  emitProduct = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  addToCard(product: string) {
    this.emitProduct.emit(product);
  }
}
