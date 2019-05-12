import { Injectable } from '@angular/core';

@Injectable()
export class CheckoutProvider {

  checkoutBasket = {};
  totalBasketItems: number = 0;
  totalBasketAmount: number = 0.0;

  constructor() {
  }

  public removeItem(item) {
    delete this.checkoutBasket[item.ID];
    this.updateBasket();
  }

  public updateItem(item) {
    this.checkoutBasket[item.ID] = item;
    this.updateBasket();
  }

  public getItem(itemId) {
    return this.checkoutBasket[itemId];
  }

  public getQuantityOfItem(itemId) {
    return this.checkoutBasket[itemId].quantity;
  }

  public hasProductsInBasket() {
    return Object.keys(this.checkoutBasket).length > 0;
  }

  public getBasketSize() {
    this.updateBasket();
    return this.totalBasketItems;
  }

  public getBasketTotalAmount() {
    this.updateBasket();
    return this.totalBasketAmount;
  }

  public getBasketItems() {
    return Object.keys(this.checkoutBasket).map(key => this.checkoutBasket[key]);
  }

  private updateBasket() {
    this.totalBasketAmount = this.calculateBasketAmount();
    this.totalBasketItems = this.calculateBasketItemsSize();
  }

  private calculateBasketItemsSize() {
    let total = 0;
    for (var key in this.checkoutBasket) {
        total += this.checkoutBasket[key].quantity;
    }
    return total;
  }

  private calculateBasketAmount() {
    let total = 0.0;
    for (var key in this.checkoutBasket) {
        total += this.checkoutBasket[key].price * this.checkoutBasket[key].quantity;
    }
    return total;
  }
}
