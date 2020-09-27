import { Component, OnInit } from '@angular/core';
import { Store } from 'src/models/models.interface';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.page.html',
  styleUrls: ['./stores.page.scss'],
})
export class StoresPage implements OnInit {

  public stores: Store[] = [];

  constructor() {
  }

  ngOnInit() {

  }

}
