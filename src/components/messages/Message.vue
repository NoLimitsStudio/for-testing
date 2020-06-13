<template>
  <div>
    <div class="message" v-for="message of messages" :key="message.id"
         :class="{'message--own': message.author === messages[0].author}">
      <div>{{ message.text }}</div>
      <div class="message__info">
        <div class="message__author">{{ message.author }}</div>
        <div class="message__date date">{{ message.created }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Message',
  props: {
    messages: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .message {
    position: relative;
    padding: 21px 21px 16px 22px;
    border-radius: 8px 8px 8px 0;
    background-color: #F6F7F9;
    width: fit-content;
    max-width: 60%;
    margin: 32px 0;
    word-break: break-all;

    &__info {
      display: flex;
      align-items: center;
      position: absolute;
      bottom: -20px;
      left: 0;
      width: max-content;
    }

    &__author {
      font-size: 13px;
      font-weight: 500;
      margin-right: 12px;
    }

    &__date {
      color: #B7C0C8;
    }

    &--own {
      margin-left: auto;
      margin-right: 0;
      background-color: #E9F5F4;
      border-radius: 8px 8px 0 8px;

      & > .message__info {
        left: auto;
        right: 0;
      }
    }
  }
</style>
