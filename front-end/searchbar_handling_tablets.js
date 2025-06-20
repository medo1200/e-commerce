import { contentTablets } from "./products_database_tablets.js";
import { databaseArrayTablets } from "./products_database_tablets.js";


const searchBar = document.querySelector('#searchBar'); // search bar 
const priceRange = document.querySelector('#priceRange'); // price range
const priceRangeOutput = document.querySelector('#priceRangeOutput'); // <p> 
const checkboxOptionsTablets = document.querySelector('#checkboxOptionsTablets');


searchBar.addEventListener('keyup', () => {
    contentTablets.innerHTML = '';  // clean container

    //loop on data
    for (let i = 0; i < databaseArrayTablets.length; i++) {
        if (databaseArrayTablets[i].product_name.toLowerCase().includes(searchBar.value.toLowerCase())) {
            contentTablets.innerHTML +=
                `            
                <div class="product">
                        <div class="productFirstPart">
                            <img src="${databaseArrayTablets[i].img}" alt="${databaseArrayTablets[i].alt}">
                        </div>
                        <div class="productSecondPart">
                            <p id="product_Name_5">${databaseArrayTablets[i].product_name}</p>
                            <p id="Description_5">${databaseArrayTablets[i].description}</p>
                            <p>${databaseArrayTablets[i].price} <span id="currency">EGP</span></p>
                            <span id="Brand_Nokia_5">Brand: ${databaseArrayTablets[i].brand}</span>
                            <button>Add to cart</button>
                        </div>
            
                </div>
            `
        }
    }
})

priceRange.addEventListener('input', () => {
    priceRangeOutput.innerHTML = priceRange.value + " EGP"; // <p> = (range money)
    contentTablets.innerHTML = ''; // clean container

    for (let i = 0; i < databaseArrayTablets.length; i++) {
        if (databaseArrayTablets[i].price < priceRange.value) {
            contentTablets.innerHTML +=
                `            
                <div class="product">
                        <div class="productFirstPart">
                            <img src="${databaseArrayTablets[i].img}" alt="${databaseArrayTablets[i].alt}">
                        </div>
                        <div class="productSecondPart">
                            <p id="product_Name_5">${databaseArrayTablets[i].product_name}</p>
                            <p id="Description_5">${databaseArrayTablets[i].description}</p>
                            <p>${databaseArrayTablets[i].price} <span id="currency">EGP</span></p>
                            <span id="Brand_Nokia_5">Brand: ${databaseArrayTablets[i].brand}</span>
                            <button>Add to cart</button>
                        </div>
            
                </div>
            `
        }
    }

})

checkboxOptionsTablets.addEventListener('change', () => {
    contentTablets.innerHTML = ""; // clean container

    for (let i = 0; i < databaseArrayTablets.length; i++) {
        if (databaseArrayTablets[i].brand === checkboxOptionsTablets.value || checkboxOptionsTablets.value === "") {
            contentTablets.innerHTML +=
                `            
                <div class="product">
                        <div class="productFirstPart">
                            <img src="${databaseArrayTablets[i].img}" alt="${databaseArrayTablets[i].alt}">
                        </div>
                        <div class="productSecondPart">
                            <p id="product_Name_5">${databaseArrayTablets[i].product_name}</p>
                            <p id="Description_5">${databaseArrayTablets[i].description}</p>
                            <p>${databaseArrayTablets[i].price} <span id="currency">EGP</span></p>
                            <span id="Brand_Nokia_5">Brand: ${databaseArrayTablets[i].brand}</span>
                            <button>Add to cart</button>
                        </div>
            
                </div>
            `
        }
    }
})