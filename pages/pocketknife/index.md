---
title: pocketknife
description: JS API enrichment in 15448 bytes
permalink: /pocketknife
color: cadetblue
order: 5
js:
  - pocketknife
  - [../pages/pocketknife/script]
---
**Scripts**

- [pocketknife.js]({{site.baseurl}}/js/pocketknife.js) – from [Pomax/pocketknife](https://github.com/Pomax/pocketknife)
- [script.js]({{site.baseurl}}/pages{{ page.url }}script.js)


**Live `h2` above**

```js
var h2 = create("h2", {"style":"font-style: italic;"}, "Pocket knife");
var markdownBody = body.find('.markdown-body');
markdownBody.insertBefore(h2, markdownBody.get(0));
```

**where `create` is**

```js
create = function(tagname, attributes, content) {
  var element = document.createElement(tagname),
	  property;
  // element attributes
  if(typeof attributes == "object") {
	for(property in attributes) {
	  if(attributes.hasOwnProperty(property)) {
		element.setAttribute(property, attributes[property]);
	  }
	}
  }
  if (typeof attributes === "string") { content = attributes; }
  if(content) { element.innerHTML = content; }
  return element;
};
```
