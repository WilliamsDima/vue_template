<template>
    <div>
        <MyInput 
        v-model:value.trim="item.title"
        type="text" 
        placeholder="todo" />
        <Button @click="addItem">
          add
        </Button>
    </div>
</template>

<script lang="js">
import FormItem from "@/components/organisms/Form/FormItem.vue"
import { mapMutations } from 'vuex'

export default {
  props: {

  },
  data() {
    return {
        item: {
            title: ''
        }
    }
  },
  methods: {
    ...mapMutations({
      addItemHandler: 'addItem',
    }),
    openModal() {
      this.modal = true
    },
    addItem() {
        this.item.id = +new Date()

        this.addItemHandler(this.item)

        this.item = {
            title: ''
        }

        this.$emit('create', false)
    }
  },
}

</script>

<style lang="scss">
@import  './style.scss';

</style>