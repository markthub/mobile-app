import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, ModalController, Content } from 'ionic-angular';
import { CheckoutModalPage } from '../checkout-modal/checkout-modal';
import { CheckoutProvider } from '../../providers/checkout/checkout';
import { CheckoutPage } from '../checkout/checkout';

@Component({
  selector: 'page-food-styles',
  templateUrl: 'food-styles.html',
})
export class FoodStylesPage {
  @ViewChild(Content) content: Content;

  static get parameters() {
    return [[NavController], [NavParams], [ModalController], [CheckoutProvider]];
  }

  style: any;
  items: any[];

  showCheckout: boolean = false;
  basketItems: number = 0;
  basketTotalAmount: number = 0.0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public checkoutProvider: CheckoutProvider) {
    this.style = this.navParams.get("style");
    this.items = this.fillItems();
  }

  ionViewWillEnter() {
    this.displayCheckoutFooter();
  }

  public presentCheckoutModal(item) {
    const modal = this.modalCtrl.create(CheckoutModalPage, { "item": item }, {
      cssClass: "checkout-modal"
    });

    modal.onDidDismiss(() => {
      this.content.resize();
      this.displayCheckoutFooter();
    });

    modal.present();
  }

  public viewBasket() {
    this.navCtrl.push(CheckoutPage, {});
  }

  private displayCheckoutFooter() {
    if (this.checkoutProvider.hasProductsInBasket()) {
      this.showCheckout = true;
      this.basketItems = this.checkoutProvider.getBasketSize();
      this.basketTotalAmount = this.checkoutProvider.getBasketTotalAmount();
    } else {
      this.showCheckout = false;
    }
  }

  private fillItems() {
    return [
      { "id": 1, "name": "aaa", "price": 4.35, "url": "https://www.budgetbytes.com/wp-content/uploads/2016/07/Pasta-with-Butter-Tomato-Sauce-and-Toasted-Bread-Crumbs-V2.jpg" },
      { "id": 2, "name": "sss", "price": 4.35, "url": "https://www.budgetbytes.com/wp-content/uploads/2016/07/Pasta-with-Butter-Tomato-Sauce-and-Toasted-Bread-Crumbs-V2.jpg" },
      { "id": 3, "name": "ddd", "price": 4.35, "url": "https://www.budgetbytes.com/wp-content/uploads/2016/07/Pasta-with-Butter-Tomato-Sauce-and-Toasted-Bread-Crumbs-V2.jpg" },
      { "id": 4, "name": "ddd", "price": 4.35, "url": "https://www.budgetbytes.com/wp-content/uploads/2016/07/Pasta-with-Butter-Tomato-Sauce-and-Toasted-Bread-Crumbs-V2.jpg" },
      { "id": 5, "name": "ddd", "price": 4.35, "url": "https://www.budgetbytes.com/wp-content/uploads/2016/07/Pasta-with-Butter-Tomato-Sauce-and-Toasted-Bread-Crumbs-V2.jpg" },
      { "id": 6, "name": "ddd", "price": 4.35, "url": "https://www.budgetbytes.com/wp-content/uploads/2016/07/Pasta-with-Butter-Tomato-Sauce-and-Toasted-Bread-Crumbs-V2.jpg" },
      { "id": 7, "name": "ddd", "price": 4.35, "url": "https://www.budgetbytes.com/wp-content/uploads/2016/07/Pasta-with-Butter-Tomato-Sauce-and-Toasted-Bread-Crumbs-V2.jpg" }
    ]
  }
}
