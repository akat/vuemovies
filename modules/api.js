const axios = require('axios')

var options = {
  baseURL: 'http://www.omdbapi.com/?apikey=e1abeae4',
  timeout: 1000
}

axios.create(options)

const api = {
    search: function (keyword) {
        return axios.get(`${options.baseURL}&s=${keyword}`)
    },

    getMovie: function (id) {
        return axios.get(`${options.baseURL}&i=${id}`)
    }
};

module.exports = api