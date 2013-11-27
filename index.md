---
layout: page
title: Hello World!
tagline: Supporting tagline
---
{% include JB/setup %}

###Music here:
[InstanTunes](http://www.cutehalo.com/music/)
[LABS](http://www.cutehalo.com/lab/)


<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>

