// Append links and ref to footer
G.ac(G.ac([G.repoLink, G.repoSshot, G.domNew('span', G.refs.ghpages, {class: 'float-right'})], G.domNew('p')), G.query('footer'));

// include README
G.req([G.repoApi, 'contents', G.repoFolder, 'README.md'].join('/'), print, 'get', 'application/vnd.github.v3.html', {ref: 'gh-pages'});
// G.req('https://api.github.com/repos/petrosh/domtools/contents/G/README.md', print, 'get', 'application/vnd.github.v3.html', {ref: 'gh-pages'});

function print () {
	G.query('section').innerHTML += this.toString();
	G.ac(G.domNew('h1', 'Repository commits'), G.query('section'));
	// request repo commits
	// G.loadScript('https://api.github.com/repos/petrosh/domtools/commits?callback=coo');
	G.loadScript([G.repoApi, 'commits?callback=coo'].join('/'));
}

// show commits for the first page and nuomber of pagination links
function coo(response){
	G.repoCommits = response.data;
	var ul = G.domNew('ul');
	G.ac(ul, G.query('section'));
	for (var i = 0; i < G.repoCommits.length; i++) {
		var commessa = G.repoCommits[i];
		var li = G.domNew('li');
		var code = G.domNew('code');
		G.ac(G.domNew('a', commessa.sha.substr(0,7), {href: commessa.html_url}), code);
		li.innerHTML += '<em>' + commessa.commit.author.date.timeAgo() + '</em> &ndash; ';
		G.ac(code, li);
		li.innerHTML += ' &ndash; <strong>' + commessa.commit.message + '</strong>';
		G.ac(li, ul);
	}
	if (response.meta.Link) G.ac(G.pagination(response.meta.Link), G.query('section'));
}
