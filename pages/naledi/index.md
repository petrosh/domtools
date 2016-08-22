---
title: naledi
description: No interfaces, only tools
permalink: /naledi
color: cave
order: 4
screenshot: true
js:
  - promise
  - fetch
  - naledi
  - [../pages/naledi/script]
---

**Scripts**

- [promise.js]({{ site.baseurl }}/js/promise.js) – `@version 3.2.2+39aa2571` from [stefanpenner/es6-promise](//github.com/stefanpenner/es6-promise)
- [fetch.js]({{ site.baseurl }}/js/fetch.js) – `@version 0.11.1` from [github/fetch](//github.com/github/fetch)
- [naledi.js]({{ site.baseurl }}/js/naledi.js)
- [script.js]({{ site.baseurl }}/pages{{ page.url | append: '/' }}script.js)

```js
// init with fallback url for local-debug
setGithubUrls('https://petrosh.github.io/domtools/naledi');

// Load next script
appendScript('loader');
```

- `async` [loader.js]({{ site.baseurl }}/pages{{ page.url | append: '/' }}loader.js)

```js
// Print message
monitor('loader.js running');

// Print gh-pages sha
getRef()
.then(monitor)
.catch(errore);
```

## Results

<ul id="variables"></ul>

## Tools

**Time**

- **`dateString.timeAgo()`**

**Dom**

- **`ele.appendChilds([])`**
- **`cce(tag[, inner[, attributes]])`**
- **`appendScript(filename)`**

**GitHub**

- **`getGithubUrls(fallback)`**
- **`getRef(branch)`**
