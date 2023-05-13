<template>
  <div class="w-screen h-screen pt-12">
    <div class="text-3xl text-white font-semibold mt-10 ml-12">POPULAR MOVIE</div>
    <div class="p-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
      <movie-card v-for="(row, rowKey) in record" :key="rowKey" :movie="row" />
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue'
// import useAxios from '../composables/axios'
import useRecord from '../composables/record'
import MovieCard from '../components/MovieCard.vue'

export default {
  components: { MovieCard },
  setup() {
    // const axios = useAxios()

    const { record, getData } = useRecord('GET', 'https://api.themoviedb.org/3/movie/popular')

    onMounted(() => {
      getData()
    })

    return {
      record,
      getData
    }
  }
}
</script>
