const app = Vue.createApp({
    data() {
        return {
            pageTitle: "Order Your subway here",
            orderText: "Customize your food and place your order.",
        };
    },
    methods: {
        placeOrder() {
            alert('Order placed!');
        },
        goToSubway() {
            window.location.href = 'https://www.subway.ca/';
        }
    }
});
app.mount('#app');
