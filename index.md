---
---

{% for p in site.pages %}
{% if p.title %}- <a href="{{ p.url | prepend: site.baseurl }}">{{ p.title }}</a> – {{ p.description }}{% endif %}
{% endfor %}
