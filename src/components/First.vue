<template>
    <div class="first-component">
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
        <ul>
          <li v-for="person in persons" :key="person.name" v-bind:class="[person.age>15 ? 'red': 'blue']" >
            {{person.name}} - {{person.age}}
          </li>
        </ul>
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
      inputTag: `<input value="Hihi"/>`,
      persons: [
        { name: "Huong", age: 22 },
        { name: "Le", age: 12 },
        { name: "Hong", age: 24 },
        { name: "Tho Ngoc", age: 10 }
      ]
    };
  },
  methods: {
    hello: function(time) {
      return `Good ${time}, ${this.name}`;
    }
  }
};
</script>
<style scoped>
.first-component {
  text-align: left;
  font-weight: 500;
  margin-left: 50px;
}
input {
  font-size: 18px;
  padding: 10px;
}
.red {
  color: red;
}
.blue {
  color: blue;
}
</style>
