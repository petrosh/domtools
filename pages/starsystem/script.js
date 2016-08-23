String.prototype.timeAgo = function () {
	var config = function(int,str){ if (Math.round(int) <= 1) return '1 ' + str + ' ago'; else return Math.round(int) + ' ' + str + 's ago'; };
	var date = new Date(this);
	var offset = 0; //new Date().getTimezoneOffset();
	var seconds = Math.floor((new Date() - date) / 1000) + (60 * -offset);
	var interval = Math.floor(seconds / 31536000);
	if (interval > 0.9) return config(interval, 'year');
	interval = seconds / (86400*30);
	if (interval > 0.75) return config(interval, 'month');
	interval = seconds / (3600*24*7);
	if (interval > 1) return config(interval, 'week');
	interval = Math.floor(seconds / (3600*24));
	if (interval > 0.75) return config(interval, 'day');
	interval = Math.floor(seconds / (60*60));
	console.log(seconds, Math.floor(seconds / 60));
	if (interval > 0.92) return config(interval, 'hour');
	interval = Math.floor(seconds / 60);
	if (interval > 1) return config(interval, 'minute');
	return 'just now';
};

var options = {
	headers: {'Accept': 'application/vnd.github.v3+json'},
	cache: 'no-cache'
};

function scan (owner, repo) {
	var fullname = [owner, repo].join('/');
	fetch('https://api.github.com/repos/' + fullname + '/issues', options).then(function (r) {
		return r.json();
	}).then(function (arr) {
		var a = arr.map(stampa).join('');
		document.getElementById(repo).innerHTML = a;
	});
}

function stampa (e) {
	var a = document.createElement('li');
	a.innerHTML = '<strong><a href=""></a></strong><br><small></small>';
	a.querySelector('a').appendChild(document.createTextNode(e.title));
	a.querySelector('a').href = e.html_url;
	a.querySelector('small').innerHTML = 'Created ' + e.created_at.timeAgo();
	if (e.comments == 1) a.querySelector('strong').insertAdjacentHTML('afterend', ' <img class="octicon" src="../images/octicons/comment.svg"> ' + e.comments);
	if (e.comments > 1) a.querySelector('strong').insertAdjacentHTML('afterend', ' <img class="octicon" src="../images/octicons/comment-discussion.svg"> ' + e.comments);
	if (e.updated_at.timeAgo() !== e.created_at.timeAgo()) a.querySelector('small').innerHTML += ' &ndash; Edited ' + e.updated_at.timeAgo();
	a.querySelector('small').innerHTML += '<br>' + e.labels.map(function (l) {
		var label = document.createElement('span');
		label.classList.add('language');
		label.setAttribute("style", "background-color: #" + l.color);
		return ' ' + label.outerHTML + ' ' + l.name;
	}).join('&nbsp;');
	return a.outerHTML;
}

scan('petrosh', 'diarissues');
scan('petrosh', 'gitmarks');
scan('petrosh', 'snippetrosh');
