import { Component } from '@angular/core';

import { ExplorePage } from '../explore/explore';
import { SelectStorePage } from '../select-store/select-store';
import { AccountPage } from '../account/account';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  exploreTab = ExplorePage;
  productsTab = SelectStorePage;
  accountTab = AccountPage;

  constructor() {

  }
}
