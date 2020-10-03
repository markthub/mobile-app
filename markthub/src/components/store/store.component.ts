import { Component, Input, OnInit } from '@angular/core';
import { Store } from 'src/models/models.interface';

@Component({
  selector: 'store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
})
export class StoreComponent implements OnInit {

  @Input() store: Store;

  constructor() { }

  ngOnInit() { }

  public getProducts() { }

}
