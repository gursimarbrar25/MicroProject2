const app = Vue.createApp({
    data() {
        return {
            title: "Welcome to Subway",
            mainPara: "Fresh food made your way!",
        };
    },
    methods: {
        showMessage() {
            alert('Button clicked!');
        },
        goToMenu() {
            window.location.href = 'https://www.subway.com';
        }
    }
});
app.mount('#app');
