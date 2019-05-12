import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides, LoadingController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Geolocation } from '@ionic-native/geolocation';

import { RegexValidators } from '../validators/email.validator';
import { PhoneValidator } from '../validators/phone.validator';

import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js'

@Component({
  selector: 'page-create-account',
  templateUrl: 'create-account.html',
})
export class CreateAccountPage {
  @ViewChild('slides') slides: Slides;

  createAccountForm: FormGroup;
  Coordinates: any;

  confirmedAddress: boolean = true;  

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder,
    private geolocation: Geolocation, public loadingCtrl: LoadingController) {
    this.buildForm();
  }

  private loadMap() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.Coordinates = resp.coords;
      this.executeMap();      
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  private executeMap() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiZGF2aWRlYmVyZGluIiwiYSI6ImNqbmFwdmhiazAxdm4zcGtncHEzd3E4c2oifQ.2c7d8vCPd-Ped2RXjB49zg';
    var map = new mapboxgl.Map({
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [this.Coordinates.longitude, this.Coordinates.latitude],
      zoom: 14, // starting zoom
      container: 'map'
    });

    // disable all gestures
    map['scrollZoom'].disable();
    map['boxZoom'].disable();
    map['dragRotate'].disable();
    map['dragPan'].disable();
    map['keyboard'].disable();
    map['doubleClickZoom'].disable();
    map['touchZoomRotate'].disable();

    new mapboxgl.Marker()
      .setLngLat([this.Coordinates.longitude, this.Coordinates.latitude])
      .addTo(map);
  }

  private buildForm() {
    this.createAccountForm = this.formBuilder.group({
      name: [
        '', Validators.compose([
          Validators.required
        ])
      ],
      lastName: [
        '', Validators.compose([
          Validators.required
        ])
      ],
      address: [
        '', Validators.compose([
          Validators.required
        ])
      ],
      postcode: [
        '', Validators.compose([
          Validators.required
        ])
      ],
      city: [
        '', Validators.compose([
          Validators.required
        ])
      ],
      phoneNumber: [
        '', Validators.compose([
          Validators.required,
          PhoneValidator.validCountryPhone()
        ])
      ],
      email: [
        '', Validators.compose([
          Validators.pattern(RegexValidators.email),
          Validators.required
        ])
      ],
      password: [
        '', Validators.compose([
          Validators.pattern(RegexValidators.password),
          Validators.required
        ])
      ],
    });
  }

  public confirmAddress(decision) {
    if (decision) {
      // georeverse the coordinates
    } else {
      this.confirmedAddress = false;
    }
  }

  public prevPage() {
    this.slides.slidePrev();
  }

  public nextPage() {
    this.slides.slideNext();

    if (this.slides.getActiveIndex() == 1) {      
      this.loadMap();      
    }
  }
}
