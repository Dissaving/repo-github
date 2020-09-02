const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    data: {
        catalogUrl: '/catalogData.json',
        products: [],
        imgCatalog: 'https://placehold.it/200x150',
        searchLine: '',
        filtered: [],
        isVisibleCart: false,
        productsInBasket: [],
        emptyBasket: true,
    },
    methods: {
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error);
                })
        },
        addProduct(product) {
            this.emptyBasket = false
            if (product.quantity < 1) {
                product.quantity += 1
                this.productsInBasket.push(product)
            } else product.quantity += 1
        },

        deleteProduct(product) {
            if (product.quantity > 1) {
                product.quantity -= 1
            } else {
                let index = this.productsInBasket.indexOf(product)
                this.productsInBasket.splice(index, 1)
                product.quantity -= 1
                if (this.productsInBasket.length === 0) {
                    this.emptyBasket = true
                }
            }
        },

        filterGoods(value) {
            const regexp = new RegExp(value, 'i');
            this.filtered = this.products.filter(product => regexp.test(product.product_name));
            this.products.forEach(el => {
                const block = document.getElementById(`${el.id_product}`);
                if (!this.filtered.includes(el)) {
                    block.classList.add('invisible');
                } else {
                    block.classList.remove('invisible');
                }
            })
        },
    },

    created() {
        this.getJson(`${API + this.catalogUrl}`)
            .then(data => {
                for (let el of data) {
                    el.quantity = 0
                    this.products.push(el);
                }
            });
    }
});
