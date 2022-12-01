<template>
  <div class="home">
    <div @click="changeText">
        {{title}}
    </div>
  </div>
</template>

<script lang="js">

export default {
  data() {
    return {
      title: 'homeeeee'
    }
  },
  methods: {
    changeText() {
      this.title = 'change text'
    }
  },
}

</script>

<style lang="scss" scoped>
@import  './style.scss';

</style>

