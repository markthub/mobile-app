import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeAddressPage } from './address/address.page';
import { WelcomePage } from './welcome.page';

const routes: Routes = [
  {
    path: '',
    component: WelcomePage
  },
  {
    path: 'address',
    loadChildren: () => import('./address/address-routing.module').then(m => m.AddressPageRoutingModule)
  },
  {
    path: 'tos',
    loadChildren: () => import('./tos/tos-routing.module').then(m => m.TosPageRoutingModule)
  },
  {
    path: 'phone',
    loadChildren: () => import('./phone/phone-routing.module').then(m => m.PhonePageRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WelcomePageRoutingModule { }
