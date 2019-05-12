import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';
import { HttpClientModule } from '@angular/common/http';

import { MarktHub } from './app.component';

import { AccountPage } from '../pages/account/account';
import { CreateAccountPage } from '../pages/create-account/create-account';
import { ExplorePage } from '../pages/explore/explore';
import { ProductsPage } from '../pages/products/products';
import { SelectStorePage } from '../pages/select-store/select-store';
import { TabsPage } from '../pages/tabs/tabs';
import { SplashScreenPage } from '../pages/splash-screen/splash-screen';

// Sub pages
import { FoodStylesPage } from '../pages/food-styles/food-styles';
import { RecipePage } from '../pages/recipe/recipe';
import { CheckoutProvider } from '../providers/checkout/checkout';
import { CheckoutPage } from '../pages/checkout/checkout';
import { CheckoutModalPage } from '../pages/checkout-modal/checkout-modal';
import { UpdateItemPage } from '../pages/update-item/update-item';
import { FiltersModalPage } from '../pages/filters-modal/filters-modal';

// Directives
import { AutoHideDirective } from '../directives/auto-hide/auto-hide';
import { HideHeaderDirective } from '../directives/hide-header/hide-header';
import { ApiProvider } from '../providers/api/api';


@NgModule({
  declarations: [
    MarktHub,
    AccountPage,
    CreateAccountPage,
    ExplorePage,
    ProductsPage,
    SelectStorePage,
    TabsPage,
    SplashScreenPage,
    FoodStylesPage,
    RecipePage,
    CheckoutModalPage,
    FiltersModalPage,
    CheckoutPage,
    UpdateItemPage,
    AutoHideDirective,
    HideHeaderDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MarktHub, {
      tabsHideOnSubPages: true
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MarktHub,
    AccountPage,
    CreateAccountPage,
    ExplorePage,
    ProductsPage,
    SelectStorePage,
    TabsPage,
    SplashScreenPage,
    FoodStylesPage,
    RecipePage,
    CheckoutModalPage,
    FiltersModalPage,
    CheckoutPage,
    UpdateItemPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CheckoutProvider,
    Geolocation,
    ApiProvider,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
  ]
})
export class AppModule { }
