import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
    selector: 'page-splash-screen',
    templateUrl: 'splash-screen.html',
})
export class SplashScreenPage {

    constructor(public viewCtrl: ViewController, public splashScreen: SplashScreen) { }

    ionViewDidEnter() {
        this.splashScreen.hide();

        setTimeout(() => {
            this.viewCtrl.dismiss();
        }, 2000);
    }
}