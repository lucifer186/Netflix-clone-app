const API_KEY = "239c87926785407551145a5d9c2c9ad6"

const request = {
 fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
 fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_network=213`,
 fetchTopReted: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
fetchRemonceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
fetchDocumentriesMovies: `/discover/movie?api_key=${API_KEY}&with_genres=99`

}

export default request