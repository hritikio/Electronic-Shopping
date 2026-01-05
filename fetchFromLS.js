import { getCartProductsLS } from "./getCartProducts"

export const fetchFromLS=(id,price)=>{
    let cartProducts = getCartProductsLS();

    let existingProduct=cartProducts.find((curProd)=> curProd.id===id);


    let quantity=1;
    if(existingProduct){
        quantity=(existingProduct.prodQuantity);
        price=existingProduct.price;

    }

    return {quantity,price};
}