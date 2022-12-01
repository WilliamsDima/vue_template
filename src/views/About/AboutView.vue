<template>
  <div class="about">

    <Button @click="openModal">
      добавить
    </Button>

    <MyInput 
      style="margin-top: 1rem"
      v-model:value.trim="searchValue"/>

    <MyModal v-model:show="modal">
      <FormItem @create="addItem"/>
    </MyModal>

    <ToDoList 
    v-if="!loading"
    v-bind:items="searchList"
    @remove="removeItem"/>
    
    <h2 v-if="loading">
      загрузка...
    </h2>


    <div v-intersection="loadMorePosts" class="observer"></div>
    <!-- <div class="paginations">
      <div 
      class="page" 
      v-for="pageNumber in totalPage" 
      :key="pageNumber"
      :class="{
        'current-page': page === pageNumber
      }"
      @click="changePage(pageNumber)">
      {{pageNumber}}</div>
    </div> -->
  </div>
</template>

<script lang="js">
import FormItem from "@/components/organisms/Form/FormItem.vue"
import ToDoList from "@/components/organisms/List/ToDoList.vue"
import Search from "@/components/molecules/Search/Search.vue"
import axios from 'axios'

export default {
  components: {
    FormItem,
    ToDoList,
    Search
  },
  data() {
    return {
      items: [
        // { id: 1, title: 'First' },
        // { id: 2, title: 'Second' },
        // { id: 3, title: 'Three' },
      ],
      modal: false,
      loading: false,
      searchValue: '',
      page: 1,
      limit: 10,
      totalPage: 0,

    }
  },
  methods: {
    addItem(item) {
      this.items.push(item)
      this.modal = false
    },
    removeItem(item) {
      this.items = this.items.filter((it) => it.id !== item.id)
    },
    openModal() {
      this.modal = true
    },
    async fetchPosts() {
      try {
        this.loading = true
        const {data, headers} = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: this.limit
          }
        })

        this.totalPage = Math.ceil(headers['x-total-count'] / this.limit)
        this.items = data
        
      } catch (error) {
        console.log('fetchPosts', error);
      } finally {
        this.loading = false
      }
    },
    async loadMorePosts() {
      try {
        this.page += 1
        const {data, headers} = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: this.limit
          }
        })

        
        this.totalPage = Math.ceil(headers['x-total-count'] / this.limit)
        this.items = [...this.items, ...data]
        
      } catch (error) {
        console.log('fetchPosts', error);
      }
    },
    // changePage(pageNumber) {
    //   this.page = pageNumber
    // }
  },
  mounted() {
    this.fetchPosts();


    
  },
  computed: {
    searchList() {
      return [...this.items].filter(item => item.title.toLowerCase().includes(this.searchValue.toLowerCase()))
    }
  },
  watch: {
    // page() {
    //   this.fetchPosts()
    // }
  },
}

</script>

<style lang="scss" scoped>
@import  './style.scss';

</style>
