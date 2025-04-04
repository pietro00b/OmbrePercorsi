---
layout: default
title: Archivio
permalink: /archivio/
---

<div class="archive-page">
  <header class="page-header">
    <h1 class="page-title">{{ page.title }}</h1>
    <p class="page-description">Esplora tutte le storie per categoria, tag o in ordine cronologico</p>
  </header>
  
  <div class="archive-navigation">
    <ul class="archive-nav-tabs">
      <li><a href="#categorie" class="archive-tab active">Categorie</a></li>
      <li><a href="#tags" class="archive-tab">Tags</a></li>
      <li><a href="#cronologico" class="archive-tab">Cronologico</a></li>
    </ul>
  </div>
  
  <div id="categorie" class="archive-section active">
    <h2>Storie per categoria</h2>
    
    <div class="categories-list">
      {% for category in site.categories %}
        <div class="category-block">
          <h3 id="{{ category[0] | slugify }}">{{ category[0] | capitalize }}</h3>
          <ul class="storie-list">
            {% for storia in category[1] %}
              <li>
                <span class="storia-meta">{{ storia.date | date: "%d/%m/%Y" }}</span>
                <h4>
                  <a href="{{ site.baseurl }}{{ storia.url }}">{{ storia.title }}</a>
                </h4>
                {% if storia.location %}
                  <span class="storia-location"><i class="fas fa-map-marker-alt"></i> {{ storia.location }}</span>
                {% endif %}
              </li>
            {% endfor %}
          </ul>
        </div>
      {% endfor %}
    </div
