// container of database 
export const divContentLaptops = document.querySelector('body main .contentLaptops');

// Laptops Database
export const databaseArrayLaptops = [
    {
        img: "images/laptops_products/hp_victus_7535HS_gaming_laptop.jpg",
        alt: "HP Victus 7535HS Gaming Laptop",
        product_name: "HP Victus 16-e1000AX",
        description: "HP Victus 16, AMD Ryzen 7 7535HS, 16GB RAM, 512GB SSD, NVIDIA RTX 3050 6GB, 16.1'' FHD 144Hz, Windows 11",
        price: 52999, // Estimated price in EGP
        brand: "HP",
    },
    {
        img: "images/laptops_products/hp_pavilion_15_eg2000ne.jpg",
        alt: "HP Pavilion 15-eg2000ne Laptop",
        product_name: "HP Pavilion 15-eg2000ne",
        description: "HP Pavilion 15, Intel Core i7-1255U, 16GB RAM, 512GB SSD, Intel Iris Xe Graphics, 15.6'' FHD, Windows 11",
        price: 42999, // Estimated price in EGP
        brand: "HP",
    },
        {
        img: "images/laptops_products/samsung_galaxy_book3_pro.jpg",
        alt: "Samsung Galaxy Book3 Pro",
        product_name: "Samsung Galaxy Book3 Pro",
        description: "Samsung Galaxy Book3 Pro, Intel Core i7-1360P, 16GB RAM, 512GB SSD, Intel Iris Xe, 14'' AMOLED, Windows 11",
        price: 48999,
        brand: "Samsung",
    },
    {
        img: "images/laptops_products/samsung_galaxy_book2.jpg",
        alt: "Samsung Galaxy Book2",
        product_name: "Samsung Galaxy Book2",
        description: "Samsung Galaxy Book2, Intel Core i5-1235U, 8GB RAM, 256GB SSD, Intel Iris Xe, 15.6'' FHD, Windows 11",
        price: 34999,
        brand: "Samsung",
    },
    {
        img: "images/laptops_products/asus_zenbook_14_oled.jpg",
        alt: "ASUS ZenBook 14 OLED",
        product_name: "ASUS ZenBook 14 OLED",
        description: "ASUS ZenBook 14 OLED, AMD Ryzen 7 7730U, 16GB RAM, 1TB SSD, AMD Radeon Graphics, 14'' 2.8K OLED, Windows 11",
        price: 52999,
        brand: "Asus",
    },
    {
        img: "images/laptops_products/asus_vivobook_15.jpg",
        alt: "ASUS VivoBook 15",
        product_name: "ASUS VivoBook 15",
        description: "ASUS VivoBook 15, Intel Core i5-1240P, 8GB RAM, 512GB SSD, Intel Iris Xe, 15.6'' FHD, Windows 11",
        price: 37999,
        brand: "Asus",
    },
    {
        img: "images/laptops_products/acer_aspire_7.jpg",
        alt: "Acer Aspire 7",
        product_name: "Acer Aspire 7",
        description: "Acer Aspire 7, AMD Ryzen 5 5500U, 8GB RAM, 512GB SSD, NVIDIA GTX 1650 4GB, 15.6'' FHD, Windows 11",
        price: 31999,
        brand: "Acer",
    },
    {
        img: "images/laptops_products/acer_swift_3.jpg",
        alt: "Acer Swift 3",
        product_name: "Acer Swift 3",
        description: "Acer Swift 3, Intel Core i7-1165G7, 16GB RAM, 512GB SSD, Intel Iris Xe, 14'' FHD, Windows 11",
        price: 38999,
        brand: "Acer",
    },
    {
        img: "images/laptops_products/dell_inspiron_15_3520.jpg",
        alt: "Dell Inspiron 15 3520",
        product_name: "Dell Inspiron 15 3520",
        description: "Dell Inspiron 15 3520, Intel Core i5-1235U, 8GB RAM, 512GB SSD, Intel UHD Graphics, 15.6'' FHD, Windows 11",
        price: 35999,
        brand: "Dell",
    },
    {
        img: "images/laptops_products/dell_xps_13_9315.jpg",
        alt: "Dell XPS 13 9315",
        product_name: "Dell XPS 13 9315",
        description: "Dell XPS 13 9315, Intel Core i7-1250U, 16GB RAM, 512GB SSD, Intel Iris Xe, 13.4'' FHD+, Windows 11",
        price: 59999,
        brand: "Dell",
    },
        {
        img: "images/laptops_products/lenovo_ideapad_3.jpg",
        alt: "Lenovo IdeaPad 3",
        product_name: "Lenovo IdeaPad 3",
        description: "Lenovo IdeaPad 3, Intel Core i3-1115G4, 4GB RAM, 256GB SSD, Intel UHD Graphics, 15.6'' FHD, Windows 11",
        price: 17999,
        brand: "Lenovo",
    },
    {
        img: "images/laptops_products/hp_15s_eq2000ne.jpg",
        alt: "HP 15s-eq2000ne",
        product_name: "HP 15s-eq2000ne",
        description: "HP 15s-eq2000ne, AMD Athlon Silver 3050U, 4GB RAM, 128GB SSD, AMD Radeon Graphics, 15.6'' HD, Windows 11",
        price: 14999,
        brand: "HP",
    },
]


// Clean container
divContentLaptops.innerHTML = "";


for (let i = 0; i < databaseArrayLaptops.length; i++) {
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