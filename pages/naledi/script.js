var varout = document.querySelector('#variables');

function monitor (t) {
	if (t.constructor === Array) {
		for (var i = 0; i < t.length; i++) {
			varout.appendChild(cce('li', t[i]));
		}
	} else varout.appendChild(cce('li', t));
	return t;
}

setGithubUrls('https://petrosh.github.io/domtools/naledi');
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
