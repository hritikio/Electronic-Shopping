import { getCartProductsLS } from "./getCartProducts";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

getCartProductsLS();

export const addToCart=(event,id,stock)=>{

    let arrLocalStorage=getCartProductsLS();


    const currentproductElement=document.querySelector(`#card${id}`);
    
    let prodQuantity=parseInt(currentproductElement.querySelector(".productQuantity").innerHTML);
    //console.log(prodQuantity)
    //if we use document.querySelector(".productQuantity").innerHTML, then it will always select 
    //first elemnt which have class productquantity that is Laptop


    let price=currentproductElement.querySelector(".productPrice").innerText;
    //console.log(price)
    price=price.replace("₹","");


    //we are checking if we add the same product twice if yes then just update the quantity 
    let existingProduct=arrLocalStorage.find((curProd)=>curProd.id === id)

    console.log(existingProduct);
    


    //if we are adding same product twice with more number quantity 
    if(existingProduct && prodQuantity>1){
        prodQuantity=Number(existingProduct.prodQuantity)+Number(prodQuantity);
        price =Number(price*prodQuantity); 
        let updatedCart={id,prodQuantity,price}; //object

        updatedCart=arrLocalStorage.map((curprod)=>{
           return curprod.id === id ? updatedCart : curprod; //update id so we can add this in local storage 
        });
        console.log(updatedCart)
        localStorage.setItem("cartProductsLS",JSON.stringify(updatedCart));
        //updatedCart1 is the new JSON 
        showToast("add",id);
    }

    if(existingProduct){
        return false
    }



    price=Number(price*prodQuantity);// covert price into numbers is its a string  
    console.log(parseFloat(price))

    let updateCart={id,prodQuantity,price};//id: 1, prodQuantity: 2, price: 500 values are added in value pair and these id,price are keys 
    //these are objects 
    arrLocalStorage.push(updateCart);//orignally arrLocalStorage Is Empty [] 
    localStorage.setItem("cartProductsLS",JSON.stringify(arrLocalStorage));
    //JSON.stringify()converts js object into JSON strings 



    updateCartValue(arrLocalStorage);// the cart button in navbar , updating it value to length of arrLocalStorage


    showToast("add", id);



    

    



};