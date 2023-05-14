<template>
  <transition name="dialog-fade">
    <div class="dialog-overlay relative" v-if="showDialog">
      <button class="close-button absolute top-3 right-5" @click="showDialog = false">Close</button>

      <div class="dialog-content">
        <div class="dialog-center bg-transparent">
          <input
            type="text"
            v-model="searchTerm"
            placeholder="Search"
            class="search-input w-90 md:w-300 lg:w-700 h-16"
          />
        </div>

        <div class="mt-7">
          <div v-if="loading">Loading...</div>

          <div v-if="error">{{ error }}</div>

          <div class="scroll-container">
            <div v-if="record?.length" class="scroll-content">
              <div
                v-for="movie in record"
                :key="movie.id"
                class="flex flex-col gap-2 cursor-pointer bg-transparent hover:bg-gray-300 text-white hover:text-black bg-black"
                @click="
                  () => {
                    $router.push(`/view/${movie.id}`)
                    showDialog = false
                  }
                "
              >
                <div class="p-3">
                  <div class="movie-title text-start">{{ movie.title }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { ref, watch } from 'vue'
import useRecord from '../composables/record'

export default {
  name: 'DialogSearch',
  setup() {
    const showDialog = ref(false)
    const searchTerm = ref('')

    const { record, getData, loading, error } = useRecord(
      'GET',
      `https://api.themoviedb.org/3/search/movie?query=${searchTerm.value}`,
      {}
    )

    const getMovie = (val) => {
      if (searchTerm.value?.length > 0) return getData(val)
      return
    }

    watch(searchTerm, (newVal) => {
      if (newVal.length > 0) {
        getMovie(newVal)
      }
      record.value = []
    })

    return {
      loading,
      error,
      showDialog,
      searchTerm,
      record,
      getMovie,
      getData
    }
  }
}
</script>

<style scoped>
.close-button {
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: white;
}

.dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.dialog-content {
  padding: 20px;
  border-radius: 8px;
  text-align: center;
}

.dialog-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.search-input {
  padding: 10px;
  border-radius: 4px;
  border: 1px solid white;
  background-color: black;
  color: white;
}

.scroll-container {
  height: 280px; /* Set the desired height for the scrollable container */
  overflow-y: hidden; /* Ena
}

.scroll-content {
  padding: 10px; /* Add padding to create some spacing */
}

.movie-item {
  margin-bottom: 10px; /* Add margin between movie items */

  display: flex; /* Use flexbox for the movie info layout */
  flex-direction: row;
  justify-content: flex-start;
}

.movie-info {
  display: flex; /* Use flexbox for the movie info layout */
  flex-direction: column;
}

.movie-title {
  font-weight: bold;
}

.movie-details {
  margin-left: 10px; /* Add spacing between the movie title and details */
}

.movie-release-date,
.movie-vote-average {
  margin-top: 5px; /* Add spacing between the release date and vote average */
}
.dialog-fade-enter-active,
.dialog-fade-leave-active {
  transition: opacity 0.3s;
}

.dialog-fade-enter {
  opacity: 0;
}

.dialog-fade-enter-to {
  opacity: 1;
}

.dialog-fade-leave {
  opacity: 1;
}

.dialog-fade-leave-to {
  opacity: 0;
}
</style>
