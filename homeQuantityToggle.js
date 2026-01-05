/* 
    <div class="productQuantityElement">
        <p class="productProperty">Quantity(Pieces)</p>
            <div class="stockElement">
              <button class="cartIncrement">+</button>
              <p class="productQuantity">1</p>
              <button class="cartDecrement">-</button>
            </div>
    </div>
 */

    


export const homeQuantityToggle=(event,id,stock)=>{
    const currentCardElement=document.querySelector(`#card${id}`);
   // console.log(currentCardElement)

   const productQuantityElement=currentCardElement.querySelector(".productQuantityElement");

   let productQuantity=productQuantityElement.querySelector(".productQuantity");
   
   let quantity=parseInt(productQuantity.getAttribute("stockQuantity"))||1;
   //getAttribute() always returns a string, not a number.So convert it to Int 
   // we will add stockQuantity attribute to <p class="productQuantity">1</p> for kepping records how previus purchase

   if(event.target.className ==="cartIncrement"){
    if(quantity<stock){
    quantity++;
    }
  
 }

   if(event.target.className ==="cartDecrement"){
    quantity--
   }

   if(quantity<=1){
    quantity=1;
   }

   productQuantity.innerHTML=quantity;
   //console.log(quantity);
   productQuantity.setAttribute("stockQuantity",quantity);
   return quantity;







}
