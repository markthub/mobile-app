import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { }

  public skip() {
    // ask for tos acceptance in page
    this.router.navigateByUrl("/welcome/tos");
  }

  public continue() {
    // ask for phone number in page
    this.router.navigateByUrl("/welcome/phone");
  }
}
