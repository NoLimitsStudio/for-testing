<template>
  <div id="app">
    <app-dialogs-list/>
    <div class="chat-container">
      <router-view/>
      <app-input/>
    </div>
  </div>
</template>

<script>
import AppDialogsList from '@/components/main/DialogsList'
import AppInput from '@/components/main/Input'

export default {
  components: {
    AppDialogsList,
    AppInput
  }
}
</script>

<style lang="scss">
  #app {
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: stretch;
  }
  .chat-container {
    height: 100%;
    flex-grow: 1;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  }
</style>
