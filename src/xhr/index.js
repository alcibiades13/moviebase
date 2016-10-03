import Response from 'superagent';

let getMoviesAPI = function(searchKey) {
	let url = "http://www.omdbapi.com/?s=" + searchKey + "&r=json";
	return Response.get(url);
}

let getSingleMovie = function(id) {
	let url = "http://www.omdbapi.com/?i=" + id + "&r=json";
	return Response.get(url);
}

export { getMoviesAPI, getSingleMovie };