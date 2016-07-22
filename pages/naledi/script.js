var varout = document.querySelector('#variables');

function monitor (t) {
	if (t.constructor === Array) {
		for (var i = 0; i < t.length; i++) {
			varout.appendChild(cce('li', t[i]));
		}
	} else varout.appendChild(cce('li', t));
	return t;
}

getGithubUrls('https://petrosh.github.io/domtools/naledi');
appendScript('loader');

monitor([
	'repoName: ' + repoName,
	'owner: ' + owner,
	'repoFullname: ' + repoFullname,
	'repoUrl: ' + repoUrl,
	'repoHome: ' + repoHome,
	'pagePath: ' + pagePath,
	'pageFolder: ' + pageFolder,
	'branchRefUrl(): ' + branchRefUrl()
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
