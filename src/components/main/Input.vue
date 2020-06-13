<template>
  <section class="input">
    <div class="input__block">
      <textarea v-model="text" placeholder="Введите текст..." :disabled="sending"></textarea>
    </div>
    <div class="input__button-send">
      <app-button-send @sendMessage="sendMessage()" :status="sending" />
    </div>
  </section>
</template>

<script>
import AppButtonSend from '@/components/UI/ButtonSend'
export default {
  name: 'Input',
  components: {
    AppButtonSend
  },
  data: () => ({
    text: ''
  }),
  computed: {
    sending () {
      return this.$store.getters.getMessageStatus
    }
  },
  methods: {
    sendMessage () {
      if (this.text.trim().length > 0) {
        this.$store.dispatch('setSending', true)

        new Promise((resolve, reject) => {
          // через 1 секунду готов результат: result
          setTimeout(() => {
            this.$store.dispatch('pushMessage', this.text)
            this.text = ''
            resolve()
          }, 1000)
        }).then(() => {
          this.$store.dispatch('setSending', false)
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.input {
  display: flex;
  width: 100%;
  align-items: stretch;
  height: 79px;

  &__block {
    flex-grow: 1;
    height: 100%;
    overflow: hidden;
    border-top: 1px solid #E9EDF2;

    textarea {
      height: 100%;
      width: 100%;
      resize: none;
      padding: 15px 33px;
      outline: none;
      overflow: auto;
      border: none;
    }
  }
}
</style>
