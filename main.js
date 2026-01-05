import './style.css' ;
import products from "./API/products.json"; // can only be run in vite 
// the json file is assigned to product and its parsed to array now by Vite so its not an json file in
//product its an array converted by Vite
import { showProductContainer } from './homeProductCards';

showProductContainer(products);

