import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilterStoresPage } from './filter-stores.page';

const routes: Routes = [
  {
    path: '',
    component: FilterStoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilterStoresPageRoutingModule { }
