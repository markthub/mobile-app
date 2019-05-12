import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { CheckoutProvider } from '../../providers/checkout/checkout';

@Component({
  selector: 'checkout-modal',
  templateUrl: 'checkout-modal.html',
})
export class CheckoutModalPage {

  item: any;
  qty: number;
  totalAmount: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public checkoutProvider: CheckoutProvider) {
    this.item = this.navParams.get('item');    
  }

  ionViewWillEnter() {
    let itemInBasket = this.checkoutProvider.getItem(this.item.ID);
    if (itemInBasket != null && itemInBasket != undefined) {
      this.qty = itemInBasket.quantity;
      this.totalAmount = itemInBasket.quantity * itemInBasket.price;
    } else {
      this.qty = 1;
      this.totalAmount = this.item.price;
    }
  }

  public addQuantity() {
    this.totalAmount += this.item.price;
    this.qty += 1;
  }

  public removeQuantity() {
    if (this.qty > 1) {
      this.totalAmount -= this.item.price
      this.qty -= 1;
    }
  }

  public addToBasket() {
    // set the quantity for the passed item
    this.item.quantity = this.qty;
    this.checkoutProvider.updateItem(this.item);
    this.dismissModal();
  }

  private dismissModal() {
    this.viewCtrl.dismiss();
  }
}
