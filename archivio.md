---
layout: page
title: Archivio
permalink: /archivio/
---

<div class="archive">
  <div class="timeline">
    {% for post in site.storie %}
      {% assign currentdate = post.date | date: "%Y" %}
      {% if currentdate != date %}
        {% unless forloop.first %}</ul>{% endunless %}
        <h3 id="y{{post.date | date: "%Y"}}">{{ currentdate }}</h3>
        <ul class="post-list">
        {% assign date = currentdate %}
      {% endif %}
        <li>
          <span class="post-meta">{{ post.date | date: "%d/%m/%Y" }}</span>
          <h4>
            <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
          </h4>
          {% if post.location %}
            <span class="storia-location">{{ post.location }}</span>
          {% endif %}
          <div class="storia-excerpt">
            {{ post.excerpt }}
          </div>
          <p><a href="{{ post.url | relative_url }}" class="read-more">Continua a leggere &rarr;</a></p>
        </li>
      {% if forloop.last %}</ul>{% endif %}
    {% endfor %}
  </div>
</div>
