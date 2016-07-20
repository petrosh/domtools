var t = new Date().toISOString();
var section = document.querySelector('section');
var p = document.createElement('p');

var result = fetch('https://api.github.com');

result.then(function(response) {
	p.innerHTML += 'response: ' + response.statusText + '<br>content-type header: ' + response.headers.get('Content-Type');
	return response.text();
}).then(function(text) {
	console.log(text);
	var response = JSON.parse(text);
	p.innerHTML += '<br>current_user_url: ' + response.current_user_url;
	section.appendChild(p);
}).catch(function(ex) {
	console.log('failed', ex);
});
