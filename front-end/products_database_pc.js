
export const divContent = document.querySelector('body main .content'); // div Container 

export const databaseArrayPC = [
    {
        img: "images/pc_products/hp_pavilion_tp01.jpg",
        alt: "HP Pavilion TP01 Desktop",
        product_name: "HP Pavilion TP01",
        description: "AMD Ryzen 5 5600G, 16GB RAM, 1TB HDD + 256GB SSD, AMD Radeon Graphics, Windows 11",
        price: 21999,
        brand: "HP",
    },
    {
        img: "images/pc_products/lenovo_ideacentre_5.jpg",
        alt: "Lenovo IdeaCentre 5",
        product_name: "Lenovo IdeaCentre 5",
        description: "Intel Core i7-12700, 16GB RAM, 1TB SSD, NVIDIA GTX 1660 Super 6GB, Windows 11",
        price: 32999,
        brand: "Lenovo",
    },
    {
        img: "images/pc_products/msi_codex_r.jpg",
        alt: "MSI Codex R Gaming Desktop",
        product_name: "MSI Codex R",
        description: "Intel Core i5-13400F, 16GB RAM, 1TB SSD, NVIDIA RTX 4060 8GB, Windows 11",
        price: 38999,
        brand: "MSI",
    },
    {
        img: "images/pc_products/asus_rog_strix_g10.jpg",
        alt: "ASUS ROG Strix G10",
        product_name: "ASUS ROG Strix G10",
        description: "Intel Core i7-12700F, 16GB RAM, 512GB SSD, NVIDIA RTX 3060 12GB, Windows 11",
        price: 41999,
        brand: "ASUS",
    },
    {
        img: "images/pc_products/dell_xps_8940.jpg",
        alt: "Dell XPS 8940 Desktop",
        product_name: "Dell XPS 8940",
        description: "Intel Core i7-11700, 16GB RAM, 1TB HDD + 512GB SSD, NVIDIA GTX 1660 Ti 6GB, Windows 11",
        price: 35999,
        brand: "Dell",
    }
]

divContent.innerHTML = ''; // clean container

for (let i = 0; i < databaseArrayPC.length; i++) {
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
