---
layout: page
title: Galleria
permalink: /galleria/
---

# Galleria Fotografica

Benvenuti nella galleria fotografica di Ombre e Percorsi. Qui troverete una selezione di immagini dai luoghi che ho visitato, organizzate per paese e città.

<div class="gallery-categories">
  <h2>Bulgaria</h2>
  <div class="image-gallery">
    {% for image in site.static_files %}
      {% if image.path contains 'assets/img/sofia' %}
        <div class="gallery-item">
          <a href="{{ image.path | relative_url }}" class="lightbox">
            <img src="{{ image.path | relative_url }}" alt="Sofia, Bulgaria" />
          </a>
          <p class="caption">Sofia, Bulgaria</p>
        </div>
      {% endif %}
    {% endfor %}
  </div>
  
  <h2>Altre destinazioni</h2>
  <p>Galleria in fase di allestimento. Presto saranno disponibili altre immagini organizzate per luogo.</p>
</div>
