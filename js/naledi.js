/*
*
* getGithubUrls
*
*/
var repoName, owner, repoFullname, repoUrl, repoHome, pagePath, apiUrl, repoApi, loaderUrl;

function branchRefUrl (branch) {
	var b = branch || 'gh-pages';
	return [repoApi, 'git/refs/heads', b].join('/');
}

function getGithubUrls (location) {
	var loc = location || window.location;
	repoName = loc.pathname.split('/')[1];
	owner = loc.host.split('.')[0];
	repoFullname = [owner, repoName].join('/');
	repoUrl = ['https://github.com', repoFullname].join('/');
	repoHome = ['https://' + owner + '.github.io', repoName].join('/');
	pagePath = loc.pathname.split('/').slice(2).join('/');
	apiUrl = 'https://api.github.com';
	repoApi = [apiUrl, 'repos', repoFullname].join('/');
	loaderUrl = '../pages/naledi/loader.js'; // normally 'loader.js'
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
* ele.createCustomElement(tag[, inner[, attributes]])
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

function appendScript (url) {
	document.getElementsByTagName('head')[0].appendChild(
		cce('script', '', {'src': url})
	);
}


function setGithubUrls () {
	var load = (window.location.hostname === '127.0.0.1') ? cce('a', '', {href: 'https://petrosh.github.io/domtools/naledi'}) : '';
	return getGithubUrls(load);
}
