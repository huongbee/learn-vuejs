new Vue({
    el: "#app",
    data: {
        name: "Huong",
        age: 22,
        message: 'You loaded this page on ' + new Date().toLocaleString()
    },
    methods: {
        hello: function (time) {
            return `Good ${time}, ${this.name}`
        }
    }
})