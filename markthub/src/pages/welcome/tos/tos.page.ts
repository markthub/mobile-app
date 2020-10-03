import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'welcome-tos',
  templateUrl: './tos.page.html',
  styleUrls: ['./tos.page.scss'],
})
export class WelcomeTosPage {

  constructor(private router: Router) { }

  public continue() {
    this.router.navigateByUrl('/welcome/address')
  }
}
