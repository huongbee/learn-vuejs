new Vue({
    el: "#app",
    data: {
        name: "Huong",
        age: 22,
        message: 'You loaded this page on ' + new Date().toLocaleString(),
        website: "https://www.facebook.com/huongnguyen.nh",
        inputTag: `<input value="Hihi"/>`
    },
    methods: {
        hello: function (time) {
            return `Good ${time}, ${this.name}`
        }
    }
})