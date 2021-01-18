export type Order = {
    id: number;
    status: string;
    address: string;
    latitude: number;
    longitude: number;
    moment: string;
    total: number;
    products: Product[];
}

export type Product = {
    id: number;
    name: string,
    price: number;
    description: string;
    imageUri: string;
}