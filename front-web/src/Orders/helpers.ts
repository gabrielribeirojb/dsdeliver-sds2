import { Product } from "./types";

export function chekcIsSelected(selectedProducts: Product[], product: Product){
    return selectedProducts.some(item => item.id === product.id);
}

export function formatPrice(price:number){
    const formartter = new Intl.NumberFormat('pt-BR', {
        style:'currency',
        currency: 'BRL',
        minimumFractionDigits: 2
    });

    return formartter.format(price);
}