<template>
  <Nav />
  <router-view/>
</template>

<script>
import Nav from './components/organisms/Nav/Nav.vue'
export default {

  components: {
    Nav,
  }
}
</script>

<style lang="scss">

@import url('./App.scss');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: blue;
  }

  a.router-link-exact-active {
    color: red;
  }
}

</style>
