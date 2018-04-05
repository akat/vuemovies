<template>
<div class="row">

<div class="card" style="width: 18rem; margin:20px" v-for="(movie, i) in movies" :key="i">
  <img class="card-img-top" :src="movie.Poster" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">{{ movie.Title}}</h5>
    <p class="card-text">Year: {{ movie.Year }}</p>
    <nuxt-link class="btn btn-primary" :to="{ path: 'movie/' + movie.imdbID }">more info</nuxt-link>
  </div>
</div>

</div>
</template>

<script>
export default {
  props: {
      movies : Array
  }
}
</script>