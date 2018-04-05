<template>
  <section class="container">

    <div class="container">
        <div class="well"> 
            <div class="row">
                <div class="col-md-12">
                    <div class="row hidden-md hidden-lg"><h1 class="text-center" >{{movie.Title}}</h1></div>
                        
                    <div class="pull-left col-md-4 col-xs-12 thumb-contenido"><img class="center-block img-responsive" :src='movie.Poster' /></div>
                    <div class="">
                        <small><strong>Year</strong>: {{movie.Year}}</small><br>
                        <small><strong>Genre</strong>: {{movie.Genre}}</small>
                        <hr>
                        <p class="text-justify">{{movie.Plot}}</p></div>
                </div>
            </div>
        </div>
    </div>

  </section>
</template>

<script>
import search from '~/components/search.vue'

export default {
  fetch ({ store, params }) {
    store.dispatch('getMovie', params.id)
  },
  computed: {
    movie () {
      return this.$store.state.movie
    }
  }
}
</script>