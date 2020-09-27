import { Component } from '@angular/core';

@Component({
  selector: 'tab-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  public currentAddress: string = "Gustav Mahlerlaan";

  constructor() { }

  openAddressModal() {
    console.log("opening address modal...");
  }

}
