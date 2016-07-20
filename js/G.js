var G = {
	urlSlash: window.location.pathname.split('/'),
	urlArray: window.location.host.split('.'),
	urlHash: window.location.hash.substring(1),
	apiRepos: 'https://api.github.com/repos',
	refs: { master: "master", ghpages: "gh-pages"},
	repoCommits: [],
	repoCommitsMeta: [],
	get repoName () { return this.urlSlash[1]; },
	get repoFolder () {
		var arr = [];
		var folders = this.urlSlash;
		for (var i = 2; i < folders.length - 1; i++) {
			if (folders[i] !== '') arr.push(folders[i]);
		}
		return (arr.length) ? arr.join('/') : '';
	},
	get repoOwner () { return this.urlArray[0]; },
	get repoFullname () { return [this.repoOwner, this.repoName].join('/'); },
	get repoLink () {
		var treePath = (G.repoFolder !== '') ? 'tree/gh-pages/' : '';
		var url = ['https://github.com', G.repoFullname, treePath + G.repoFolder].join('/');
		return G.domNew('a', 'Repository', {href: url});
	},
	get repoSshot () {
		var url =	'https://developer.microsoft.com/en-us/microsoft-edge/tools/screenshots/#https://' + G.repoOwner + ['.github.io', G.repoName, G.repoFolder].join('/');
		return G.domNew('a', 'Screenshots', {href: url, target: '_blank'});
	},
	get repoHome () { return 'https://' + this.repoOwner + '.github.io/' + this.repoName; },
	get repoApi () { return [this.apiRepos, this.repoFullname].join('/'); },
	get rawStatic () { return ['https://rawgit.com', G.repoFullname].join('/'); },
	get rawCdn () { return ['https://cdn.rawgit.com', G.repoFullname].join('/'); },
	getSha: function () {
		G.loadScript(G.repoApi + '/git/refs/heads/gh-pages?callback=G.gotSha');
		return true;
	},
	gotSha: function (response) {
		var file = 'script.js';
		// var file = (G.repoFolder) ? 'pages/' + G.repoFolder + '/script.js' : 'script.js';
		// var file = window.location.href + 'script.js';
		if (window.location.hostname == "127.0.0.1")
			file = window.location.origin + '/pages' + window.location.pathname + 'script.js';
		if (response.data.message == 'Not Found') return G.loadScript(file);
		G.refs.ghpages = response.data.object.sha;
		return G.loadScript([G.rawCdn, G.refs.ghpages, 'pages', file].join('/'));
	},
	ac: function (element, parent) {
		var target = (parent || document.body);
		if (element.constructor === Array) {
			for (var i = 0; i < element.length; i++) {
				target.appendChild(element[i]);
			}
			return target;
		} else {
			return target.appendChild(element);
		}
	},
	loadScript: function (s) {
		G.ac(G.domNew('script', '', {'src': s}), document.getElementsByTagName('head')[0]);
	},
	domNew: function (tag, inner, attributes) {
		var element = document.createElement(tag);
		if (inner) {
			element.innerHTML = inner;
		}
		if (attributes && attributes.constructor === Object) {
			for (var key in attributes) {
				if (attributes.hasOwnProperty(key)) {
					element.setAttribute(key, attributes[key]);
				}
			}
		}
		return element;
	},
	query: function (selector, parent) {
		if (parent && parent.querySelector(selector))
			return parent.querySelector(selector);
		else if (document.querySelector(selector))
			return document.querySelector(selector);
		return false;
	},
	req: function(url, callback, method, accept, data) {
		var xhr = new XMLHttpRequest();
		xhr.open(method || 'get', url, true);
		xhr.setRequestHeader('Accept', accept || 'application/vnd.github.v3.full+json');
		// if (userToken && atob(userToken)) {
		// 	xhr.setRequestHeader( 'Authorization', 'token ' + atob(userToken) );
		// 	userLogged = true;
		// }
		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4) {
				document.body.classList.remove('request');
				if (xhr.status == 200 ||	xhr.status == 201 ||	xhr.status == 204) {
					if (typeof callback == 'function') {
						var response = (accept.indexOf('html') > -1) ? xhr.responseText : JSON.parse(xhr.responseText);
						callback.apply(response);
					}
				}
				if (xhr.status >= 400) {
					console.log( xhr );
				}
			}
		};
		document.body.classList.add('request');
		xhr.send( data );
	},
	pagination: function (links) {
		var linkElement;
		if (links && links.length) {
			for (var i = 0; i < links.length; i++) {
				if (links[i][1].rel === 'prev') {
					linkElement = G.domNew('a', 'Previous page', {href: links[i][0]});
					nextLink.addEventListener('click', G.paginationClick);
				}
				if (links[i][1].rel === 'next') {
					linkElement = G.domNew('a', 'Next page', {href: links[i][0]});
					nextLink.addEventListener('click', G.paginationClick);
				}
			}
		}
		return linkElement;
	},
	paginationClick: function (event) {
		event.preventDefault();
		// load the script in the href
		G.loadScript(event.target.href);
		// Remove the link element
		event.target.parentNode.removeChild(event.target);
	}
};

if (window.addEventListener)
	window.addEventListener("load", G.getSha, false);
else if (window.attachEvent)
	window.attachEvent("onload", G.getSha);
else window.onload = G.getSha;
