---
layout: default
title: Home
---

<div class="home">
  <div class="site-header-container">
    <div class="scrim">
      <header class="site-header-content">
        <h1 class="title">{{ site.title }}</h1>
        <p class="subtitle">{{ site.description }}</p>
      </header>
    </div>
  </div>

  <div class="wrapper">
    <div class="home-intro">
      <h2>Tracce di luoghi, storie e persone</h2>
      <p>Benvenuti nel mio archivio di esperienze, un blog dedicato ai viaggi, alle persone incontrate e alle storie raccolte lungo il cammino.</p>
    </div>

    <h2 class="section-title">Storie Recenti</h2>
    <div class="storie-list">
      {% for storia in site.storie limit:5 %}
      <article class="post">
        <div class="post-meta">
          <time datetime="{{ storia.date | date_to_xmlschema }}">{{ storia.date | date: "%d/%m/%Y" }}</time>
          {% if storia.location %}
          <span class="location"><i class="fas fa-map-marker-alt"></i> {{ storia.location }}</span>
          {% endif %}
        </div>
        <h3 class="post-title">
          <a href="{{ storia.url | relative_url }}">{{ storia.title }}</a>
        </h3>
        <section class="post-excerpt">
          {{ storia.excerpt }}
          <a class="read-more" href="{{ storia.url | relative_url }}">Continua a leggere &rarr;</a>
        </section>
      </article>
      {% endfor %}
    </div>

    <div class="see-all">
      <a href="{{ '/archivio' | relative_url }}" class="button">Vedi tutte le storie &rarr;</a>
    </div>
  </div>
</div>
