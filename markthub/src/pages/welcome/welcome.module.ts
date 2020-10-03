import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WelcomePageRoutingModule } from './welcome-routing.module';

import { WelcomePage } from './welcome.page';
import { WelcomeAddressPage } from './address/address.page';
import { WelcomePhonePage } from './phone/phone.page';
import { WelcomeTosPage } from './tos/tos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WelcomePageRoutingModule
  ],
  declarations: [
    WelcomePage,
    WelcomePhonePage,
    WelcomeTosPage,
    WelcomeAddressPage
  ]
})
export class WelcomePageModule { }
