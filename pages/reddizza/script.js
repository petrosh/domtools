function ricarica (e) {
	window.location.reload();
}

function dataHandler (r) {
	return r.json();
}

function resolve (a) {
	var post = a[0].data.children[0].data;
	var el = '<h1>' + post.title + '</h1>';
	el += '<p>score: ' + post.score + ' – subreddit: ' + post.subreddit + ' – comments: ' + post.num_comments + '<br>created: ' + new Date(post.created_utc * 1000) + ' by ' + post.author + '</p>';
	document.querySelector('.markdown-body').innerHTML += el + '<br>';
	document.querySelector('.markdown-body').innerHTML += htmlDecode(post.selftext_html);
	document.body.classList.remove('request');
}

var p = document.createElement('p');
var hash = window.location.hash.substring(1);
var demoButton = document.querySelector('a[href$=levels]');

if (demoButton) {
	demoButton.addEventListener("click", ricarica);
}

if (hash) {
	if (hash.slice(-1) === '/') {
		hash = hash.slice(0,-1);
	}
	document.body.classList.add('request');
	fetch(hash + '.json').then(dataHandler).then(resolve);
}

function htmlDecode(input){
	var e = document.createElement('div');
	e.innerHTML = input;
	return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
}
