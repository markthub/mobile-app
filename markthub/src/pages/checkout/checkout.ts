import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { CheckoutProvider } from '../../providers/checkout/checkout';
import { UpdateItemPage } from '../update-item/update-item';

@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html',
})
export class CheckoutPage {

  items: any[];
  checkoutSubTotal: number = 0.0;
  riderTip: number = 0.0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public checkoutProvider: CheckoutProvider) {
  }

  ionViewWillLoad() {
    this.refreshBasket()
  }

  public removeItem(item) {
    this.checkoutProvider.removeItem(item);
    this.refreshBasket();
  }

  public updateItem(item) {
    const modal = this.modalCtrl.create(UpdateItemPage, {
      "item": item,
      "subTotal": this.checkoutSubTotal
    }, {
        cssClass: "update-item-modal"
      }
    );

    modal.onDidDismiss(() => {
      this.refreshBasket();
    });

    modal.present();
  }

  public addTip() {
    console.log('add');
    this.riderTip += 0.5;
    this.checkoutSubTotal += 0.5;
  }

  public removeTip() {
    console.log('remove');
    if (this.riderTip > 0.0){
      this.riderTip -= 0.5;
      this.checkoutSubTotal -= 0.5;
    }
  }

  public order() {
    console.log('ordered');
  }

  private refreshBasket() {
    this.items = this.checkoutProvider.getBasketItems();
    this.checkoutSubTotal = this.checkoutProvider.getBasketTotalAmount();

    if (this.items.length == 0) {
      this.navCtrl.pop();
    }
  }
}
