---
title: Star System
description: ashes to ashes
permalink: /starsystem/
color: lightred wide
order: 6
js:
  - promise
  - fetch
  - [../pages/starsystem/script]
---
<style>
span.language {
	display: inline-block;
	width: 10px;
	height: 10px;
	border-radius: 50%;
}
table.triplet td {
	width: 33%;
	vertical-align: top;
}
</style>
**Scripts**

- [promise.js]({{site.baseurl}}/js/promise.js)
- [fetch.js]({{site.baseurl}}/js/fetch.js)
- [script.js]({{site.baseurl}}/pages{{ page.url }}script.js)

**Code**

```js
function scan (owner, repo) {
	var fullname = [owner, repo].join('/');
	fetch('https://api.github.com/repos/' + fullname + '/issues', options).then(function (r) {
		return r.json();
	}).then(function (arr) {
		var a = arr.map(stampa).join('');
		document.getElementById(repo).innerHTML = a;
	});
}
```
<table class="triplet">
	<tr>
		<th>
			Diarissues
		</th>
		<th>
			Gitmarks
		</th>
		<th>
			Snippetrosh
		</th>
	</tr>
	<tr>
		<td>
			<ol id="diarissues"></ol>
		</td>
		<td>
			<ol id="gitmarks"></ol>
		</td>
		<td>
			<ol id="snippetrosh"></ol>
		</td>
	</tr>
</table>
