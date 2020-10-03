import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-welcome-address',
  templateUrl: './address.page.html',
  styleUrls: ['./address.page.scss'],
})
export class WelcomeAddressPage implements OnInit {

  public foundCurrentLocation: boolean = false;
  public currentLocationAddress: string = "";
  public automaticLocationAddress: string = "";

  constructor(private geolocation: Geolocation, public router: Router) { }

  ngOnInit() {
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log(resp.coords.latitude);
      console.log(resp.coords.longitude);

      // TODO: transform the coordinates in an Address!
      // For now it's fake

      this.foundCurrentLocation = true;
      this.automaticLocationAddress = "Thurston Rd. 121, Rochester, NY"
    }).catch((error) => {
      console.log('Error getting location', error);
      this.foundCurrentLocation = true;
    });
  }

  public setCurrentAddress(value: string) {
    this.currentLocationAddress = value;
  }

  public searchAddress(value: string) {
    this.currentLocationAddress = value;
  }

  public useThisLocation() {
    this.currentLocationAddress = this.automaticLocationAddress;
  }

  public complete() {
    this.router.navigate(["/base/home"], {
      state: {
        currentLocationAddress: this.currentLocationAddress
      }
    })
  }
}
