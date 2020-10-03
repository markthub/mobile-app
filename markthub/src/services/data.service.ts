import { Injectable } from "@angular/core";
import { Specialty, Store } from 'src/models/models.interface';

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
        { id: 1, name: 'Bella venezia', avgRating: 4.5, numOfRatings: 4, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", specialties: [{ name: 'Italian' }] },
        { id: 2, name: 'Mari e monti', avgRating: 4.5, numOfRatings: 4, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", specialties: [{ name: 'Italian' }] },
        { id: 3, name: 'Beijing', avgRating: 4.5, numOfRatings: 4, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", specialties: [{ name: 'Chinese' }] },
        { id: 4, name: 'Tokio', avgRating: 4.5, numOfRatings: 4, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", specialties: [{ name: 'Japanese' }] },
        { id: 5, name: 'Athens hello', avgRating: 4.5, numOfRatings: 4, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", specialties: [{ name: 'Greek' }] },
        { id: 6, name: 'Creetes is nice', avgRating: 4.5, numOfRatings: 4, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", specialties: [{ name: 'Greek' }] },
        { id: 7, name: 'Madrid hello', avgRating: 4.5, numOfRatings: 4, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", specialties: [{ name: 'Spanish' }] },
        { id: 8, name: 'Barcelona hello', avgRating: 4.5, numOfRatings: 4, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", specialties: [{ name: 'Spanish' }] },
        { id: 9, name: 'Only veggies', avgRating: 4.5, numOfRatings: 4, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", specialties: [{ name: 'Bion' }] },
        { id: 10, name: 'No cows', avgRating: 4.5, numOfRatings: 4, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", specialties: [{ name: 'Bio' }] },
        { id: 10, name: 'Kaas specialist', avgRating: 4.5, numOfRatings: 4, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", specialties: [{ name: 'Cheese' }] },
        { id: 10, name: 'Lekker kaas', avgRating: 4.5, numOfRatings: 4, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", specialties: [{ name: 'Cheese' }] }
    ];

    constructor() { }

    public getStores(): Store[] {
        return this.stores;
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