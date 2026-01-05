const cartvalue=document.querySelector("#cart-value");

export const updateCartValue=(cartProducts)=>{
    // cart product is arrLocalStorage at time of function calling its and array 
    return (cartvalue.innerHTML=`<i class="fa-solid fa-cart-shopping">${cartProducts.length } </i>`)

}