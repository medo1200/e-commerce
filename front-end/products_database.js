export const divContent = document.querySelector('body main .content');  // has all products inside it


// Database for phone section
export const databaseArray = [
    {
        img: "images/phones_products/iphone_14.jpg",
        alt: "iPhone 14",
        product_name: "iPhone 14",
        description: "iPhone 14 unlocked, 128GB, A15 Bionic chip",
        price: 47999,
        brand: "Apple",
    },
    {
        img: "images/phones_products/samsung_galaxy_s24_ultra.jpg",
        alt: "Galaxy S23",
        product_name: "Samsung Galaxy S23",
        description: "Galaxy S23 5G, 256GB, Snapdragon 8 Gen 2",
        price: 60000,
        brand: "Samsung",
    },
    {
        img: "images/phones_products/huawei_p60_pro.jpg",
        alt: "Huawei P60 Pro",
        product_name: "Huawei P60 Pro",
        description: "Huawei P60 Pro, 256GB, Quad Camera, HarmonyOS",
        price: 49821.28,
        brand: "Huawei",
    },
    {
        img: "images/phones_products/Xiaomi_redmi_note_13_pro.jpg",
        alt: "Xiaomi 13 Pro",
        product_name: "Xiaomi 13 Pro",
        description: "Xiaomi 13 Pro, 12GB RAM, Leica Camera, Snapdragon 8 Gen 2",
        price: 33000.00,
        brand: "Xiaomi",
    },
    {
        img: "images/phones_products/nokia_g60_5g.jpg",
        alt: "Nokia G60",
        product_name: "Nokia G60 5G",
        description: "Nokia G60, 128GB, Android 13, 3-day battery",
        price: 8997.38,
        brand: "Nokia",
    },
    {
        img: "images/phones_products/oppo-reno-6-4g.jpg",
        alt: "Oppo Reno6",
        product_name: "Oppo Reno6",
        description: "Oppo Reno6, 128GB, 8GB RAM, 64MP Camera, 5G",
        price: 15500.00,
        brand: "Oppo",
    },
    {
        img: "images/phones_products/Infinix-Note-12-Pro-5g.jpg",
        alt: "Infinix Note12",
        product_name: "Infinix Note12",
        description: "Infinix Note12, 128GB, 6GB RAM, AMOLED Display, Helio G88",
        price: 7999.00,
        brand: "Infinix",
    },
        {
        img: "images/phones_products/xiaomi_poco_f5.jpg",
        alt: "Xiaomi Poco F5",
        product_name: "Xiaomi Poco F5",
        description: "Xiaomi Poco F5, 256GB, 12GB RAM, Snapdragon 7+ Gen 2",
        price: 21000.00,
        brand: "Xiaomi",
    },
    {
        img: "images/phones_products/nokia_x30_5g.jpg",
        alt: "Nokia X30 5G",
        product_name: "Nokia X30 5G",
        description: "Nokia X30 5G, 128GB, 8GB RAM, PureView Camera",
        price: 14500.00,
        brand: "Nokia",
    },
    {
        img: "images/phones_products/oppo_a78.jpg",
        alt: "Oppo A78",
        product_name: "Oppo A78",
        description: "Oppo A78, 256GB, 8GB RAM, 50MP AI Camera, 5000mAh",
        price: 12000.00,
        brand: "Oppo",
    },
    {
        img: "images/phones_products/redmi_note_12.jpg",
        alt: "Redmi Note 12",
        product_name: "Redmi Note 12",
        description: "Redmi Note 12, 128GB, 6GB RAM, AMOLED Display, Snapdragon 685",
        price: 9500.00,
        brand: "Xiaomi",
    },
        {
        img: "images/phones_products/iphone_13.jpg",
        alt: "iPhone 13",
        product_name: "iPhone 13",
        description: "iPhone 13 unlocked, 128GB, A15 Bionic chip",
        price: 41999,
        brand: "Apple",
    },
    {
        img: "images/phones_products/iphone_se_2022.jpg",
        alt: "iPhone SE (2022)",
        product_name: "iPhone SE (2022)",
        description: "iPhone SE (2022), 64GB, A15 Bionic chip, 5G",
        price: 24999,
        brand: "Apple",
    },
]


divContent.innerHTML = "";  // clear main div first 

for (let i = 0; i < databaseArray.length; i++) {

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




