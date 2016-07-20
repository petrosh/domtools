A little helper

- [Append](#user-content-append)
- [Load script](#user-content-load-script)
- [Dom new](#user-content-dom-new)
- [Query selector](#user-content-query-selector)
- [Request](#user-content-request)

### Append

**`G.ac(element[, parent])`**

Append an element or elements in a array to a parent, or to `document.body`.

- `element`  
	Element or element array to append.  

- `parent` (optional)  
	The element to append to, if ommitted `document.body` is used.

Usage

```js
G.ac(element);
// equivalent to
document.body.appendChild(element);

G.ac(element, parent);
// equivalent to
parent.appendChild(element);

G.ac([element_1, element_2, ... ], parent);
// equivalent to
parent.appendChild(element_1);
parent.appendChild(element_2);
// ...
```

### Load script

**`G.loadScript(url)`**

Append a `script` tag to `document.head`.

- `url`  
  Script URL or API end point, possibly with a callback `?callback=foo`.

Usage

```js
G.loadScript('script.js');
// equivalent to
var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.src = url;
head.appendChild(script);
```

### Dom new

**`G.domNew(tag[, inner, attributes])`**

Create and return a new DOM element with optional `innerHTML` and attributes.

- `tag`  
	Tag of the element to create.  

- `inner` (optional)  
	Appended inner HTML to the element.  

- `attributes` (optional)  
	Attributes of the element as key-value pairs.

Usage

```js
var element = G.domNew('a', 'click here', {href: 'http://example.com'});
// equivalent to
var element = document.createElement('a');
a.innerHTML = 'click here';
a.href = 'http://example.com';
```

### Query selector

**`G.query(selector[, parent])`**

Shortcut for `element.querySelector()` and `document.querySelector()`.

- `selector`  
	String of CSS selectors, comma separated.  

- `parent` (optional)  
	Element where selector is matched against, if omitted `document.body` is used.

Usage

```js
var element = G.query('p', parent);
// equivalent to
var element = parent.querySelector('p');
```

### Request

**`G.req(url[, callback, method, accept, data])`**

Perform a `XMLHttpRequest` and apply response to `callback` function.

- `url`  
	Api endpoint.  

- `callback` (optional)  
	Callback function in case of `xhr.status == 200` (ok) `201` (created) or `204` (no content)

- `method` (optional)  
	Default to `get`.  

- `accept` (optional)  
	String for the `Accept` request header, default to `application/vnd.github.v3.full+json`  

- `data` (optional)  
	Data to send.

```js
G.req(url, print, 'get', 'application/vnd.github.v3.html', {ref: 'gh-pages'});
// equivalent to
var xhr = new XMLHttpRequest();
xhr.open('get', url, true);
xhr.setRequestHeader('Accept', 'application/vnd.github.v3.html');
xhr.send(data);
// and check xhr.status etc.
```
