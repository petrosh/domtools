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

## Github urls

<ul id="variables"></ul>

## Flow

**`getBranchSha(branch)`**

- Resolved return: `master.object.sha`
- Then: `appendScript('loader')` – from `cdn.rawgit` with `sha`
- Catch: `appendScript('loader')` – from `rawgit` with `branch`

**`appendScript(url)`**

- Resolved return: `true`
- Then: `checkLogged`
- Catch: `error: script not loaded`
