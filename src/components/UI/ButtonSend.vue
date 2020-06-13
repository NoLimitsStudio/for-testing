<template>
    <div class="button-send" @click="sendMessage">
      <img v-if="!status" class="button-send__image" src="@/assets/images/send.svg" alt="Send message" />
      <img v-else class="button-send__image rotate" src="@/assets/images/load.svg" alt="Send message" />
    </div>
</template>

<script>
export default {
  name: 'ButtonSend',
  props: {
    status: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    sendMessage () {
      this.$emit('sendMessage')
    }
  }
}
</script>

<style lang="scss" scoped>
  .button-send {
    height: 79px;
    width: 80px;
    background: #398BFF;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &__image {
      height: 18px;
      width: 22px;
      margin-left: 3px;
      animation-duration: 1s;
    }
  }
</style>
