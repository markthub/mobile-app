import { IonicModule } from '@ionic/angular';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HideOnscrollModule } from 'ionic-hide-onscroll';

import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { StoreComponent } from 'src/components/store/store.component';

@NgModule({
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: HomePage }]),
    HomePageRoutingModule,
    HideOnscrollModule
  ],
  declarations: [HomePage, StoreComponent],
})
export class HomePageModule { }
