<template>
  <nav>
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/Layout1">Layout Problem 1</router-link>
      </li>
      <li>
        <router-link to="/Layout2">Layout Problem 2</router-link>
      </li>
      <li>
        <router-link to="/Hook">Hook Problem</router-link>
      </li>
      <li>
        <router-link to="/API">API Explanation</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style scoped>
ul {
  list-style: none;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
