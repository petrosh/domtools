---
title: naledi
description: No interfaces, only tools
permalink: /naledi
color: cave
screenshot: true
js:
  - promise
  - fetch
  - naledi
  - [../pages/naledi/script]
---

**Scripts**

- [promise.js](/js/promise.js) – `@version 3.2.2+39aa2571` from [stefanpenner/es6-promise](//github.com/stefanpenner/es6-promise)
- [fetch](/js/fetch.js) – `@version 0.11.1` from [github/fetch](//github.com/github/fetch)
- [naledi](/js/naledi.js)
- [script]({{ site.baseurl }}/pages{{ page.url | append: '/' }}script.js)

## Flow

**`setGithubUrls`**

```js
// Repository
window.location.pathname.split('/')[1];
// return string "repository"
var url = 'https://owner.github.io/repository';
url.pathname.split('/')[1];
// split: ["https:", "", "owner.github.io", "repository"]

// Page path
window.location.pathname.slice(2).join('/');
// return composed string "page" or "page/deep"
var url = 'https://owner.github.io/repository';
url.split('/').slice(2).join('/');
var url = 'https://owner.github.io/repository/page';
url.slice(2).join('/');
url =  'https://owner.github.io/repository/page/deep';
url.slice(2).join('/');
```

**`getBranchSha(branch)`**

- Resolved return: `master.object.sha`
- Then: `appendScript('loader')` – from `cdn.rawgit` with `sha`
- Catch: `appendScript('loader')` – from `rawgit` with `branch`

**`appendScript(url)`**

- Resolved return: `true`
- Then: `checkLogged`
- Catch: `error: script not loaded`
