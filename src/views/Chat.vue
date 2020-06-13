<template>
  <section class="chat">
    <div class="chat__wrapper" ref="chat">
      <app-message :messages="dialog.parts"/>
    </div>
    <app-loading/>
  </section>
</template>

<script>
import AppMessage from '@/components/messages/Message.vue'
import AppLoading from '@/components/main/Loading'

export default {
  name: 'Dialog',
  components: {
    AppMessage,
    AppLoading
  },
  data: () => ({}),
  computed: {
    dialog () {
      const id = this.$route.params.id
      return this.$store.getters.getDialogById(id)
    },
    sendStatus () {
      return this.$store.getters.getMessageStatus
    }
  },
  watch: {
    sendStatus (el) {
      if (el === false) {
        this.scrollBottom()
      }
    },
    $route (to, from) {
      setTimeout(() => {
        this.scrollBottom()
      })
    }
  },
  beforeMount () {
    const id = this.$route.params.id
    if (id) {
      this.$store.dispatch('setCurrentDialog', id)
    }
  },
  mounted () {
    this.scrollBottom()
  },
  methods: {
    scrollBottom () {
      const chatArea = this.$refs.chat
      chatArea.scrollTop = chatArea.scrollHeight
    }
  }
}
</script>

<style lang="scss" scoped>
  .chat {
    position: relative;
    display: flex;
    align-items: flex-end;
    height: calc(100% - 79px);

    &__wrapper {
      padding: 43px 16px 43px 39px;
      width: 100%;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      flex: 1;
      height: 100%;
    }
  }
</style>
