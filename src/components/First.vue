<template>
    <div class="first-component">
        <h1>First Component</h1>
        <h3>{{hello('morning')}}</h3>
        <p>Name: {{name}}</p>
        <p>Age: {{age}}</p>
        <p>{{message}}</p>
        <h3>1. Using function with event</h3>
        <input type="text" v-on:input="changeTitle" placeholder="Enter text and see change" >
        <br>
        <h3>2. Using v-model</h3>
        <input type="text" v-model="name" placeholder="Enter text and see change" >
        <div>
            <p><a v-bind:href="website">About me</a></p>
        </div>
        <div>
            <input v-bind:value="name"/>
        </div>
        <div v-html="inputTag"></div>
        <ul>
          <li v-for="(person , index) in persons" :key="person.name" v-bind:class="[person.age>15 ? 'red': 'blue']" >
            Key: {{index}} - Value: {{person.name}} - {{person.age}}
          </li>
        </ul>
        <ul>
          <li v-for="person in persons" :key="person.name" v-bind:class="[person.age>15 ? 'red': 'blue']" >
            <div v-for="(value, key, index ) in person" :key="value">
              {{key}}: {{value}} ({{index}})
            </div>
          </li>
        </ul>
        <span v-for="n in 10" :key="n" > {{n}}</span>
        <br><br>
        <input type="text" v-on:keyup="checkNumber" placeholder="Enter number only">
        <br>
        <br>
        <input type="text" placeholder="Enter name">
        <input type="text" placeholder="Enter age" v-on:keyup="checkNumber">
        <button type="button" @click="addPerson" class="btn">Add</button>
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
      inputTag: `<input style="font-size:18px" value="Hihi"/>`,
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
    },
    changeTitle: function(event) {
      this.name = event.target.value;
    },
    checkNumber: function(event) {
      if (isNaN(event.target.value)) {
        alert("Plz enter number");
        event.target.value = 0;
      }
    },
    addPerson: function() {
      alert("Hello");
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
  width: 300px;
}
.btn {
  width: 80px;
  height: 045px;
  font-size: 18px;
  border-radius: 5%;
  background-color: aquamarine;
}
.red {
  color: red;
}
.blue {
  color: blue;
}
</style>
