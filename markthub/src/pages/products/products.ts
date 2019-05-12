import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, ModalController, Content } from 'ionic-angular';
import { CheckoutModalPage } from '../checkout-modal/checkout-modal';
import { CheckoutProvider } from '../../providers/checkout/checkout';
import { CheckoutPage } from '../checkout/checkout';
import { FiltersModalPage } from '../filters-modal/filters-modal';
import { ApiProvider } from '../../providers/api/api';

import fitty from 'fitty';

@Component({
  selector: 'page-products',
  templateUrl: 'products.html'
})
export class ProductsPage {
  @ViewChild(Content) content: Content;

  items: any[] = [];

  showCheckout: boolean;
  basketItems: number;
  basketTotalAmount: number;
  activeFilters: any[] = [];
  currPage: number = 0;
  storeId: number = -1;
  productName: string = "";
  fitties: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController,
    public checkoutProvider: CheckoutProvider, public apiProvider: ApiProvider) {
    this.storeId = this.navParams.get("storeId");
    this.getProducts(this.currPage);
  }

  ionViewWillEnter() {
    this.getProducts(this.currPage);
    this.displayCheckoutFooter();
  }

  ionViewDidEnter() {
    this.fitProductNames();
  }

  public getProducts(page, infiniteScroll?) {
    this.apiProvider.getProducts(this.storeId, page)
      .then((products: any[]) => {
        Array.prototype.push.apply(this.items, products);

        if (infiniteScroll) {
          infiniteScroll.complete();
          setTimeout(() => {
            this.fitProductNames();
          }, 150);          
        }
      });

    // check if some are in basket    
    this.items.forEach((i: any) => {
      let item = this.checkoutProvider.getItem(i.ID);
      if (item != null && item != undefined) {
        i.quantity = item.quantity;
      }
    });
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

  public async showFilters() {
    let tmpCategories: string[] = [];
    await this.apiProvider.getCategories(this.storeId, 0)
      .then((ctgs: string[]) => {
        tmpCategories = ctgs;
      }, (err: any) => {
        console.log(err);
      });

    let categories = tmpCategories.map((category: string) => { return { "name": category, "checked": false } });
    const modal = this.modalCtrl.create(FiltersModalPage, {
      categories: categories,
      filters: this.activeFilters
    }, {
        cssClass: "filters-items-modal"
      }
    );

    modal.onDidDismiss((selectedFilters) => {
      this.activeFilters = selectedFilters;
      if (this.activeFilters == null || this.activeFilters == undefined || Object.keys(this.activeFilters).length == 0) {
        this.getProducts(0);
      } else {
        this.filterItems();
      }
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

  private filterItems() {
    let categoryTerms = this.activeFilters.join(',');
    this.apiProvider.getProductsByCategory(this.storeId, 0, categoryTerms)
      .then((products: any[]) => {
        this.items = products;
      }).catch(err => {
        console.log(err);
      });
  }

  public filterProducts(event) {
    this.apiProvider.searchProducts(this.storeId, this.currPage, this.productName)
      .then((products: any[]) => {
        this.items = products;
      });
  }

  public loadMoreProducts(infiniteScroll) {    
    this.getProducts(++this.currPage, infiniteScroll);
  }

  private fitProductNames() {
    this.fitties = fitty('.product-name', { minSize: 10, maxSize: 30, multiLine: true });
    this.fitties.forEach((elem) => {
      elem.fit();
    });
  }
}
