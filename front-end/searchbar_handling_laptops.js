import { divContentLaptops } from "./products_database_laptops.js";
import { databaseArrayLaptops } from "./products_database_laptops.js";

const searchBar = document.querySelector('main div.sidebar div.searchFeature #searchBar'); // searchBar input
const priceRange = document.querySelector('#priceRange'); // searchRange slider
const priceRangeOutput = document.querySelector('#priceRangeOutput'); // paragraph place
const checkboxOptions = document.querySelector('#checkboxOptions'); // <select> element


searchBar.addEventListener('keyup', () => {
    divContentLaptops.innerHTML = ""; // Clean divContentLaptops

    for (let i = 0; i < databaseArrayLaptops.length; i++) {
        if (databaseArrayLaptops[i].product_name.toLowerCase().includes(searchBar.value.toLowerCase())) {
            divContentLaptops.innerHTML += `
                        <div class="product">
                                    <div class="productFirstPart">
                                        <img src="${databaseArrayLaptops[i].img}" alt="${databaseArrayLaptops[i].alt}">
                                    </div>
                                    <div class="productSecondPart">
                                        <p id="product_Name_5">${databaseArrayLaptops[i].product_name}</p>
                                        <p id="Description_5">${databaseArrayLaptops[i].description}</p>
                                        <p>${databaseArrayLaptops[i].price} <span id="currency">EGP</span></p>
                                        <span id="Brand_Nokia_5">Brand: ${databaseArrayLaptops[i].brand}</span>
                                        <button>Add to cart</button>
                                    </div>

                        </div>
                    `
        }
    }
})

priceRange.addEventListener('input' , ()=> {
    priceRangeOutput.innerHTML = priceRange.value + " EGP";
})

priceRange.addEventListener('change', () => {
    

    divContentLaptops.innerHTML = "" // Clean laptops contents

    // start Looping
    for (let i = 0; i < databaseArrayLaptops.length; i++) {
        if (databaseArrayLaptops[i].price < priceRange.value) {

            divContentLaptops.innerHTML += `
                <div class="product">
                            <div class="productFirstPart">
                                <img src="${databaseArrayLaptops[i].img}" alt="${databaseArrayLaptops[i].alt}">
                            </div>
                            <div class="productSecondPart">
                                <p id="product_Name_5">${databaseArrayLaptops[i].product_name}</p>
                                <p id="Description_5">${databaseArrayLaptops[i].description}</p>
                                <p>${databaseArrayLaptops[i].price} <span id="currency">EGP</span></p>
                                <span id="Brand_Nokia_5">Brand: ${databaseArrayLaptops[i].brand}</span>
                                <button>Add to cart</button>
                            </div>
            
                </div>
            `

        }
    }

})

checkboxOptions.addEventListener('change' , ()=> {
    divContentLaptops.innerHTML = ""; // clean divContent laptops

    // start looping
    for (let i=0; i < databaseArrayLaptops.length; i++) {
        if (databaseArrayLaptops[i].brand === checkboxOptions.value || checkboxOptions.value === '') {
                divContentLaptops.innerHTML += `
                <div class="product">
                            <div class="productFirstPart">
                                <img src="${databaseArrayLaptops[i].img}" alt="${databaseArrayLaptops[i].alt}">
                            </div>
                            <div class="productSecondPart">
                                <p id="product_Name_5">${databaseArrayLaptops[i].product_name}</p>
                                <p id="Description_5">${databaseArrayLaptops[i].description}</p>
                                <p>${databaseArrayLaptops[i].price} <span id="currency">EGP</span></p>
                                <span id="Brand_Nokia_5">Brand: ${databaseArrayLaptops[i].brand}</span>
                                <button>Add to cart</button>
                            </div>
            
                </div>
            `
        }
    }
})