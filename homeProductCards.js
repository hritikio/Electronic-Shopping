import { addToCart } from "./addToCart";
import { homeQuantityToggle } from "./homeQuantityToggle";

const ProductContainer=document.querySelector("#productContainer");
const producttemplate=document.querySelector("#product-template");



export const showProductContainer=(products )=>{
  if(!products){
    return false;
  }

  products.forEach(curprod => {
    const{id,name,category,brand,price,stock,image,description}=curprod;

    const productClone=document.importNode(producttemplate.content,true);
  /*Here ProductClone is single new copy of HTML template for a product card. Each time a For Loop runs , It creates a new
    ProductCone and fills it with approiate data from currprod */ 

    productClone.querySelector("#card-id").setAttribute("id",`card${id}`);
    // we are giving each card (one product )A different attribute to differentiate between them 

    productClone.querySelector(".category").textContent = category;
    productClone.querySelector(".product-image").src=image;
    productClone.querySelector(".product-image").alt=name;
    productClone.querySelector(".product-name").textContent=name;
    productClone.querySelector(".product-description").textContent=description;
    productClone.querySelector(".productPrice").textContent=`₹${price}`;
    productClone.querySelector(".productActualPrice").textContent=`₹${Math.round(price*3)}`;
    productClone.querySelector(".productStock").textContent=stock;


    productClone.querySelector(".stockElement").addEventListener('click',(event)=>{
      homeQuantityToggle(event,id,stock);
    //this function increases or descreases and updates the product quantity  
    })


    productClone.querySelector(".add-to-cart-button").addEventListener('click',(event)=>{
      addToCart(event,id,stock)
      //this function adds our products in local storage with id,quantity and price


    })



    

    ProductContainer.append(productClone);



  })

};