<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import DialogSearch from './components/DialogSearch.vue'
import HeaderComponent from './components/HeaderComponent.vue'
</script>

<template>
  <header-component v-if="$route.meta.headers" @search="() => ($refs.dialog.showDialog = true)" />
  <DialogSearch ref="dialog" />

  <RouterView class="mt-5" />
</template>

<script>
export default {
  components: { HeaderComponent },
  setup() {
    const dialog = ref()

    return {
      dialog
    }
  }
}
</script>

<style scoped>
header {
  position: absolute;
  left: 0px;
  top: 0px;
  line-height: 1.5;
  width: 100vw;
  background-color: #2e2d2d;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  /* header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  } */

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
