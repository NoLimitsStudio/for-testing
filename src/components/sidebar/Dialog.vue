<template>
  <div>
    <div
      v-for="dialog of dialogs"
      :key="dialog.id"
      class="dialog-block dialog-block--padding"
      :class="{'dialog-block--active': dialog.id === currentDialog }"
      @click="openDialog(dialog.id)"
    >
      <div class="dialog-block__header">
        <h2 class="dialog-block__title">{{ dialog.subject }}</h2>
        <div class="space"></div>
        <div class="date dialog-block--grey">{{ dialog.created | commonDate }}</div>
      </div>
      <p class="dialog-block__content">{{ dialog.parts[0].text | shorten }}</p>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'Dialog',
  filters: {
    shorten (el) {
      // Max string length
      const maxLength = 60
      if (el.length > maxLength) {
        return el.slice(0, maxLength) + '...'
      }
      return el
    },
    commonDate (el) {
      return moment(el).locale('ru').format('LL').slice(0, -3).toUpperCase()
    }
  },
  props: {
    dialogs:
      {
        type: Array,
        required: true
      }
  },
  data: () => ({
  }),
  computed: {
    currentDialog () {
      return +this.$store.getters.getCurrentDialog
    }
  },
  methods: {
    openDialog (el) {
      this.$store.dispatch('setCurrentDialog', el)
      this.$store.dispatch('setLoading', true)
      setTimeout(() => {
        this.$router.push(`/${el}`)
        this.$store.dispatch('setLoading', false)
      }, 1500)
    }
  }
}
</script>

<style lang="scss">
  .dialog-block {
    border-bottom: 1px solid #E9EDF2;
    cursor: pointer;

    &__header {
      display: flex;
    }

    &__title {
      font-size: 14px;
      font-weight: 500;
      color: #35383D;
    }

    &__content {
      font-size: 13px;
      color: #7D8790;
    }

    &--padding {
      padding: 24px 20px;
    }

    &--lightgrey {
      color: #D2D8DE;
    }

    &--grey {
      color: #B7C0C8;
    }

    &--ml10 {
      margin-left: 10px;
    }

    &--active {
      background-color: #fff;
      border-left: 2px solid #398BFF;
    }
  }
</style>
