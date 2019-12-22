import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { BasketComponent } from './basket/basket.component';
import { BasketService } from './services/basket.service';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    ProductsListComponent,
    BasketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [BasketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
