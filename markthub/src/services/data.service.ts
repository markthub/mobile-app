import { Injectable } from "@angular/core";
import { Product, Specialty, Store, Category } from 'src/models/models.interface';

@Injectable({
    providedIn: "root"
})
export class DataService {

    private cuisineTypes: Specialty[] = [
        { name: 'Italian' },
        { name: 'Cheese' },
        { name: 'Chinese' },
        { name: 'Japanaese' },
        { name: 'Indian' },
        { name: 'Greek' },
        { name: 'Spanish' },
        { name: 'Bio' },
        { name: 'Thai' },
        { name: 'Mediterranean' }
    ];

    private stores: Store[] = [
        { id: 1, name: 'Bella venezia', address: "Gustav Mahlerlaan 869", zipcode: "1082MK", city: "Amsterdam", avgRating: 4.5, numOfRatings: 4, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", specialties: [{ name: 'Italian' }] },
        { id: 2, name: 'Mari e monti', address: "Gustav Mahlerlaan 869", zipcode: "1082MK", city: "Amsterdam", avgRating: 4.5, numOfRatings: 4, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", specialties: [{ name: 'Italian' }] },
        { id: 3, name: 'Beijing', address: "Gustav Mahlerlaan 869", zipcode: "1082MK", city: "Amsterdam", avgRating: 4.5, numOfRatings: 4, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", specialties: [{ name: 'Chinese' }] },
        { id: 4, name: 'Tokio', address: "Gustav Mahlerlaan 869", zipcode: "1082MK", city: "Amsterdam", avgRating: 4.5, numOfRatings: 4, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", specialties: [{ name: 'Japanese' }] },
        { id: 5, name: 'Athens hello', address: "Gustav Mahlerlaan 869", zipcode: "1082MK", city: "Amsterdam", avgRating: 4.5, numOfRatings: 4, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", specialties: [{ name: 'Greek' }] },
        { id: 6, name: 'Creetes is nice', address: "Gustav Mahlerlaan 869", zipcode: "1082MK", city: "Amsterdam", avgRating: 4.5, numOfRatings: 4, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", specialties: [{ name: 'Greek' }] },
        { id: 7, name: 'Madrid hello', address: "Gustav Mahlerlaan 869", zipcode: "1082MK", city: "Amsterdam", avgRating: 4.5, numOfRatings: 4, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", specialties: [{ name: 'Spanish' }] },
        { id: 8, name: 'Barcelona hello', address: "Gustav Mahlerlaan 869", zipcode: "1082MK", city: "Amsterdam", avgRating: 4.5, numOfRatings: 4, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", specialties: [{ name: 'Spanish' }] },
        { id: 9, name: 'Only veggies', address: "Gustav Mahlerlaan 869", zipcode: "1082MK", city: "Amsterdam", avgRating: 4.5, numOfRatings: 4, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", specialties: [{ name: 'Bion' }] },
        { id: 10, name: 'No cows', address: "Gustav Mahlerlaan 869", zipcode: "1082MK", city: "Amsterdam", avgRating: 4.5, numOfRatings: 4, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", specialties: [{ name: 'Bio' }] },
        { id: 10, name: 'Kaas specialist', address: "Gustav Mahlerlaan 869", zipcode: "1082MK", city: "Amsterdam", avgRating: 4.5, numOfRatings: 4, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", specialties: [{ name: 'Cheese' }] },
        { id: 10, name: 'Lekker kaas', address: "Gustav Mahlerlaan 869", zipcode: "1082MK", city: "Amsterdam", avgRating: 4.5, numOfRatings: 4, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", specialties: [{ name: 'Cheese' }] }
    ];

    private products: Product[] = [
        { id: 1, storeId: 1, name: "spaghetti", price: 3.2, description: "the most delicious thing you've ever had", picture: "../assets/images/spaghetti.jpg", categories: [Category.VEGETABLES, Category.FRUITS] },
        { id: 2, storeId: 1, name: "tomatoes", price: 3.2, description: "the most delicious thing you've ever had", picture: "../assets/images/spaghetti.jpg", categories: [Category.VEGETABLES, Category.FRUITS] },
        { id: 3, storeId: 1, name: "parmisan", price: 3.2, description: "the most delicious thing you've ever had", picture: "../assets/images/spaghetti.jpg", categories: [Category.VEGETABLES, Category.FRUITS] },
        { id: 4, storeId: 1, name: "salt", price: 3.2, description: "the most delicious thing you've ever had", picture: "../assets/images/spaghetti.jpg", categories: [Category.VEGETABLES, Category.FRUITS] },
        { id: 5, storeId: 1, name: "pepper", price: 3.2, description: "the most delicious thing you've ever had", picture: "../assets/images/spaghetti.jpg", categories: [Category.VEGETABLES, Category.FRUITS] },
        { id: 6, storeId: 1, name: "water", price: 3.2, description: "the most delicious thing you've ever had", picture: "../assets/images/spaghetti.jpg", categories: [Category.VEGETABLES, Category.FRUITS] },
        { id: 7, storeId: 1, name: "beer", price: 3.2, description: "the most delicious thing you've ever had", picture: "../assets/images/spaghetti.jpg", categories: [Category.VEGETABLES, Category.FRUITS] },
    ];

    constructor() { }

    public getStores(): Store[] {
        return this.stores;
    }

    public getPorducts(storeId: number): Product[] {
        return this.products;
    }

    public getCousineTypes(): Specialty[] {
        return this.cuisineTypes;
    }

    public filterStoreBySpecialty(specialty: Specialty) {
        return this.stores.filter(store => {
            return store.specialties.some((elem) => elem.name == specialty.name);
        });
    }

    public filterCousineTypeByName(name: string): Specialty[] {
        return this.cuisineTypes.filter(ct => {
            return ct.name.toLowerCase().indexOf(name.toLowerCase()) > -1;
        });
    }
}