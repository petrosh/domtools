// var t = new Date().toISOString();
var section = document.querySelector('section');
var p = document.createElement('p');
var githubUrls = document.querySelector('#variables');

// URLS

var repoName = window.location.pathname.split('/')[1];
var owner = window.location.host.split('.')[0];
var repoFullname = [repoName, owner].join('/');
var repoUrl = ['https://github.com', repoFullname].join('/');
var repoHome = ['https://' + owner + '.github.io', repoName].join('/');
var pagePath = window.location.pathname.split('/').slice(2).join('/');

githubUrls.appendChilds([
	createCustomElement('li', 'repoName: ' + repoName),
	createCustomElement('li', 'owner: ' + owner),
	createCustomElement('li', 'repoFullname: ' + repoFullname),
	createCustomElement('a', 'repoUrl', {href: repoUrl}),
	createCustomElement('br'),
	createCustomElement('a', 'repoHome', {href: repoHome}),
	createCustomElement('li', 'pagePath: ' + pagePath)
]);

// FETCH

var result = fetch('https://api.github.com');

result.then(function (response) {
	section.appendChild(createCustomElement('h2', 'Response'));
	p.innerHTML += 'response: ' + response.statusText + '<br>content-type header: ' + response.headers.get('Content-Type');
	return response.text();
}).then(function (text) {
	var response = JSON.parse(text);
	p.innerHTML += '<br>current_user_url: ' + response.current_user_url;
	section.appendChild(p);
}).catch(function (ex) {
	section.appendChild(createCustomElement('h2', 'E_ ' + ex));
	console.log(ex);
});
