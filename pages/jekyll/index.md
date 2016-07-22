---
title: Jekyll
description: Live variables
color: forest
permalink: /jekyll/
screenshot: true
order: 1
---

### Jekyll `site`

|`{% raw %}{{{% endraw %} site.url {% raw %}}}{% endraw %}`|<code>{{ site.url }}</code>|
|`{% raw %}{{{% endraw %} site.baseurl {% raw %}}}{% endraw %}`|<code>{{ site.baseurl }}</code>|

<br>

### Jekyll `page`

|`{% raw %}{{{% endraw %} page.url {% raw %}}}{% endraw %}`|<code>{{ page.url }}</code>|
|`{% raw %}{{{% endraw %} page.permalink {% raw %}}}{% endraw %}`|<code>{{ page.permalink }}</code>|
|`{% raw %}{{{% endraw %} page.path {% raw %}}}{% endraw %}`|<code>{{ page.path }}</code>|

<br>

### Jekyll `site.github`

|`{% raw %}{{{% endraw %} site.github.owner_name {% raw %}}}{% endraw %}`|<code>{{ site.github.owner_name }}</code>|
|`{% raw %}{{{% endraw %} site.github.project_title {% raw %}}}{% endraw %}`|<code>{{ site.github.project_title }}</code>|
|`{% raw %}{{{% endraw %} site.github.project_tagline {% raw %}}}{% endraw %}`|<code>{{ site.github.project_tagline }}</code>|
|`{% raw %}{{{% endraw %} site.github.repository_nwo {% raw %}}}{% endraw %}`|<code>{{ site.github.repository_nwo }}</code>|
|`{% raw %}{{{% endraw %} site.github.url {% raw %}}}{% endraw %}`|<code>{{ site.github.url }}</code>|
|`{% raw %}{{{% endraw %} site.github.build_revision {% raw %}}}{% endraw %}`|<code>{{ site.github.build_revision }}</code>|
