<template>
  <section class="messages messages--size messages--shadow">
  </section>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  }
}
</script>

<style lang="scss" scoped>
  .messages {
    &--size {
      flex-grow: 1;
    }
    &--shadow {
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    }
  }
</style>
