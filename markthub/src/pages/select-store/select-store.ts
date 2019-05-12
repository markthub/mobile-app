import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ProductsPage } from '../products/products';

@Component({
  selector: 'page-select-store',
  templateUrl: 'select-store.html',
})
export class SelectStorePage {

  stores: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.stores = this.fillStores();
  }

  public seeProducts(store) {
    this.navCtrl.push(ProductsPage, {
      storeId: store.id
    });
  }

  private fillStores() {
    // TODO: I should use the APIs but at the moment the Database schema is a bit strange
    return [
      {"id": 1, "name": "Alberth Heijn", "imageUrl": "../../assets/imgs/ah.jpg"},
      {"id": 2, "name": "Jumbo", "imageUrl": "../../assets/imgs/jumbo.png"},
    ]
  }
}
