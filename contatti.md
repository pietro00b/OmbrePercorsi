---
layout: page
title: Contatti
permalink: /contatti/
---

# Contatti

Hai una storia da condividere? Vuoi raccontarmi la tua esperienza di viaggio? Non esitare a contattarmi.

## Informazioni di contatto

- Email: [{{ site.email }}](mailto:{{ site.email }})

## Social Media

{% for social in site.social %}
{% if social.url != null %}
- [{{ social.name }}]({{ social.url }})
{% endif %}
{% endfor %}

