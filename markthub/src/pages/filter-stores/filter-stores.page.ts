import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CousineType, Store } from 'src/models/models.interface';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-filter-stores',
  templateUrl: './filter-stores.page.html',
  styleUrls: ['./filter-stores.page.scss'],
})
export class FilterStoresPage implements OnInit {

  public stores: Store[] = [];
  private cousineType: CousineType = null;

  constructor(private route: ActivatedRoute, private router: Router, public dataService: DataService) {
  }

  ngOnInit() {
    // check parameter from routing
    this.route.queryParams.subscribe(() => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.cousineType = this.router.getCurrentNavigation().extras.state.cousineType;
      }
    });
    // filter by cousine type
    this.stores = this.dataService.filterStoreByCousineType(this.cousineType);
  }

  public viewProducts(store: Store) {
    console.log("get products from " + store.name);
  }

}
