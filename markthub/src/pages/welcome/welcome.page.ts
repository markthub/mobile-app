import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { WelcomePhoneModal } from 'src/modals/welcome-phone/welcome-phone.modal';
import { WelcomeTosModal } from 'src/modals/welcome-tos/welcome-tos.modal';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() { }

  async skip() {
    // open modal for ToS
    const modal = await this.modalController.create({
      component: WelcomeTosModal
    });
    return await modal.present();
  }

  async continue() {
    // ask for phone number in modal
    const modal = await this.modalController.create({
      component: WelcomePhoneModal
    });
    return await modal.present();
  }

}
