// this will open a new page when clicked on the cart icon where we 
// can view all the products that we buy and purchase them

import products from "./API/products.json";
import { fetchFromLS } from "./fetchFromLS";
//JSON strings are converted to array of objects by VITE 

import { getCartProductsLS } from "./getCartProducts";
import { incrementDecrement } from "./incrementDecrement";
import { removeProductFromCart } from "./removeProductFromCart";
import { updateCartProductTotal } from "./updateCartProductTotal";

let cartProducts=getCartProductsLS();
//get the Products we selected from Local Storage

let filterProducts=products.filter((curProd)=>{
return  cartProducts.some((currEle)=>currEle.id===curProd.id);
});



console.log(filterProducts);

let productcartcontainer=document.querySelector("#productcartcontainer");//here we will add elemnets 
let productCarttemplate=document.querySelector("#productCarttemplate");


const showCartProducts=()=>{
    filterProducts.forEach((curProd)=>{
        const{id,name,category,brand,price,stock,description,image}=curProd;
        let productClone=document.importNode(productCarttemplate.content,true);

        const lsData=fetchFromLS(id,price);

        productClone.querySelector("#cardId").setAttribute("id", `card${id}`);  
        productClone.querySelector(".category").textContent = category;
        productClone.querySelector(".product-image").src=image;
        productClone.querySelector(".product-image").alt=name;
        productClone.querySelector(".product-name").textContent=name;
        productClone.querySelector(".productPrice").textContent=`₹${lsData.price}`;
       
        productClone.querySelector(".productQuantity").textContent=lsData.quantity;


        productClone.querySelector(".stockElement").addEventListener('click',(event)=>{
            return incrementDecrement(event,id,stock,price);

        });

        productClone.querySelector(".remove-to-cart-button").addEventListener('click',(event)=>{
            return removeProductFromCart(event, id, stock, price);
        })
        

         
        productcartcontainer.appendChild(productClone);
 


    });
}

showCartProducts();

updateCartProductTotal();

