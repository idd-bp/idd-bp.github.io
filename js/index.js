const products = [
    {
        name: `OnePlus 7 Pro`,
        id: `1`,
        brand: `oneplus`,
        colour: `black`,
        storage: `64gb`,
        ram: `8gb`,
        available: `In Stock`,
        retailprice: `899`,
        saleprice: `799`,
        image: `img/product1.jpg`
    }, {
        name: `Samsung Galaxy Note 10`,
        id: `2`,
        brand: `samsung`,
        colour: `black`,
        storage: `256gb`,
        ram: `8gb`,
        available: `In Stock`,
        image: `img/product2.jpg`
    }, {
        name: `Apple Iphone 11 Pro`,
        id: `3`,
        brand: `apple`,
        colour: `black`,
        storage: `512gb`,
        ram: `4gb`,
        available: `Back Order`,
        image: `img/product3.jpg`
    }, {
        name: `Huawei P30 Pro`,
        id: `4`,
        brand: `huawei`,
        colour: `grey`,
        storage: `64gb`,
        ram: `6gb`,
        available: `In Stock`,
        image: `img/product4.jpg`
    }, {
        name: `Sony Xperia 1`,
        id: `5`,
        brand: `sony`,
        colour: `black`,
        storage: `64gb`,
        ram: `6gb`,
        available: `In Stock`,
        image: `img/product5.jpg`
    }
]

function getProductAsHtmlString(products) {

    return `<article class="product">
                <header>
                    <img src="${products.image} alt="Product Image">
                </header>
                <h3>${products.name}</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique. wadwadawdawddawdwa</p>
                <form class="specs">
                    <fieldset>
                        <legend>Colours</legend>
                        <ul>
                            <li><label><input type="radio" name="colour" value="blck"> <span>Black</span></label></li>
                            <li><label><input type="radio" name="colour" value="blue"> <span>Blue</span></label></li>
                            <li><label><input type="radio" name="colour" value="grey"> <span>Grey</span></label></li>
                        </ul>
                    </fieldset>

                    <fieldset>
                        <legend>Storage</legend>
                        <ul>
                            <li><label><input type="radio" name="storage" value="64gb"> <span>64 GB</span></label></li>
                            <li><label><input type="radio" name="storage" value="128gb"> <span>128 GB</span></label></li>
                            <li><label><input type="radio" name="storage" value="256gb"> <span>256 GB</span></label></li>
                        </ul>
                    </fieldset>

                    <fieldset>
                        <legend>RAM</legend>
                        <ul>
                            <li><label><input type="radio" name="ram" value="6gb"> <span>6 GB</span></label></li>
                            <li><label><input type="radio" name="ram" value="8gb"> <span>8 GB</span></label></li>
                            <li><label><input type="radio" name="ram" value="12gb"> <span>12 GB</span></label></li>
                        </ul>
                    </fieldset>
                </form>

                <footer class="actions">
                    <dl>
                        <dt>Availability</dt>
                        <dd>${products.available}</dd>
                    </dl>
                    <data value="${products.saleprice}"><del>$${products.retailprice}.00</del> <ins>$${products.saleprice}.00</ins></data>
                    <button type="button">Add to Cart</button>
                </footer>
                
        </article>`;
  }

function renderProducts(arr) {
    const arrOfHtml = arr.map(getProductAsHtmlString);
    const strOfHtml = arrOfHtml.join('\n');
    document.getElementById('products').innerHTML = strOfHtml;
  }

renderProducts(products);