<template>
      <input :value="value" @input="updateInput">
</template>

<script lang="js">
export default {
  name: 'MyInput',
  props: {
    value: [String, Number]
  },
  methods: {
    updateInput(event) {
      this.$emit('update:value', event.target.value)
    }
  }
}

</script>

<style lang="scss" scoped>
@import  './style.scss';
</style>