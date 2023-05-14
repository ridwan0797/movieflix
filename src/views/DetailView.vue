<template>
  <div
    class="w-screen h-screen top-0 left-0 bg-center bg-no-repeat bg-cover"
    :style="`background-image: url('https://image.tmdb.org/t/p/w1280${record.backdrop_path}');`"
  >
    <div class="w-screen h-screen absolute bg-black opacity-50"></div>
    <!-- Background Image -->

    <div class="w-full h-full absolute top-0 left-0"></div>
    <!-- Overlay -->

    <div class="absolute bottom-0 w-full" v-if="record">
      <div class="mx-auto py-8 mb-32">
        <div class="flex flex-col md:flex-row p-5 md:p-2 lg:p-4">
          <div class="md:w-2/3 mt-4 md:mt-0 md:ml-8">
            <h2 class="text-6xl font-bold text-white">{{ record.title }}</h2>
            <div class="flex items-center mt-2">
              <span class="text-white">{{ formatDate(record.release_date) }}</span>
              <span class="mx-2">&bull;</span>
              <span class="text-white">{{ record.runtime }} min</span>
              <span class="mx-2">&bull;</span>
              <span class="text-white">{{ getGenresText(record.genres) }}</span>
            </div>
            <p class="mt-4 text-white">{{ record.overview }}</p>
          </div>
        </div>

        <div class="hidden md:flex lg:flex items-center mt-2 p-5 md:p-2 lg:p-12">
          <span class="text-white">{{ record.status }}</span>
          <span class="mx-2">&bull;</span>
          <span class="text-white">{{ record.tagline }}</span>
          <span class="mx-2">&bull;</span>
          <a :href="record.homepage" class="text-white underline" target="_blank">
            {{ record.homepage }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import useRecord from '../composables/record'

export default {
  setup() {
    const route = useRoute()
    const id = route.params.id
    const { record, getData } = useRecord('GET', `https://api.themoviedb.org/3/movie/${id}`)

    const getGenresText = (genres) => {
      return genres?.map((genre) => genre.name).join(', ')
    }

    const formatDate = (date) => {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString(undefined, options)
    }

    onMounted(() => {
      getData()
    })

    return {
      id,
      record,
      getGenresText,
      formatDate
    }
  }
}
</script>

<style scoped>
.movie-details .overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); /* Adjust the opacity as needed */
}
</style>
