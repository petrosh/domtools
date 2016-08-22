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
	a.querySelector('a').innerHTML = e.title;
	a.querySelector('a').href = e.html_url;
	a.querySelector('small').innerHTML = e.created_at + ', ';
	a.querySelector('small').innerHTML += e.labels.map(function (l) {
		var label = document.createElement('span');
		label.classList.add('language');
		label.setAttribute("style", "background-color: #" + l.color);
		return ' ' + label.outerHTML + ' ' + l.name;
	});
	return a.outerHTML;
};

scan('petrosh', 'diarissues');
scan('petrosh', 'gitmarks');
scan('petrosh', 'snippetrosh');
