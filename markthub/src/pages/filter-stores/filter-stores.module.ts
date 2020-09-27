import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilterStoresPageRoutingModule } from './filter-stores-routing.module';

import { FilterStoresPage } from './filter-stores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilterStoresPageRoutingModule
  ],
  declarations: [FilterStoresPage]
})
export class FilterStoresPageModule {}
