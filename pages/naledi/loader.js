varout.appendChild(cce('li', 'loader.js running'));

function logSha (r) {
	varout.appendChild(cce('li', r.object.sha));
}

function errore (e) {
	console.log(e);
}

fetch(branchRefUrl())
	.then(function(response) {
    return response.json();
  })
	.then(logSha)
	.catch(errore);
