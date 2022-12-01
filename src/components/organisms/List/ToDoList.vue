<template>

    
      <ul v-if="searchList.length">
          <TransitionGroup  name="list_item">
            <Item 
              :item="item" 
              v-for="item in searchList" 
              :key="item.id"
              @remove="removeItem"/>
          </TransitionGroup>
      </ul>
    

    
    <h2 v-else style="color: red">нет записей</h2>

</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import Item from "../../molecules/Item/Item.vue"

export default {
  components: {
    Item
  },
  props: {

  },
  methods: {
    ...mapMutations({
      removeItem: 'removeItem',
    }),
  },
  computed: {
    ...mapGetters({
      searchList: 'searchList'
    }),
  }, 
}

</script>

<style lang="scss" scoped>
@import  './style.scss';

</style>