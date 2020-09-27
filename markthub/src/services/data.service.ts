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
        { id: 1, name: 'Bella venezia', description: "", specialties: [{ name: 'Italian' }] },
        { id: 2, name: 'Mari e monti', description: "", specialties: [{ name: 'Italian' }] },
        { id: 3, name: 'Beijing', description: "", specialties: [{ name: 'Chinese' }] },
        { id: 4, name: 'Tokio', description: "", specialties: [{ name: 'Japanese' }] },
        { id: 5, name: 'Athens hello', description: "", specialties: [{ name: 'Greek' }] },
        { id: 6, name: 'Creetes is nice', description: "", specialties: [{ name: 'Greek' }] },
        { id: 7, name: 'Madrid hello', description: "", specialties: [{ name: 'Spanish' }] },
        { id: 8, name: 'Barcelona hello', description: "", specialties: [{ name: 'Spanish' }] },
        { id: 9, name: 'Only veggies', description: "", specialties: [{ name: 'Bion' }] },
        { id: 10, name: 'No cows', description: "", specialties: [{ name: 'Bio' }] },
        { id: 10, name: 'Kaas specialist', description: "", specialties: [{ name: 'Cheese' }] },
        { id: 10, name: 'Lekker kaas', description: "", specialties: [{ name: 'Cheese' }] }
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