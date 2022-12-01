<script lang="js">
import FormItem from "@/components/organisms/Form/FormItem.vue"
import ToDoList from "@/components/organisms/List/ToDoList.vue"
import Search from "@/components/molecules/Search/Search.vue"
import {useItems} from "@/hooks/useItems"
import {useSearch} from "@/hooks/useSearch"
import {useItemsUpdate} from "@/hooks/useItemsUpdate"
import axios from 'axios'
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
import {ref} from 'vue'

export default {
  components: {
    FormItem,
    ToDoList,
    Search
  },
  data() {
    return {
      modal: false
    }
  },
  methods: {
    ...mapMutations({
      setSearchValue: 'setSearchValue',
    }),
    ...mapActions({
        fetchItems: 'fetchItems',
        loadMoreItems: 'loadMoreItems',
    }),
    openModal() {
      this.modal = true
    },
    addItem() {
      this.modal = false
    }
  },
  computed: {
    ...mapState({
        loading: state => state.loading,
        searchValue: state => state.searchValue,
    }),
  }, 
  mounted() {
    this.fetchItems()
  }
}

</script>

<template>
  <div class="about">

    <Button @click="openModal">
      добавить
    </Button>

    <MyInput 
      style="margin-top: 1rem"
      :value="searchValue" 
      @update:value="setSearchValue"/>

    <MyModal v-model:show="modal">
      <FormItem @create="addItem"/>
    </MyModal>
    
    
    <ToDoList 
      v-if="!loading"/>
    
    <h2 v-if="loading">
      загрузка...
    </h2>


    <div v-intersection="loadMoreItems" class="observer"></div>
  </div>
</template>

<style lang="scss" scoped>
@import  './style.scss';

</style>
