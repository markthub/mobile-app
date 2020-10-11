
export interface Store {
    id: number;
    name: string;
    address: string;
    zipcode: string;
    city: string;
    description: string;
    specialties: Specialty[];
    avgRating?: number;
    numOfRatings?: number;
    picture?: string;
}

export enum Category {
    FRUITS,
    VEGETABLES,
    TUBER,
    PASTA
}

export interface Product {
    id: number;
    storeId: number;
    name: string;
    price: number;
    description?: string;
    picture?: string;
    categories: Category[];
}

export interface Specialty {
    name: string;
    description?: string;
}