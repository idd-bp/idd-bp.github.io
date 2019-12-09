const products = [
    {
        name: `OnePlus 7 Pro`,
        id: 1,
        brand: `oneplus`,
        colour: `blue`,
        storage: 64,
        ram: 8,
        available: `In Stock`,
        retailprice: 899,
        saleprice: 799,
        image: `img/product1.jpg`
    }, {
        name: `Samsung Galaxy Note 10`,
        id: 2,
        brand: `samsung`,
        colour: `black`,
        storage: 256,
        ram: 8,
        available: `In Stock`,
        retailprice: 1399,
        saleprice: 1299,
        image: `img/product2.jpg`
    }, {
        name: `Apple Iphone 11 Pro Max`,
        id: 3,
        brand: `apple`,
        colour: `black`,
        storage: 512,
        ram: 4,
        available: `Back Order`,
        retailprice: 1499,
        saleprice: 1399,
        image: `img/product3.jpg`
    }, {
        name: `Huawei P30 Pro`,
        id: 4,
        brand: `huawei`,
        colour: `grey`,
        storage: 64,
        ram: 6,
        available: `In Stock`,
        retailprice: 899,
        saleprice: 759,
        image: `img/product4.jpg`
    }, {
        name: `Sony Xperia 1`,
        id: 5,
        brand: `sony`,
        colour: `black`,
        storage: 64,
        ram: 6,
        available: `In Stock`,
        retailprice: 899,
        saleprice: 699,
        image: `img/product5.jpg`
    }, {
        name: `Apple Iphone 11 Pro`,
        id: 6,
        brand: `apple`,
        colour: `black`,
        storage: 256,
        ram: 4,
        available: `Back Order`,
        retailprice: 1299,
        saleprice: 1199,
        image: `img/product6.jpg`
    }, {
        name: `Apple Iphone 11`,
        id: 7,
        brand: `apple`,
        colour: `black`,
        storage: 128,
        ram: 4,
        available: `In Stock`,
        retailprice: 1099,
        saleprice: 999,
        image: `img/product7.jpg`
    }, {
        name: `Nokia 2.3`,
        id: 8,
        brand: `nokia`,
        colour: `blue`,
        storage: 16,
        ram: 6,
        available: `In Stock`,
        retailprice: 899,
        saleprice: 799,
        image: `img/product8.jpg`
    }, {
        name: `Nokia 7.2`,
        id: 9,
        brand: `nokia`,
        colour: `blue`,
        storage: 64,
        ram: 6,
        available: `In Stock`,
        retailprice: 999,
        saleprice: 899,
        image: `img/product9.jpg`
    }, {
        name: `LG G8X ThinQ`,
        id: 10,
        brand: `lg`,
        colour: `black`,
        storage: 128,
        ram: 6,
        available: `In Stock`,
        retailprice: 999,
        saleprice: 899,
        image: `img/product10.jpg`
    }, {
        name: `LG V50S ThinQ 5G`,
        id: 11,
        brand: `lg`,
        colour: `black`,
        storage: 128,
        ram: 8,
        available: `In Stock`,
        retailprice: 1099,
        saleprice: 999,
        image: `img/product11.jpg`
    }, {
        name: `Xiaomi Redmi Note 8T`,
        id: 12,
        brand: `xiaomi`,
        colour: `blue`,
        storage: 32,
        ram: 4,
        available: `In Stock`,
        retailprice: 399,
        saleprice: 299,
        image: `img/product12.jpg`
    }, {
        name: `Xiaomi Mi Note 10 Pro`,
        id: 13,
        brand: `xiaomi`,
        colour: `blue`,
        storage: 128,
        ram: 8,
        available: `In Stock`,
        retailprice: 599,
        saleprice: 399,
        image: `img/product13.jpg`
    }, {
        name: `Google Pixel 4 XL`,
        id: 14,
        brand: `google`,
        colour: `black`,
        storage: 128,
        ram: 6,
        available: `In Stock`,
        retailprice: 999,
        saleprice: 899,
        image: `img/product14.jpg`
    }, {
        name: `Google Pixel 4`,
        id: 15,
        brand: `google`,
        colour: `black`,
        storage: 64,
        ram: 8,
        available: `In Stock`,
        retailprice: 799,
        saleprice: 699,
        image: `img/product15.jpg`
    }, {
        name: `Vivo IQOO Neo 855 Racing`,
        id: 16,
        brand: `vivo`,
        colour: `blue`,
        storage: 128,
        ram: 8,
        available: `In Stock`,
        retailprice: 999,
        saleprice: 899,
        image: `img/product16.jpg`
    }, {
        name: `Vivo Y9s`,
        id: 17,
        brand: `vivo`,
        colour: `white`,
        storage: 128,
        ram: 8,
        available: `In Stock`,
        retailprice: 899,
        saleprice: 799,
        image: `img/product17.jpg`
    }, {
        name: `Asus ROG Phone II ZS660KL`,
        id: 18,
        brand: `asus`,
        colour: `black`,
        storage: 128,
        ram: 8,
        available:`In Stock`,
        retailprice: 1199,
        saleprice: 999,
        image: `img/product18.jpg`
    }, {
        name: `Asus Zenfone 6 ZS630KL`,
        id: 19,
        brand: `asus`,
        colour: `black`,
        storage: 128,
        ram: 8,
        available: `In Stock`,
        retailprice: 1099,
        saleprice: 999,
        image: `img/product19.jpg`
    }, {
        name: `Oppo A11`,
        id: 20,
        brand: `oppo`,
        colour: `blue`,
        storage: 256,
        ram: 6,
        available: `In Stock`,
        retailprice: 699,
        saleprice: 599,
        image: `img/product20.jpg`
    }
]

function getProductAsHtmlString(products) {

    return `<article class="product">
                <header>
                    <img src="${products.image}" alt="Product Image">
                </header>
                <h3>${products.name}</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique. wadwadawdawddawdwa</p>
                <form class="specs">
                    <fieldset>
                        <legend>Colours</legend>
                        <p class="specsfield">${products.colour}</p>
                    </fieldset>

                    <fieldset>
                        <legend>Storage</legend>
                        <p class="specsfield">${products.storage} GB</p>
                    </fieldset>

                    <fieldset>
                        <legend>RAM</legend>
                        <p class="specsfield">${products.ram} GB</p>
                    </fieldset>
                </form>

                <footer class="actions">
                    <dl>
                        <dt>Availability</dt>
                        <dd>${products.available}</dd>
                    </dl>
                    <data value="${products.saleprice}"><del>$${products.retailprice}.00</del> <ins>$${products.saleprice}.00</ins></data>
                    <button type="button" onclick="addToCart(1)">Add to Cart</button>
                </footer>
                
        </article>`;
  }

function renderProducts(arr) {
    const arrOfHtml = arr.map(getProductAsHtmlString);
    const strOfHtml = arrOfHtml.join('\n');
    document.getElementById('products').innerHTML = strOfHtml;
  }

function filterByName(products) {
    return products.name.toLowerCase().includes(this.trim().toLowerCase())
  }

function searchByName(event) {
    const searchTerm = event.target.value; 
    const arrNameCheck = products.filter(filterByName, searchTerm)
    renderProducts(arrNameCheck);
}

//Sort by price
//Only chooses the first option of the if statement
function sortByPrice() {

    if (document.getElementById('sort').value = 'price-high') {
        var priceFilter = products.sort(function(a,b) {
            return b.saleprice - a.saleprice;
        })
    } else if (document.getElementById('sort').value = 'price-low') {
        var priceFilter = products.sort(function(a,b) {
            return a.saleprice - b.saleprice;
        })
    } else {
        return 0;
    }

    renderProducts(priceFilter);
}

document.getElementById('sort').addEventListener('change', sortByPrice)


//filter options
function filterByBrand(products) {
    return products.brand == this;
  }
  
function filterByColour(products) {
    return products.colour == this;
}

function filterByStorage(products) {
    return products.storage == this;
}

function filterByRAM(products) {
    return products.ram == this;
}

function searchByBrand(event) {
    const searchTerm = event.target.value;
    const arrCatCheck = products.filter(filterByBrand, searchTerm)
    renderProducts(arrCatCheck);
  }

function searchByColour(event) {
    const searchTerm = event.target.value;
    const arrCatCheck = products.filter(filterByColour, searchTerm)
    renderProducts(arrCatCheck);
  }

function searchByStorage(event) {
    const searchTerm = event.target.value;
    const arrCatCheck = products.filter(filterByStorage, searchTerm)
    renderProducts(arrCatCheck);
  }

function searchByRAM(event) {
    const searchTerm = event.target.value;
    const arrCatCheck = products.filter(filterByRAM, searchTerm)
    renderProducts(arrCatCheck);
  }

//Reset filter options
function resetFilters() {
    document.getElementById(filterByBrand).reset();
    document.getElementById(filterByColour).reset();
    document.getElementById(filterByStorage).reset();
    document.getElementById(filterByRAM).reset();
}

//Add to cart
let numProductsInCart = 0;

function addToCart(productToCart) {
    numProductsInCart += productToCart;
    document.getElementById('cartnumber').innerHTML = numProductsInCart;
}

renderProducts(products);

document.getElementById('nameSearch').addEventListener('input', searchByName)
document.getElementById('filterbybrand').addEventListener('change', searchByBrand)
document.getElementById('filterbycolour').addEventListener('change', searchByColour)
document.getElementById('filterbystorage').addEventListener('change', searchByStorage)
document.getElementById('filterbyram').addEventListener('change', searchByRAM)

