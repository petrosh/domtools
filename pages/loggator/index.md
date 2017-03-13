---
title: Loggator
description: brace yourself
permalink: /loggator
color: orange
js:
  - promise
  - fetch
  - loggator
  - [../pages/loggator/script]
---

**Login sandbox with [Personal access tokens](https://github.com/settings/tokens)**

```js
var loggator = new Promise(function(resolve, reject) {

};


function () {
	var lg = localStorage.getItem('loggator'); // return null if don't exist
	return (lg && (lg.length === 40) && atob(lg)) ? atob(lg) : false;
}
```

- Input: check `tokenField.value()`
	- Must be `token.value.length === 40`
	- Must exist `btoa(token)`


**Scripts**

- [promise.js]({{site.baseurl}}/js/promise.js)
- [fetch.js]({{site.baseurl}}/js/fetch.js)
- [script.js]({{site.baseurl}}/pages{{ page.url }}script.js)

**Front matter**

````yml
js:
  - promise
  - fetch
  - loggator
  - [../pages/loggator/script]
```

**Usage**

```js
var logged = loggator();
```

**Render**

<p class="js-render"></p>
