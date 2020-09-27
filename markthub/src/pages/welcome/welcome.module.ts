import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WelcomePageRoutingModule } from './welcome-routing.module';

import { WelcomePage } from './welcome.page';
import { WelcomePhoneModal } from 'src/modals/welcome-phone/welcome-phone.modal';
import { WelcomeTosModal } from 'src/modals/welcome-tos/welcome-tos.modal';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WelcomePageRoutingModule
  ],
  declarations: [
    WelcomePage,
    WelcomePhoneModal,
    WelcomeTosModal
  ]
})
export class WelcomePageModule { }
