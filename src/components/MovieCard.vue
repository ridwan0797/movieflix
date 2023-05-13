<template>
  <div
    class="movie-card bg-black hover:bg-gray-950 cursor-pointer"
    @click="$router.push(`/view/${movie.id}`)"
  >
    <img :src="getImageUrl(movie.poster_path)" class="w-full rounded-lg" :alt="movie.title" />

    <div class="movie-details mt-3">
      <h2 class="movie-title">{{ movie.title }}</h2>
      <p class="movie-year">{{ movie.release_date.slice(0, 4) }}</p>
      <p class="movie-rating">Rating: {{ movie.vote_average }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieCard',
  props: {
    movie: {
      type: Object,
      required: true
    }
  },
  setup() {
    const getImageUrl = (posterPath) => {
      if (!posterPath) {
        return '' // Return a placeholder image or handle the case when there is no image available
      }
      return `https://image.tmdb.org/t/p/w500${posterPath}`
    }

    return {
      getImageUrl
    }
  }
}
</script>

<style scoped>
.movie-card {
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  padding: 16px;
  margin: 16px;
}

.movie-poster {
  width: 200px;
  height: 300px;
  object-fit: cover;
  margin-bottom: 16px;
}

.movie-title {
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: white;
}

.movie-year,
.movie-rating {
  margin: 4px 0;
}

.hover\:scale-105:hover {
  transform: scale(1.05);
}
</style>
