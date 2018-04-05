<template>
  	<div class="row col-md-12">
           <div id="custom-search-input">
                <div class="input-group">
                    <input type="text" class="search-query form-control" placeholder="Search" v-model="Query" />
                    <span class="input-group-btn">
                        <button class="btn btn-danger" type="button">
                            <span class=" glyphicon glyphicon-search"></span>
                        </button>
                    </span>
                </div>
            </div>
	</div>
</template>

<script>
export default {
  computed: {
    Query: {
      get () {
        return this.$store.state.query
      },
      set (value) {
        this.$store.commit('setQuery', value)
        this.$store.dispatch('getMovies')
      }
    }
  }
}
</script>