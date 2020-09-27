import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CousineType } from 'src/models/models.interface';
import { DataService } from 'src/services/data.service';
import { debounceTime } from "rxjs/operators";
import { Router } from '@angular/router';

@Component({
  selector: 'tab-search',
  templateUrl: 'search.page.html',
  styleUrls: ['search.page.scss']
})
export class SearchPage implements OnInit {

  public searchControl: FormControl;
  public cuisineTypes: CousineType[] = [];

  constructor(private dataService: DataService, private router: Router,) {
    this.searchControl = new FormControl();
  }

  ngOnInit(): void {
    this.cuisineTypes = this.dataService.getCousineTypes();
    this.searchControl.valueChanges
      .pipe(debounceTime(200))
      .subscribe((search: string) => {
        this.searchCousineType(search);
      });
  }

  private searchCousineType(searchTerm: string) {
    this.cuisineTypes = this.dataService.filterCousineTypeByName(searchTerm);
  }

  filterByCousineType(ct: CousineType) {
    this.router.navigate(['/search/filter-stores'], {
      state: {
        cousineType: ct
      }
    })
  }
}
