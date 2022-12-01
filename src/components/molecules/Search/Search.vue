<template>
        <MyInput 
        style="margin-top: 1rem"
        v-model:value.trim="searchValue"
        type="text" 
        placeholder="search" />
</template>

<script lang="js">
import FormItem from "@/components/organisms/Form/FormItem.vue"

export default {
  props: {
    searchValue: [String]
  },
  data() {
    return {

    }
  },
  methods: {

  },
}

</script>

<style lang="scss">
@import  './style.scss';

</style>