<template>
  <header class="header">
    <h1 class="text-white text-2xl font-medium z-50">{{ title }}</h1>
    <button @click="toggleSearch" class="search-button">
      <i class="fas fa-search"></i>
    </button>

    <div class="text-lg cursor-pointer mr-7" @click="handleSearch">Search</div>
  </header>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'HeaderComponent',
  emits: ['search'],
  setup(props, vm) {
    const title = 'MOVIEFLIX'
    const showSearch = ref(false)

    const toggleSearch = () => {
      showSearch.value = !showSearch.value
    }

    const handleSearch = () => {
      ;('hey')
      vm.emit('search')
    }

    return {
      title,
      showSearch,
      handleSearch,
      toggleSearch
    }
  }
}
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background-color: black;
}

.title {
  margin: 0;
}

.search-button {
  border: none;
  background-color: transparent;
  cursor: pointer;
}

.search-input {
  width: 200px;
  padding: 8px;
  margin-left: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
