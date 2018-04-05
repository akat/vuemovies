<template>
  <section class="container">
  
  <search></search>
  <card :movies="Movies"></card>
  

  </section>
</template>

<script>
import search from '~/components/search.vue'
import card from '~/components/card.vue'

export default {
  components: {
    search,
    card
  },
  fetch ({store}) {
    store.dispatch('getMovies')
  },
  computed: {
    Movies () {
      return this.$store.state.movies
    }
  }
}
</script>


