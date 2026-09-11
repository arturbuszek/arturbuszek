---
layout: layouts/base.njk
title: Działam
description: "Konkretne sprawy, działania i rezultaty pracy publicznej Artura Buszka."
permalink: /dzialam/index.html
---

<div class="container">
  <section class="page-hero">
    <div class="eyebrow">Działam</div>
    <h1>Nie katalog spotkań. Katalog spraw i rezultatów.</h1>
    <p>Pokazuję procesy, w których ważne jest nie tylko to, że odbyło się spotkanie, ale przede wszystkim: jaki był problem, co zrobiliśmy i co z tego wynikło.</p>
  </section>

  <section class="list-stack">
    {% for post in collections.dzialam %}
    <article class="list-item">
      {% if post.data.image %}
      <img src="{{ post.data.image }}" alt="{{ post.data.imageAlt or post.data.title }}">
      {% endif %}
      <div>
        <span class="tag">{{ post.data.category or "Działam" }}</span>
        <h3><a href="{{ post.url }}">{{ post.data.title }}</a></h3>
        {% if post.data.description %}<p>{{ post.data.description }}</p>{% endif %}
      </div>
    </article>
    {% endfor %}
  </section>
</div>
