import { getCartProductsLS } from "./getCartProducts";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

export const removeProductFromCart=(event, id, stock, price)=>{
    let cartProducts=getCartProductsLS()
    cartProducts=cartProducts.filter((curProd)=>{
        return curProd.id !==id;
    });
    localStorage.setItem("cartProductsLS",JSON.stringify(cartProducts));

    let removeDiv=document.getElementById(`card${id}`);
    if(removeDiv){
        removeDiv.remove();
        showToast("delete", id);
    }

    updateCartValue(cartProducts);
}