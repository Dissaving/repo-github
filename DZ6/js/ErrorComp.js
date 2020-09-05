Vue.component('error', {

    data() {
        return {
            isError: false,
        }
    },

    template: `<div><span v-if="isError"">ОШИБКА</span></div>`

})