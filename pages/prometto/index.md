---
title: Prometto
permalink: /prometto/
description: Promise request and print a json book
color: melma
order: 3
js:
  - promise
  - [../pages/prometto/script]
---

**Scripts**

- [promise.js]({{site.baseurl}}/js/promise.js) – `@version 3.2.2+39aa2571` [stefanpenner/es6-promise](//github.com/stefanpenner/es6-promise)
- [script.js]({{site.baseurl}}/pages{{ page.url }}script.js)

```js
getJSON('story.json') // url -> story.json
	.then(loadChapters) // story.chapters -> Promise.all([url] -> [chapter.json]) promise array
	.then(loopChapters) // chapters.forEach -> print
	.catch(errore)
	.then(allDone);
```

1. Reusable `getJSON`, promised-all to `chapters`
1. Just a `forEach` loop

**Json files**

- [story.json]({{site.baseurl}}/pages{{ page.url }}book/story.json)
- [chapter-1.json]({{site.baseurl}}/pages{{ page.url }}book/chapter-1.json)
- [chapter-2.json]({{site.baseurl}}/pages{{ page.url }}book/chapter-2.json)
- [chapter-3.json]({{site.baseurl}}/pages{{ page.url }}book/chapter-3.json)

---
