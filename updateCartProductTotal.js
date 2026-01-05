import { getCartProductsLS } from "./getCartProducts";

export const updateCartProductTotal=()=>{
    let localCartProducts=getCartProductsLS();
    let initialValue=0
    let totalSum= localCartProducts.reduce((accumulator,curEle)=>{
        let productPrice=parseInt(curEle.price) ||0;
        return  accumulator+productPrice;
    },initialValue);
  //  console.log(totalSum);

    let productsSubTotal=document.querySelector(".productsSubTotal");
    let totalPrice=document.querySelector(".totalPrice");

    productsSubTotal.innerText=`₹${totalSum}`;
    totalPrice.textContent=`₹${totalSum+50}`
}
