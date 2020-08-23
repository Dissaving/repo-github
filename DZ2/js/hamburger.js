class Hamburger {

    constructor(container = '#hamburgerContainer') {
        this.container = container;
        this.hamGetSizePrice = 0;
        this.hamGetCalories = 0;
        this.getStuffingPrice = 0;
        this.getStuffingCalories = 0;
        this.getToppingPriceFlavoring = 0;
        this.getToppingCaloriesFlavoring = 0;
        this.getToppingPriceMayonnaise = 0;
        this.getToppingCaloriesMayonnaise = 0;
        this.summaryOfCost = 0;
        this.summaryOfCalories = 0;

        this.handleActionsChooseSize();
        this.handleActionsChooseStuffing();
        this.handleActionsChooseFlavoring();
        this.handleActionsChooseMayonnaise();
        this.getSummaryOfCost();
        this.getSummaryOfCalories();
        this.renderSummaryOfCost();
        this.renderSummaryOfCalories();
    }

    handleActionsChooseSize() {
        document.querySelector(this.container).addEventListener('change', evt => {
            if (evt.target.id === 'exampleRadios1') {
                this.hamGetSizePrice = +evt.target.dataset.hamPrice
                this.hamGetCalories = +evt.target.dataset.hamCalories
            } else if (evt.target.id === 'exampleRadios2') {
                this.hamGetSizePrice = +evt.target.dataset.hamPrice
                this.hamGetCalories = +evt.target.dataset.hamCalories
            }
            this.getSummaryOfCost();
            this.getSummaryOfCalories();
            this.renderSummaryOfCost();
            this.renderSummaryOfCalories();
        })
    }

    handleActionsChooseStuffing() {
        document.querySelector(this.container).addEventListener('change', evt => {
            if (evt.target.id === 'exampleRadios3') {
                this.getStuffingPrice = +evt.target.dataset.hamPrice
                this.getStuffingCalories = +evt.target.dataset.hamCalories
            } else if (evt.target.id === 'exampleRadios4') {
                this.getStuffingPrice = +evt.target.dataset.hamPrice
                this.getStuffingCalories = +evt.target.dataset.hamCalories
            } else if (evt.target.id === 'exampleRadios5') {
                this.getStuffingPrice = +evt.target.dataset.hamPrice
                this.getStuffingCalories = +evt.target.dataset.hamCalories
            }
            this.getSummaryOfCost();
            this.getSummaryOfCalories();
            this.renderSummaryOfCost();
            this.renderSummaryOfCalories();
        })
    }

    handleActionsChooseFlavoring() {
        let flavoringCheckbox = document.querySelector('#defaultCheck1')
        document.querySelector(this.container).addEventListener('change', evt => {
            if (evt.target.id === 'defaultCheck1' && flavoringCheckbox.checked === true &&
                this.getToppingPriceFlavoring === 0) {
                this.getToppingPriceFlavoring += +evt.target.dataset.hamPrice
                this.getToppingCaloriesFlavoring += +evt.target.dataset.hamCalories
            } else if (evt.target.id === 'defaultCheck1' && flavoringCheckbox.checked !== true &&
                this.getToppingPriceFlavoring !== 0) {
                this.getToppingPriceFlavoring -= +evt.target.dataset.hamPrice
                this.getToppingCaloriesFlavoring -= +evt.target.dataset.hamCalories
            }
            this.getSummaryOfCost();
            this.getSummaryOfCalories();
            this.renderSummaryOfCost();
            this.renderSummaryOfCalories();
        })

    }

    handleActionsChooseMayonnaise() {
        let mayonnaiseCheckbox = document.querySelector('#defaultCheck2')
        document.querySelector(this.container).addEventListener('change', evt => {
            if (evt.target.id === 'defaultCheck2' && mayonnaiseCheckbox.checked === true &&
                this.getToppingPriceMayonnaise === 0) {
                this.getToppingPriceMayonnaise += +evt.target.dataset.hamPrice
                this.getToppingCaloriesMayonnaise += +evt.target.dataset.hamCalories
            } else if (evt.target.id === 'defaultCheck2' && mayonnaiseCheckbox.checked !== true &&
                this.getToppingPriceMayonnaise !== 0) {
                this.getToppingPriceMayonnaise -= +evt.target.dataset.hamPrice
                this.getToppingCaloriesMayonnaise -= +evt.target.dataset.hamCalories
            }
            this.getSummaryOfCost();
            this.getSummaryOfCalories();
            this.renderSummaryOfCost();
            this.renderSummaryOfCalories();
        })
    }

    getSummaryOfCost() {
        this.summaryOfCost = this.hamGetSizePrice + this.getStuffingPrice + this.getToppingPriceFlavoring +
            this.getToppingPriceMayonnaise
    }

    getSummaryOfCalories() {
        this.summaryOfCalories = this.hamGetCalories + this.getStuffingCalories + this.getToppingCaloriesFlavoring +
            this.getToppingCaloriesMayonnaise
    }

    renderSummaryOfCost() {
        document.querySelector('#summaryOfCostSpan').innerHTML = ''
        document.querySelector('#summaryOfCostSpan').insertAdjacentHTML('beforeend', this.summaryOfCost);
    }

    renderSummaryOfCalories() {
        document.querySelector('#summaryOfCaloriesSpan').innerHTML = ''
        document.querySelector('#summaryOfCaloriesSpan').insertAdjacentHTML('beforeend', this.summaryOfCalories);
    }
}

new Hamburger();
