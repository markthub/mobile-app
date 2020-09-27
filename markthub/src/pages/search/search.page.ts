import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Specialty } from 'src/models/models.interface';
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
  public specialties: Specialty[] = [];

  constructor(private dataService: DataService, private router: Router,) {
    this.searchControl = new FormControl();
  }

  ngOnInit(): void {
    this.specialties = this.dataService.getCousineTypes();
    this.searchControl.valueChanges
      .pipe(debounceTime(200))
      .subscribe((search: string) => {
        this.searchCousineType(search);
      });
  }

  private searchCousineType(searchTerm: string) {
    this.specialties = this.dataService.filterCousineTypeByName(searchTerm);
  }

  filterBySpecialty(s: Specialty) {
    this.router.navigate(['/base/search/filter-stores'], {
      state: {
        specialty: s
      }
    })
  }
}
