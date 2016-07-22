function errore (e) {
	monitor('error: ' + e);
}

function jsonize (response) {
	return response.json();
}

function getRef (branch) {
	var b = branch || 'gh-pages';
	var options = {
		header: {'Accept': 'application/vnd.github.v3+json'},
		cache: 'no-cache'
	};
	return fetch(branchRefUrl(b), options)
		.then(jsonize)
		.then(function (head) {
			return head.object.sha;
		})
		.then(function (ref) {
			branchRef[b] = ref;
			return ref;
		})
		.catch(errore);
}

monitor('loader.js running');

getRef()
.then(monitor)
.catch(errore);
