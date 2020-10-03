import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeAddressPage } from './address.page';

const routes: Routes = [
    {
        path: '',
        component: WelcomeAddressPage,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AddressPageRoutingModule { }