---
permalink: /
---
**Tools for the Document Object Module**

{% assign pagine = site.pages | sort: 'order'  %}
{% for p in pagine reversed %}{% if p.title %}
- [{{ p.title }}]({{ p.url }}) – {{ p.description }}{% endif %}{% endfor %}
