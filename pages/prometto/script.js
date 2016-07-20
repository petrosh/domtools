var section = document.querySelector('section');

function get(url) {
	document.body.classList.add('spinner');
	// Return a new promise.
	return new Promise(function(resolve, reject) {
		// Do the usual XHR stuff
		var req = new XMLHttpRequest();
		req.open('GET', '../pages/prometto/book/' + url);

		req.onload = function() {
			document.body.classList.remove('spinner');
			// This is called even on 404 etc
			// so check the status
			if (req.status == 200) {
				// Resolve the promise with the response text
				resolve(req.response);
			}
			else {
				// Otherwise reject with the status text
				// which will hopefully be a meaningful error
				reject(Error(req.statusText));
			}
		};

		// Handle network errors
		req.onerror = function() {
			reject(Error("Network Error"));
		};

		// Make the request
		req.send();
	});
}

function addTextToPage(text) {
	section.innerHTML += text;
}
function addHtmlToPage(text) {
	section.innerHTML += text;
}
function getJSON(url) {
	return get(url).then(JSON.parse);
}

getJSON('story.json').then(function(story) {
	addHtmlToPage(story.heading);

	// Take an array of promises and wait on them all
	return Promise.all(
		// Map our array of chapter urls to
		// an array of chapter json promises
		story.chapterUrls.map(getJSON)
	);
}).then(function(chapters) {
	// Now we have the chapters jsons in order! Loop through…
	chapters.forEach(function(chapter) {
		// …and add to the page
		addHtmlToPage('<h3>Chapter ' + chapter.chapter + '</h3>');
		addHtmlToPage(chapter.html);
	});
}).catch(function(err) {
	// catch any error that happened so far
	addTextToPage('<p>Argh, broken: ' + err.message + '</p>');
}).then(function() {
	addTextToPage('<p>All done</p>');
});
