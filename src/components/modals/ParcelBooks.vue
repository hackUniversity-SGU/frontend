<template>
  <sui-modal :open="opened" @clickAwayModal="closeCallback" @displayChanged="closeCallback">
    <sui-modal-header class="modal-header">{{ title }}</sui-modal-header>
    <sui-modal-content class="modal-content" scrolling>
      <slot name="content"></slot>
    </sui-modal-content>
  </sui-modal>
</template>

<script>
export default {
  props: {
    title: String,
    opened: Boolean,
    closeCallback: Function
  },
  computed: {
    isOpen() {
      return this.opened;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
