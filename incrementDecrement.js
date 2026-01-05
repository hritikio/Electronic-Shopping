import { getCartProductsLS } from "./getCartProducts";
import { updateCartProductTotal } from "./updateCartProductTotal";

export const  incrementDecrement=(event,id,stock,price)=>{
    const currentCardElement=document.querySelector(`#card${id}`);
    const prodQuantity=currentCardElement.querySelector(".productQuantity");
    const productprice=currentCardElement.querySelector(".productPrice");

     
   let quantity=1;
   let LocalStorageprice=0;

   let localCartProducts=getCartProductsLS();
   let existingProduct=localCartProducts.find((curProd)=>curProd.id===id);

   if(existingProduct){
    quantity=Number(existingProduct.prodQuantity);
    LocalStorageprice=Number(existingProduct.price);

   }else{
    LocalStorageprice=price;
    price=price
   }

    if(event.target.className ==="cartIncrement"){
    if(quantity<stock){
    quantity++;
    }
  
 }

   if(event.target.className ==="cartDecrement"){
    quantity--;
   }

   if(quantity<=1){
    quantity=1;
   } 

   LocalStorageprice=Number((price*quantity).toFixed(2));
   //To fixed converts the number to string 

 let updatedCart={id,prodQuantity:quantity,price:LocalStorageprice};

        updatedCart=localCartProducts.map((curprod)=>{
           return curprod.id === id ? updatedCart : curprod; //update id so we can add this in local storage 
        });
        
        localStorage.setItem("cartProductsLS",JSON.stringify(updatedCart));

        prodQuantity.innerText=quantity;
        productprice.innerText=LocalStorageprice;

        updateCartProductTotal();



  };