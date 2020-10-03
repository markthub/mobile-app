import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeTosPage } from './tos.page';

const routes: Routes = [
    {
        path: '',
        component: WelcomeTosPage,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TosPageRoutingModule { }