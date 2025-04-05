---
layout: default
title: Home
---

<div class="home">
  <div class="site-header-container">
    <div class="site-header-content">
   
      <h2 class="subtitle">Tracce di luoghi, storie e persone</h2>
    </div>
  </div>

  <div class="wrapper">
    <div class="storie-list">
      {% for storia in site.storie limit:5 %}
        <div class="storia-preview">
          <h2><a href="{{ storia.url | relative_url }}">{{ storia.title }}</a></h2>
          <p class="storia-meta">
            <time datetime="{{ storia.date | date_to_xmlschema }}">
              {{ storia.date | date: "%d/%m/%Y" }}
            </time>
            {% if storia.location %}
              &bull; <span class="storia-location">{{ storia.location }}</span>
            {% endif %}
            {% if storia.categories %}
              &bull;
              {% for category in storia.categories %}
                <a class="post-cat" href="{{ site.baseurl }}/archivio/#{{ category | slugify }}">{{ category }}</a>
                {% unless forloop.last %}, {% endunless %}
              {% endfor %}
            {% endif %}
          </p>
          <div class="storia-excerpt">
            {{ storia.excerpt }}
          </div>
          <p><a href="{{ storia.url | relative_url }}" class="read-more">Continua a leggere &rarr;</a></p>
        </div>
      {% endfor %}
    </div>

    <div class="see-all">
      <a href="{{ '/archivio' | relative_url }}">Vedi tutte le storie &rarr;</a>
    </div>
  </div>
</div>
