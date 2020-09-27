import { Injectable } from "@angular/core";
import { CousineType, Store } from 'src/models/models.interface';

@Injectable({
    providedIn: "root"
})
export class DataService {

    private cuisineTypes: CousineType[] = [
        { name: 'Italian' },
        { name: 'Dutch' },
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
        { id: 1, name: 'Bella venezia', description: "", cousineTypes: [{ name: 'Italian' }] },
        { id: 2, name: 'Mari e monti', description: "", cousineTypes: [{ name: 'Italian' }] },
        { id: 3, name: 'Beijing', description: "", cousineTypes: [{ name: 'Chinese' }] },
        { id: 4, name: 'Tokio', description: "", cousineTypes: [{ name: 'Japanese' }] },
        { id: 5, name: 'Athens hello', description: "", cousineTypes: [{ name: 'Greek' }] },
        { id: 6, name: 'Creetes is nice', description: "", cousineTypes: [{ name: 'Greek' }] },
        { id: 7, name: 'Madrid hello', description: "", cousineTypes: [{ name: 'Spanish' }] },
        { id: 8, name: 'Barcelona hello', description: "", cousineTypes: [{ name: 'Spanish' }] },
        { id: 9, name: 'Only veggies', description: "", cousineTypes: [{ name: 'Bion' }] },
        { id: 10, name: 'No cows', description: "", cousineTypes: [{ name: 'Bio' }] }
    ];

    constructor() { }

    public getStores(): Store[] {
        return this.stores;
    }

    public getCousineTypes(): CousineType[] {
        return this.cuisineTypes;
    }

    public filterStoreByCousineType(ct: CousineType) {
        return this.stores.filter(store => {
            return store.cousineTypes.some((elem) => elem.name == ct.name);
        });

    }

    public filterCousineTypeByName(name: string): CousineType[] {
        return this.cuisineTypes.filter(ct => {
            return ct.name.toLowerCase().indexOf(name.toLowerCase()) > -1;
        });
    }
}