// Container
export const contentTablets = document.querySelector('.contentTablets');

// Database
export const databaseArrayTablets = [
    {
        img: "images/tablets_products/samsung_galaxy_tab_s9.jpg",
        alt: "Samsung Galaxy Tab S9",
        product_name: "Samsung Galaxy Tab S9",
        description: "Samsung Galaxy Tab S9, 128GB, 11-inch, Android",
        price: 35000.00,
        brand: "Samsung",
    },
    {
        img: "images/tablets_products/apple_ipad_air_5.jpg",
        alt: "Apple iPad Air 5",
        product_name: "Apple iPad Air 5",
        description: "Apple iPad Air 5, 64GB, 10.9-inch, Wi-Fi, iPadOS",
        price: 42000.00,
        brand: "Apple",
    },
    {
        img: "images/tablets_products/lenovo_tab_p11_pro.jpg",
        alt: "Lenovo Tab P11 Pro",
        product_name: "Lenovo Tab P11 Pro",
        description: "Lenovo Tab P11 Pro, 128GB, 11.5-inch, Android",
        price: 22000.00,
        brand: "Lenovo",
    },
    {
        img: "images/tablets_products/xiaomi_pad_6.jpg",
        alt: "Xiaomi Pad 6",
        product_name: "Xiaomi Pad 6",
        description: "Xiaomi Pad 6, 256GB, 11-inch, Android",
        price: 18500.00,
        brand: "Xiaomi",
    },
    {
        img: "images/tablets_products/microsoft_surface_pro_9.jpg",
        alt: "Microsoft Surface Pro 9",
        product_name: "Microsoft Surface Pro 9",
        description: "Microsoft Surface Pro 9, 256GB, 13-inch, Windows 11",
        price: 55000.00,
        brand: "Microsoft",
    },
    {
        img: "images/tablets_products/microsoft_surface_go_3.jpg",
        alt: "Microsoft Surface Go 3",
        product_name: "Microsoft Surface Go 3",
        description: "Microsoft Surface Go 3, 128GB, 10.5-inch, Windows 11",
        price: 32000.00,
        brand: "Microsoft",
    },
    {
        img: "images/tablets_products/huawei_matepad_11.jpg",
        alt: "Huawei MatePad 11",
        product_name: "Huawei MatePad 11",
        description: "Huawei MatePad 11, 128GB, 11-inch, HarmonyOS",
        price: 21000.00,
        brand: "Huawei",
    },
    {
        img: "images/tablets_products/huawei_matepad_pro_13_2.jpg",
        alt: "Huawei MatePad Pro 13.2",
        product_name: "Huawei MatePad Pro 13.2",
        description: "Huawei MatePad Pro 13.2, 256GB, 13.2-inch, HarmonyOS",
        price: 34000.00,
        brand: "Huawei",
    },
]

contentTablets.innerHTML = ""; // clear screen

for (let i = 0; i < databaseArrayTablets.length; i++) {
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