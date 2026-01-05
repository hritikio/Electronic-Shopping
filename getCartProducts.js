import { updateCartValue } from "./updateCartValue";

export const getCartProductsLS=()=>{
    let cartProducts = localStorage.getItem("cartProductsLS");
    if(!cartProducts){
        return [] ;

    }
    cartProducts=JSON.parse(cartProducts)//convert JSON string back to JSON Object 

    updateCartValue(cartProducts);
    
    return cartProducts;

};