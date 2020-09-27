
export interface Store {
    id: number;
    name: string;
    description: string;
    cousineTypes: CousineType[];
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
    description: string;
    categories: Category[];
}

export interface CousineType {
    name: string;
    description?: string;
}