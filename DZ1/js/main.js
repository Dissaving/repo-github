const products = [
    {
        id: 1,
        title: 'Notebook',
        price: 20000,
        img: 'https://raw.githubusercontent.com/Dissaving/git-dis/master/img/notebook.jpg'
    },
    {
        id: 2,
        title: 'Mouse',
        price: 1500,
        img: 'https://raw.githubusercontent.com/Dissaving/git-dis/master/img/mouse.jpg'
    },
    {
        id: 3,
        title: 'Keyboard',
        price: 5000,
        img: 'https://raw.githubusercontent.com/Dissaving/git-dis/master/img/keyboard.jpg'
    },
    {
        id: 4,
        title: 'Gamepad',
        price: 4500,
        img: 'https://raw.githubusercontent.com/Dissaving/git-dis/master/img/gamepad.jpg'
    },
];

const renderProduct = (id, title, price, img) => {
    return `<div class="product-item" id=product_${id}>
            <img class="productImg" src="${img}" alt="${img}">
            <h3>${title}</h3>
            <p>${price} руб.</p>
            <button class="by-btn">Add to Cart</button>
          </div>`;
};

function renderProducts(list) {
    const productArr = list.map((product) => renderProduct(product.id, product.title, product.price, product.img))
    document.querySelector('.products1').innerHTML = (productArr.reduce((a, b) => a + b));
}

function renderProducts2(list) {
    const productArr = list.map((product) => renderProduct(product.id + 4, product.title, product.price, product.img))
    document.querySelector('.products2').innerHTML = (productArr.join(''));
}

function renderProducts3(list) {
    const productArr = list.map((product) => renderProduct(product.id + 8, product.title, product.price, product.img))
    for (let i = 0; i < 4; i++) {
        document.querySelector('.products3').innerHTML += productArr[i]
    }
}

function renderProducts4(list) {
    const productArr = list.map((product) => renderProduct(product.id + 12, product.title, product.price, product.img))
    let [a, b, c, d] = productArr
    document.querySelector('.products4').innerHTML = (a + b + c + d)
}

function renderProducts5(list) {
    const productArr = list.map((product) => renderProduct(product.id + 16, product.title, product.price, product.img))
    productArr.forEach(element => document.querySelector('.products5').innerHTML += element)
}

renderProducts(products);

renderProducts2(products);

renderProducts3(products);

renderProducts4(products);

renderProducts5(products);
