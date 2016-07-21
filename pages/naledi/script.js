var t = new Date().toISOString();
var section = document.querySelector('section');
var p = document.createElement('p');

section.appendChilds([
	createCustomElement('p', 'repository ' + window.location.pathname.split('/')[1]),
	createCustomElement('p', ' owner ' + window.location.host.split('.')[0])
]);

var result = fetch('https://api.github.com');

result.then(function (response) {
	section.appendChild(createCustomElement('h2', 'Response'));
	p.innerHTML += 'response: ' + response.statusText + '<br>content-type header: ' + response.headers.get('Content-Type');
	return response.text();
}).then(function (text) {
	var response = JSON.parse(text);
	p.innerHTML += '<br>current_user_url: ' + response.current_user_url;
	section.appendChild(p);
	setGithubUrl();
}).catch(function (ex) {
	section.appendChild(createCustomElement('h2', 'E_ ' + ex));
	console.log(ex);
});

function setGithubUrl () {
	console.log('window.location.pathname', window.location.pathname);
	console.log('window.location.pathname.split(\'/\')', window.location.pathname.split('/'));
	console.log('window.location.pathname.split(\'/\')[1] = repository', window.location.pathname.split('/')[1]);
	console.log('window.location.pathname.split(\'/\').slice(2).join(\'/\') = pagePath', window.location.pathname.split('/').slice(2).join('/'));
	console.log('window.location.host', window.location.host);
	console.log('window.location.host.split(\'.\')', window.location.host.split('.'));
	console.log('window.location.host.split(\'.\')[0] = owner', window.location.host.split('.')[0]);
}
