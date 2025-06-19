// Program for handling search
import { databaseArray } from './products_database.js';
import { divContent } from './products_database.js';
let priceRange = document.querySelector('#priceRange');
let priceRangeOutput = document.querySelector('#priceRangeOutput');
let searchBar = document.querySelector('#searchBar'); // input text bar
let checkboxOptions = document.querySelector('.checkboxOptions');

// On typing in the search bar
searchBar.addEventListener('input', () => {
    // Clear divContent first
    divContent.innerHTML = "";

    for (let i = 0; i < databaseArray.length; i++) {
        if (databaseArray[i].product_name.toLowerCase().includes(searchBar.value.toLowerCase())) {
            divContent.innerHTML += `
        <div class="product">
            <div class="productFirstPart">
                <img src="${databaseArray[i].img}" alt="${databaseArray[i].alt}">
            </div>
            <div class="productSecondPart">
                <p id="product_Name_${i}">${databaseArray[i].product_name}</p>
                <p id="Description_${i}">${databaseArray[i].description}</p>
                <p>${databaseArray[i].price} <span id="currency">EGP</span></p>
                <span id="Brand_Iphone_${i}">Brand: ${databaseArray[i].brand}</span>
                <button>Add to cart</button>
            </div>
    
        </div>
    `
        }

    }
})

// On sliding the search Range price circle
priceRange.addEventListener('input', () => {
    // Show price
    priceRangeOutput.innerText = priceRange.value + " EGP";

    // Clear divContent first
    divContent.innerHTML = "";

    // Show products based on price
    for (let i = 0; i < databaseArray.length; i++) {
        if (databaseArray[i].price <= priceRange.value || databaseArray[i].price === '') {
            divContent.innerHTML += `
                <div class="product">
                    <div class="productFirstPart">
                        <img src="${databaseArray[i].img}" alt="${databaseArray[i].alt}">
                    </div>
                    <div class="productSecondPart">
                        <p id="product_Name_${i}">${databaseArray[i].product_name}</p>
                        <p id="Description_${i}">${databaseArray[i].description}</p>
                        <p>${databaseArray[i].price} <span id="currency">EGP</span></p>
                        <span id="Brand_Iphone_${i}">Brand: ${databaseArray[i].brand}</span>
                        <button>Add to cart</button>
                    </div>

                </div>
`
        }

    }

})

checkboxOptions.addEventListener('change', () => {

    divContent.innerHTML = "";  // clear main div first 

    for (let i = 0; i < databaseArray.length; i++) {
        if (checkboxOptions.value === '') {
            divContent.innerHTML += `
                <div class="product">
                    <div class="productFirstPart">
                        <img src="${databaseArray[i].img}" alt="${databaseArray[i].alt}">
                    </div>
                    <div class="productSecondPart">
                        <p id="product_Name_${i}">${databaseArray[i].product_name}</p>
                        <p id="Description_${i}">${databaseArray[i].description}</p>
                        <p>${databaseArray[i].price} <span id="currency">EGP</span></p>
                        <span id="Brand_Iphone_${i}">Brand: ${databaseArray[i].brand}</span>
                        <button>Add to cart</button>
                    </div>
            
                </div>
            `

        } else if (checkboxOptions.value === databaseArray[i].brand) {
            divContent.innerHTML += `
                <div class="product">
                    <div class="productFirstPart">
                        <img src="${databaseArray[i].img}" alt="${databaseArray[i].alt}">
                    </div>
                    <div class="productSecondPart">
                        <p id="product_Name_${i}">${databaseArray[i].product_name}</p>
                        <p id="Description_${i}">${databaseArray[i].description}</p>
                        <p>${databaseArray[i].price} <span id="currency">EGP</span></p>
                        <span id="Brand_Iphone_${i}">Brand: ${databaseArray[i].brand}</span>
                        <button>Add to cart</button>
                    </div>
            
                </div>
            `
        }

    }

})

