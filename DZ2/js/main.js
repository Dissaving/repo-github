class ProductList {
    #privateProp;

    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this.allProducts = [];
        this.#privateProp = '123';
        this.amountOfPrices = null;

        this.#fetchProducts();
        this.render();
        this.priceSum();
    }

    get prop() {
        return this.#privateProp;
    }

    set prop(value) {
        this.#privateProp = value;
    }

    #fetchProducts() {
        this.goods = [
            {id: 1, title: 'Notebook', price: 20000},
            {id: 2, title: 'Mouse', price: 1500},
            {id: 3, title: 'Keyboard', price: 5000},
            {id: 4, title: 'Gamepad', price: 4500},
        ];
    }

    render() {
        const block = document.querySelector(this.container);

        for (let product of this.goods) {
            const productObject = new ProductItem(product);

            this.allProducts.push(productObject);
            block.insertAdjacentHTML('beforeend', productObject.render());
        }
    }

    priceSum() {
        this.allProducts.forEach(item => this.amountOfPrices += item.dataPrice)
        console.log(this.amountOfPrices)
    };
}

class ProductItem {
    constructor(product, img = 'https://placehold.it/200x150') {
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.img = img;
        this.dataPrice = product.price;
    }

    render() {
        return `<div class="product-item" id="${this.id}" data-id="${this.id}" data-price="${this.dataPrice}">
              <img src="${this.img}" alt="Some img">
              <div class="desc">
                  <h3>${this.title}</h3>
                  <p>${this.price} \u20bd</p>
                  <button class="buy-btn">Купить</button>
              </div>
          </div>`;
    }
}

const list = new ProductList();

