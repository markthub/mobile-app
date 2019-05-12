import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { CheckoutProvider } from '../../providers/checkout/checkout';

@Component({
  selector: 'page-update-item',
  templateUrl: 'update-item.html',
})
export class UpdateItemPage {

  item: any = null;
  qty: number = 0;
  amount: number = 0.0;
  toBeRemoved: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public checkoutProvider: CheckoutProvider) {
    this.item = this.navParams.get("item");
  }

  ionViewWillEnter() {    
    this.amount = this.item.quantity * this.item.price;
    this.qty = this.item.quantity;
  }

  public addQuantity() {
    this.qty += 1;
    this.amount += this.item.price;
    this.toBeRemoved = false;
  }

  public removeQuantity() {
    if (this.qty == 0) {
      this.toBeRemoved = true;
    } else {
      this.qty -= 1;
      this.amount -= this.item.price;
      if (this.qty == 0) {
        this.toBeRemoved = true;
      }
    }
  }

  public update() {    
    this.item.quantity = this.qty;
    this.checkoutProvider.updateItem(this.item);
    this.dismissModal();
  }

  public remove() {
    this.checkoutProvider.removeItem(this.item);
    this.dismissModal();
  }

  private dismissModal() {
    this.viewCtrl.dismiss();
  }
}
