// the address of our rails backend, saved as a constant value, because we never want to accidentally change it
const BASE = 'http://18.222.34.196:3000'

let getCats = function() {
// the function name getCats is intended to remind you of the restful rails route --> GET '/cats'.
	return fetch(BASE + '/cats') // this would be equivalent to going to localhost:3000/cats in your browser. Do that - - what do you see?
		.then((resp) => {
           	// resp will be whatever you saw on the page localhost:3000/cats, it is the result of our fetch call
            let json = resp.json() // we want to make sure what we have is just the json part of the response
			console.log(json);
			return json
		})
}

let createCat = function(cat) {
	return fetch(BASE + '/cats', {
		body: JSON.stringify(cat),  // <- we need to stringify the json for fetch
		headers: {  // <- We specify that we're sending JSON, and expect JSON back
			'Content-Type': 'application/json'
		},
		method: "POST"  // <- Here's our verb, so the correct endpoint is invoked on the server
	})
		.then((resp) => {
			let json = resp.json()

			return json
		})
}

let searchCat = function(id) {
	return fetch(BASE + `/cats/${id}`, {
		headers: { 
			'Content-Type': 'application/json'
		},
		method: "GET"
	})
		.then((resp) => {
            let json = resp.json()
			return json
		})
}
 let updateCat = function(cat, id) {
 	return fetch(BASE + `/cats/${id}`, {
 		body: JSON.stringify(cat),
 		headers: {'Content-Type': 'application/json'},
 		method: "PUT"
 	})
 		.then((resp) => {
 			let json =resp.json()
 			return json
 		})
 }

export {
    getCats, createCat, searchCat, updateCat
}