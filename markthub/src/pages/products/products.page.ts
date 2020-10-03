import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/models/models.interface';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  public storeId: number = -1;
  public products: Product[] = [];

  constructor(private route: ActivatedRoute, private router: Router, private dataService: DataService) {
    this.route.queryParams.subscribe(() => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.storeId = this.router.getCurrentNavigation().extras.state.storeId;
      }
    });
  }

  ngOnInit() {
    this.products = this.dataService.getPorducts(this.storeId);
  }

  public loadMoreProducts(event: any) {
    setTimeout(() => {
      // TODO: load more products based on offset
      // ....
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.products.length == 1000) {
        event.target.disabled = true;
      }
    }, 500);
  }

}
