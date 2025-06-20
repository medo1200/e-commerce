import { databaseArrayPC } from './products_database_pc.js';
import { divContent } from './products_database_pc.js';

const searchBar = document.querySelector('#searchBar'); // search bar field
const priceRange = document.querySelector('#priceRange'); // price range slider
const priceRangeOutput = document.querySelector('#priceRangeOutput'); // <p> place
const checkboxOptionsPC = document.querySelector('#checkboxOptionsPC'); 


searchBar.addEventListener('input', () => {
    divContent.innerHTML = ''; // clean div container

    for (let i = 0; i < databaseArrayPC.length; i++) {
        if (databaseArrayPC[i].product_name.toLowerCase().includes(searchBar.value.toLowerCase())) {
            divContent.innerHTML +=
                `
            <div class="product">
                <div class="productFirstPart">
                    <img src="${databaseArrayPC[i].img}" alt="${databaseArrayPC[i].alt}">
                </div>
                <div class="productSecondPart">
                    <p id="product_Name_5">${databaseArrayPC[i].product_name}</p>
                    <p id="Description_5">${databaseArrayPC[i].description}</p>
                    <p>${databaseArrayPC[i].price} <span id="currency">EGP</span></p>
                    <span id="Brand_Nokia_5">Brand: ${databaseArrayPC[i].brand}</span>
                    <button>Add to cart</button>
                </div>
            
            </div>
            `
        }

    }
})

priceRange.addEventListener('input', () => {
    // output change under slider
    priceRangeOutput.innerHTML = priceRange.value + " EGP";

    // clean div container
    divContent.innerHTML = '';

    // loop for max price products
    for (let i = 0; i < databaseArrayPC.length; i++) {
        if (databaseArrayPC[i].price < priceRange.value) {
            divContent.innerHTML +=
            `
            <div class="product">
                <div class="productFirstPart">
                    <img src="${databaseArrayPC[i].img}" alt="${databaseArrayPC[i].alt}">
                </div>
                <div class="productSecondPart">
                    <p id="product_Name_5">${databaseArrayPC[i].product_name}</p>
                    <p id="Description_5">${databaseArrayPC[i].description}</p>
                    <p>${databaseArrayPC[i].price} <span id="currency">EGP</span></p>
                    <span id="Brand_Nokia_5">Brand: ${databaseArrayPC[i].brand}</span>
                    <button>Add to cart</button>
                </div>
            
            </div>
            `
        }
        
    }
})

checkboxOptionsPC.addEventListener('change', () => {
    //clear div contents
    divContent.innerHTML = '';

    for (let i=0; i< databaseArrayPC.length; i++){
        if (databaseArrayPC[i].brand === checkboxOptionsPC.value || checkboxOptionsPC.value === '') {
            divContent.innerHTML += 
                        `
            <div class="product">
                <div class="productFirstPart">
                    <img src="${databaseArrayPC[i].img}" alt="${databaseArrayPC[i].alt}">
                </div>
                <div class="productSecondPart">
                    <p id="product_Name_5">${databaseArrayPC[i].product_name}</p>
                    <p id="Description_5">${databaseArrayPC[i].description}</p>
                    <p>${databaseArrayPC[i].price} <span id="currency">EGP</span></p>
                    <span id="Brand_Nokia_5">Brand: ${databaseArrayPC[i].brand}</span>
                    <button>Add to cart</button>
                </div>
            
            </div>
            `
        }
    }
})