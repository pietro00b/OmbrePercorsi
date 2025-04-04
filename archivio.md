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
          {% if post.tags.size > 0 %}
            <div class="storia-tags">
              {% for tag in post.tags %}
                <span class="tag">{{ tag }}</span>
              {% endfor %}
            </div>
          {% endif %}
        </li>
      {% if forloop.last %}</ul>{% endif %}
    {% endfor %}
  </div>

  <h2>Categorie</h2>
  <div class="category-list">
    {% for category in site.categories %}
      <h3 id="{{ category[0] | slugify }}">{{ category[0] | capitalize }}</h3>
      <ul class="storie-list">
        {% for storia in category[1] %}
          <li>
            <span class="post-meta">{{ storia.date | date: "%d/%m/%Y" }}</span>
            <h4>
              <a href="{{ site.baseurl }}{{ storia.url }}">{{ storia.title }}</a>
            </h4>
            {% if storia.location %}
              <span class="storia-location">{{ storia.location }}</span>
            {% endif %}
          </li>
        {% endfor %}
      </ul>
    {% endfor %}
  </div>

  <h2>Tag</h2>
  <div class="tag-cloud">
    {% for tag in site.tags %}
      <a href="#{{ tag[0] | slugify }}" class="tag">{{ tag[0] }}</a>
    {% endfor %}
  </div>

  <div class="tag-list">
    {% for tag in site.tags %}
      <h3 id="{{ tag[0] | slugify }}">{{ tag[0] }}</h3>
      <ul class="storie-list">
        {% for storia in tag[1] %}
          <li>
            <span class="post-meta">{{ storia.date | date: "%d/%m/%Y" }}</span>
            <h4>
              <a href="{{ site.baseurl }}{{ storia.url }}">{{ storia.title }}</a>
            </h4>
            {% if storia.location %}
              <span class="storia-location">{{ storia.location }}</span>
            {% endif %}
          </li>
        {% endfor %}
      </ul>
    {% endfor %}
  </div>
</div>
