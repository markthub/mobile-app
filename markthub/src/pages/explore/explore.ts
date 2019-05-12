import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { FoodStylesPage } from '../food-styles/food-styles';
import { RecipePage } from '../recipe/recipe';

@Component({
  selector: 'page-explore',
  templateUrl: 'explore.html'
})
export class ExplorePage {

  static get parameters() {
    return [[NavController]];
  }

  foodStyles: any[];
  recipes: any[];
  topProducts: any[];

  constructor(public navCtrl: NavController) {
    this.foodStyles = this.fillfoodStyles();
    this.recipes = this.fillRecipes();
    this.topProducts = this.fillTopProducts();
  }

  public displayContent(type, obj) {
    switch (type) {
      case "foodStyles":
        this.navCtrl.push(FoodStylesPage, { "style": obj });
        break;
      case "recipes":
        this.navCtrl.push(RecipePage, { "recipe": obj });
        break;
      case "topProducts":
      // this.navCtrl.push(Page, { "recipe": obj });
      default:
        return;
    }
  }

  private fillfoodStyles() {
    return [
      { "id": 1, "name": "Italian", "url": "https://www.dineout.co.in/blog/wp-content/uploads/2017/09/Untitled-design-5-1030x538.jpg" },
      { "id": 2, "name": "Organic", "url": "https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/5/8/3/6/7246385-1-eng-GB/Innovation-health-home-delivery-Drivers-for-organic-food-growth-amongst-consumers_wrbm_large.jpg" },
      { "id": 3, "name": "Munchies", "url": "https://assets3.thrillist.com/v1/image/2735750/size/gn-gift_guide_variable_c_2x.jpg" },
      { "id": 4, "name": "Vegan", "url": "https://d3atagt0rnqk7k.cloudfront.net/wp-content/uploads/2018/04/05163452/whole-30-1280x800.jpg" },
      { "id": 5, "name": "Indian", "url": "https://img.grouponcdn.com/iam/qPAkCZNoRNiFwuVufvdK/oa-5000x3000/v1/c700x420.jpg" },
      { "id": 6, "name": "Japanaese", "url": "https://www.kobejones.com.au/wp-content/uploads/2017/12/Kobe-Jones-Art-of-Japanese-Food-Decoration.jpg" }
    ];
  }

  private fillRecipes() {
    return [
      { "id": 1, "name": "NY Cheesecake", "url": "https://bakeplaysmile.com/wp-content/uploads/2014/12/Bake-Play-Smile-baked-cheesecake-4.jpg" },
      { "id": 2, "name": "Italian Lasagne", "url": "https://realfood.tesco.com/media/images/LASAGNE-2-CLEAN-1400x919-mini-84433cf0-e601-4352-be89-de12013e52d0-0-1400x919.jpg" },
      { "id": 3, "name": "Indian Butter Chicken", "url": "https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/53/2018/01/Butter-chicken-recipe-320x211.jpg" },
    ];
  }

  private fillTopProducts() {
    return [
      { "id": 1, "name": "Coffee", "url": "https://bakeplaysmile.com/wp-content/uploads/2014/12/Bake-Play-Smile-baked-cheesecake-4.jpg" },
      { "id": 2, "name": "Spaghetti", "url": "https://realfood.tesco.com/media/images/LASAGNE-2-CLEAN-1400x919-mini-84433cf0-e601-4352-be89-de12013e52d0-0-1400x919.jpg" },
      { "id": 3, "name": "Banana", "url": "https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/53/2018/01/Butter-chicken-recipe-320x211.jpg" },
    ];
  }
}
