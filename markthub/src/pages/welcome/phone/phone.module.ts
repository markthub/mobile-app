import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PhonePageRoutingModule } from './phone-routing.module';
import { WelcomePhonePage } from './phone.page';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild([{ path: '', component: WelcomePhonePage }]),
        PhonePageRoutingModule
    ],
    declarations: [WelcomePhonePage]
})
export class PhonePageModule { }