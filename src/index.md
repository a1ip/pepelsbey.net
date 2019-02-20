---
layout: html.njk
title: Пепелсбей.net
---

# Ну, привет

<ul>
{%- for post in collections.post -%}
    <li><a href="{{ post.url }}">{{ post.url }}</a></li>
{%- endfor -%}
</ul>
