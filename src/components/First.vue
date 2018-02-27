<template>
    <div>
        <h1>First Component</h1>
        <h3>{{hello('morning')}}</h3>
        <p>Name: {{name}}</p>
        <p>Age: {{age}}</p>
        <p>{{message}}</p>
        <div>
            <a v-bind:href="website">About me</a>
        </div>
        <div>
            <input v-bind:value="name"/>
        </div>
        <div v-html="inputTag"></div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      name: "Huong",
      age: 22,
      message: "You loaded this page on " + new Date().toLocaleString(),
      website: "https://www.facebook.com/huongnguyen.nh",
      inputTag: `<input value="Hihi"/>`
    };
  },
  methods: {
    hello: function(time) {
      return `Good ${time}, ${this.name}`;
    }
  }
};
</script>
