import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-filters-modal',
  templateUrl: 'filters-modal.html',
})
export class FiltersModalPage {

  categories: any[] = [];
  selectedFilters: any[] = [];
  filtersActive: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.fillCategories(navParams.get("categories"), navParams.get("filters"));
  }

  public addRemoveCategory(category: any) {
    let categoryName = category.name;
    if (this.selectedFilters == null || this.selectedFilters == undefined) {
      this.selectedFilters = [];
    }

    var found = this.selectedFilters.some(function (elem) {
      return elem === categoryName;
    });

    if (!found) {
      this.selectedFilters.push(categoryName);
      category.checked = true;
    } else {
      this.selectedFilters.splice(this.selectedFilters.indexOf(categoryName), 1);
      category.checked = false;
    }

    this.displayButtons();
  }

  private displayButtons() {
    if (this.selectedFilters != null && this.selectedFilters != undefined && this.selectedFilters.length > 0) {
      this.filtersActive = true;
    } else {
      this.filtersActive = false;
    }
  }

  public clearFilters() {
    this.selectedFilters = [];
    this.filtersActive = false;

    this.categories.forEach((category) => {
      category.checked = false;
    });
  }

  public applyFilters() {
    // return filters to product page
    this.dismissModal();
  }

  private dismissModal() {
    this.viewCtrl.dismiss(this.selectedFilters);
  }

  private fillCategories(tmpCategories, filters) {
    if (filters != null && filters != undefined && filters.length > 0) {
      filters.forEach(ctg => {
        tmpCategories.forEach(elem => {
          if (elem.name == ctg) {
            elem.checked = true;
          }
        })
      });
    } else {
      filters = [];
    }

    this.categories = tmpCategories;
    this.selectedFilters = filters;

    this.displayButtons();
  }
}
