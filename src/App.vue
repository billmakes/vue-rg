<template>
  <div id="app">
    <Resume></Resume>
    <div class="footer">
      <span>
        Made with
        <a href="https://github.com/billmakes/vue-rg" target="_blank"
          >Resume Generator</a
        >
        by
        <a href="https://github.com/billmakes" target="_blank">@billmakes</a>
      </span>
    </div>
  </div>
</template>

<script>
import Resume from './components/Resume.vue'

export default {
  name: 'app',
  components: {
    Resume
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
body {
  background: $background-color;
}
.footer {
  display: flex;
  justify-content: center;
  margin: 1em;
  color: #333;
  @include sm {
    display: none;
  }
}
</style>
