import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from 'src/models/models.interface';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'tab-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  public stores: Store[] = [];
  public currentLocationAddress: string = "Gustav Mahlerlaan";

  constructor(private route: ActivatedRoute, private router: Router, private dataService: DataService) { }

  ngOnInit() {
    // check parameter from routing
    this.route.queryParams.subscribe(() => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.currentLocationAddress = this.router.getCurrentNavigation().extras.state.currentLocationAddress;
      }
    });

    // load stores near you
    this.stores = this.dataService.getStores();
  }

  public loadMoreStores(event: any) {
    setTimeout(() => {
      // TODO: load more stores based on offset
      // ....
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.stores.length == 1000) {
        event.target.disabled = true;
      }
    }, 500);
  }

  public openAddressModal() {
    console.log("opening address modal...");
  }

  public openFiltersModal() {
    console.log("opening address modal...");
  }

}
