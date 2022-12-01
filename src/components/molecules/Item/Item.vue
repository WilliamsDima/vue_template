<template>
    <li>
      <div>
        <strong>
          {{item.id}}.
        </strong>
      </div>
      <div>
          {{item.title}}
      </div>

      <Button @click="$emit('remove', item)">
        delete
      </Button>
    </li>
</template>

<script lang="js">

export default {
  props: {
    item: {
      type: Object,
      requires: true
    }
  },
  data() {
    return {

    }
  },
  methods: {

  },
}

</script>

<style lang="scss" scoped>
@import  './style.scss';


</style>