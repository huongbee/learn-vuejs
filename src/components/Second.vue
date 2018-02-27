<template>

  <div class="second-component">
    <h1>Second Component</h1>
    <ul class="person"><li v-for="person in persons" :key="person.age" v-on:click="person.show=!person.show">
        <strong>{{person.name.toUpperCase()}}</strong>
    <p v-if="person.show">Age: {{person.age}}</p>
    </li>
    </ul>
    <!-- subject from App.vue and must  use props: ["subjects"] at line 29-->
    <ul class="subject">
        <li v-for="subject in subjects" :key="subject">{{subject}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      persons: [
        { name: "Huong", age: 22, show: false },
        { name: "Le", age: 12, show: false },
        { name: "Hong", age: 24, show: false },
        { name: "Tho Ngoc", age: 10, show: false }
      ]
    };
  },
  props: ["subjects"]
};
</script>
<style scoped>
.second-component {
  text-align: left;
  font-weight: 500;
  margin: 50px;
}
.person,
.subject {
  display: flex;
  margin: 2px;
  height: 100px;
}
li {
  flex: 1;
  border: 1px solid #ccc;
  list-style-type: none;
  text-align: center;
  padding: 20px 30px;
}
.person li {
  cursor: pointer;
  color: blueviolet;
}
</style>
