// include README
if (window.location.hostname == "127.0.0.1")
	G.req('https://api.github.com/repos/petrosh/domtools/contents/pages/G/README.md', print, 'get', 'application/vnd.github.v3.html', {ref: 'gh-pages'});
else
	G.req([G.repoApi, 'contents', 'pages', G.repoFolder, 'README.md'].join('/'), print, 'get', 'application/vnd.github.v3.html', {ref: 'gh-pages'});

function print () {
	G.query('section').innerHTML += this.toString();
	G.ac(G.domNew('h1', 'Repository commits', {id: 'repository-commits'}), G.query('section'));
	// request repo commits
	// G.loadScript('https://api.github.com/repos/petrosh/domtools/commits?callback=coo');
	G.loadScript([G.repoApi, 'commits?callback=coo'].join('/'));
}

// show commits for the first page and number of pagination links
function coo(response){
	G.repoCommits = response.data;
	var ul = G.domNew('ul');
	G.ac(ul, G.query('section'));
	for (var i = 0; i < G.repoCommits.length; i++) {
		var commessa = G.repoCommits[i];
		var li = G.domNew('li');
		var code = G.domNew('code', commessa.sha.substr(0,7));
		G.ac(G.domNew('a', commessa.commit.message, {href: commessa.html_url}), li);
		li.innerHTML += '<br>';
		G.ac(code, li);
		li.innerHTML += ' &ndash; <em>' + commessa.commit.author.date.timeAgo() + '</em>';
		G.ac(li, ul);
	}
	if (response.meta.Link) G.ac(G.pagination(response.meta.Link), G.query('section'));
}
