<template>
  <section class="sidebar sidebar--style">
    <div class="sidebar__block count">Сообщения <span class="count__number">{{ count }}</span></div>
    <app-dialog :dialogs="dialogs" />
  </section>
</template>

<script>
import AppDialog from '@/components/sidebar/Dialog.vue'
export default {
  name: 'MessageList',
  components: {
    AppDialog
  },
  data: () => ({}),
  computed: {
    dialogs () {
      return this.$store.getters.getDialogs
    },
    count () {
      return this.dialogs.reduce((sum, e) => sum + e.parts.length, 0)
    }
  }
}
</script>

<style lang="scss">
  .sidebar {
    &--style {
      width: 300px;
      background: #F3F6F8;
    }
    &__block {
      padding: 24px 20px;
      border-bottom: 1px solid #E9EDF2;
    }
  }
  .count {
    &__number {
      color: #B7C0C8;
      margin-left: 10px;
    }
  }
</style>
