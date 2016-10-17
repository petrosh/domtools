---
title: Reddizza
description: Backup reddit as markdown
permalink: /reddizza/
color: reddit
js:
  - fetch
  - [../pages/reddizza/script]
---

**Get reddit post in `json`**

- Post: [https://www.reddit.com/r/spacex/comments/57v70p/reddit-post/](https://www.reddit.com/r/spacex/comments/57v70p/its_mars_mission_technology_readiness_levels/)
- Json:  [https://www.reddit.com/r/spacex/comments/57v70p/reddit-post.json](https://www.reddit.com/r/spacex/comments/57v70p/its_mars_mission_technology_readiness_levels.json)

**Scripts**

- [script.js]({{site.baseurl}}/pages{{ page.url }}script.js)

```js
function resolve (a) {
	var post = a[0].data.children[0].data;
	var el = '<h1>' + post.title + '</h1>';
	el += '<p>score: ' + post.score + ' – subreddit: ' + post.subreddit + ' – comments: ';
	el += post.num_comments + '<br>created: ' + new Date(post.created_utc * 1000) + ' by ' + post.author;
	el += '</p><br>';
	document.querySelector('.markdown-body').innerHTML += el;
	document.querySelector('.markdown-body').innerHTML += htmlDecode(post.selftext_html);
	document.body.classList.remove('request');
}
if (hash) {
	if (hash.slice(-1) === '/') {
		hash = hash.slice(0,-1);
	}
	document.body.classList.add('request');
	fetch(hash + '.json').then(dataHandler).then(resolve);
}
```

**Demo**

- [reddizza/#reddit-post](#https://www.reddit.com/r/spacex/comments/57v70p/its_mars_mission_technology_readiness_levels)
