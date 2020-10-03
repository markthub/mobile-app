import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'tab-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  public currentLocationAddress: string = "Gustav Mahlerlaan";

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // check parameter from routing
    this.route.queryParams.subscribe(() => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.currentLocationAddress = this.router.getCurrentNavigation().extras.state.currentLocationAddress;
        console.log(this.currentLocationAddress);
      }
    });
  }

  openAddressModal() {
    console.log("opening address modal...");
  }

}
