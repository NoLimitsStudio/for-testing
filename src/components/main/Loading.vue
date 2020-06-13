<template>
  <transition name="fade">
    <div class="loading" v-if="loading">
      <div class="loading__wrapper">
        <img class="loading__circle rotate" src="@/assets/images/rotate-option.svg" alt="Loading...">
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Loading',
  computed: {
    loading () {
      return this.$store.getters.getLoadingStatus
    }
  }
}
</script>

<style lang="scss" scoped>
.loading {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: #fff;
  &__wrapper {
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__circle {
    height: 45px;
    width: 45px;
    animation-duration: 2s;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
