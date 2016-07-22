// var t = new Date().toISOString();
var section = document.querySelector('section');
var p = document.createElement('p');
var varout = document.querySelector('#variables');

setGithubUrls();
appendScript('../pages/naledi/loader.js');

varout.appendChilds([
	cce('li', 'repoName: ' + repoName),
	cce('li', 'owner: ' + owner),
	cce('li', 'repoFullname: ' + repoFullname),
	cce('li', 'repoUrl: ' + repoUrl),
	cce('li', 'repoHome: ' + repoHome),
	cce('li', 'pagePath: ' + pagePath),
	cce('li', 'branchRefUrl: ' + branchRefUrl())
]);

// FETCH

// var result = fetch('https://api.github.com');
//
// result.then(function (response) {
// 	section.appendChild(cce('h2', 'Response'));
// 	p.innerHTML += 'response: ' + response.statusText + '<br>content-type header: ' + response.headers.get('Content-Type');
// 	return response.text();
// }).then(function (text) {
// 	var response = JSON.parse(text);
// 	p.innerHTML += '<br>current_user_url: ' + response.current_user_url;
// 	section.appendChild(p);
// 	appendScript('../pages/naledi/loader.js');
// }).catch(function (ex) {
// 	section.appendChild(cce('h2', 'E_ ' + ex));
// 	console.log(ex);
// });
