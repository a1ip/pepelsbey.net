---
layout: html.njk
title: Пепелсбей.net
---

<ul class="archive">
{%- for post in collections.post -%}
    <li class="archive__item">
        <a class="archive__link" href="{{ post.url }}">{{ post.url }}</a>
    </li>
{%- endfor -%}
</ul>
