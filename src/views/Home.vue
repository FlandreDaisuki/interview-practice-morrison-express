<template>
  <nav>
    <ul>
      <li>
        <router-link to="Layout1">Layout Problem 1</router-link>
      </li>
      <li>
        <router-link to="Layout2">Layout Problem 2</router-link>
      </li>
      <li>
        <router-link to="Hook">Hook Problem</router-link>
      </li>
      <li>3 - API</li>
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
</style>
