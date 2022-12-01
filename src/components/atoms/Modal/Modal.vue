<template>
    <div class="modal" v-if="show" @click.stop="closeModal">
        <div @click.stop class="modal__content">
          <slot></slot>
        </div>
    </div>
</template>

<script lang="js">
import toggleMixin from '@/mixins/toggleMixin';

export default {
  name: 'MyModal',
  mixins: [toggleMixin]
}

</script>

<style lang="scss">
@import  './style.scss';

</style>