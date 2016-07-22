/*
*
* getGithubUrls
*
*/
var repoName, owner, repoFullname, repoUrl, repoHome, pagePath, pageFolder, apiUrl, repoApi, branchRef = {};

function branchRefUrl (branch) {
	var b = branch || 'gh-pages';
	return [repoApi, 'git/refs/heads', b].join('/');
}

/*
*
* str.timeAgo()
*
*/
String.prototype.timeAgo = function () {
	var config = function(int,str){
		return (Math.round(int) <= 1) ? ['1', str, 'ago'].join(' ') : [Math.round(int), str + 's ago'].join(' ');
		// if (Math.round(int) <= 1) return '1 ' + str + ' ago'; else return Math.round(int) + ' ' + str + 's ago'; };
	};
	var date = new Date(this);
	// Account for timezone
	var offset = new Date().getTimezoneOffset();
	var seconds = Math.floor((new Date() - date) / 1000) + (60 * offset);
	// Start checking
	var interval = Math.floor(seconds / 31536000);
	if (interval > 0.9) return config(interval, 'year');
	interval = seconds / (86400*30);
	if (interval > 0.75) return config(interval, 'month');
	interval = seconds / (3600*24*7);
	if (interval > 1) return config(interval, 'week');
	interval = Math.floor(seconds / (3600*24));
	if (interval > 0.75) return config(interval, 'day');
	interval = Math.floor(seconds / (60*60));
	if (interval > 0.92) return config(interval, 'hour');
	interval = Math.floor(seconds / 60);
	if (interval > 1) return config(interval, 'minute');
	return 'just now';
};

/*
*
* ele.appendChilds([element_1, element_2, ...])
*
*/
Element.prototype.appendChilds = function (elementsArray) {
	if (elementsArray.constructor === HTMLElement) {
		if (this.appendChild(elementsArray)) this.appendChild(elementsArray);
		return elementsArray;
	} else if (elementsArray.constructor === Array) {
		for (var i = 0; i < elementsArray.length; i++) {
			if (this.appendChild(elementsArray[i])) this.appendChild(elementsArray[i]);
		}
		return this;
	}
};

/*
*
* cce(tag[, inner[, attributes]])
*
*/
function cce (tag, inner, attributes) {
	var element;
	if (document.createElement(tag)) element = document.createElement(tag); else return false;
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
}

// set variables
function setGithubUrls (fallback) {
	var loc = window.location;
	if (loc.hostname === '127.0.0.1' && fallback !== '') loc = cce('a', '', {href: fallback});
	repoName = loc.pathname.split('/')[1];
	owner = loc.host.split('.')[0];
	repoFullname = [owner, repoName].join('/');
	repoUrl = ['https://github.com', repoFullname].join('/');
	repoHome = ['https://' + owner + '.github.io', repoName].join('/');
	rawStatic = ['https://rawgit.com', repoFullname].join('/');
	rawCdn = ['https://cdn.rawgit.com', repoFullname].join('/');
	pagePath = loc.pathname.split('/').slice(2).join('/');
	pageFolder = ['.', 'pages', pagePath].join('/');
	apiUrl = 'https://api.github.com';
	repoApi = [apiUrl, 'repos', repoFullname].join('/');
}

// append javascript in head
function appendScript (filename) {
	var s = [pageFolder, filename + '.js'].join('/');
	document.getElementsByTagName('head')[0].appendChild(
		cce('script', '', {'src': s})
	);
}

// Error callback
function errore (e) {
	console.log('error: ' + e);
}

// parse JSON
function jsonize (response) {
	return response.json();
}

// get Git Reference for a branch
function getRef (branch) {
	var b = branch || 'gh-pages';
	var options = {
		header: {'Accept': 'application/vnd.github.v3+json'},
		cache: 'no-cache'
	};
	return fetch(branchRefUrl(b), options)
		.then(jsonize)
		.then(function (head) {
			return head.object.sha;
		})
		.catch(function () {
			return b;
		})
		.then(function (ref) {
			branchRef[b] = ref;
			return ref;
		})
		.catch(errore);
}
