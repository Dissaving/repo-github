class BasketList {

    constructor(container = '.basket') {
        this.container = container;
        this.goods = [];
        this.allProducts = [];
        this.amountOfPricesInBasket = null;

        this.handleActions();
        this.renderBasketItems();
        this.findBasketTotal();
        this.renderBasketTotal();
    }

    handleActions(){

    };

    renderBasketItems(){

    };

    findBasketTotal(){

    };

    renderBasketTotal(){

    };
}

class BasketItem {
    constructor(product, img) {
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.img = img;
        this.dataPrice = product.price;
    }

    renderBasketItem() {
    };
}