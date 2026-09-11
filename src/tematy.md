---
layout: layouts/base.njk
title: Tematy
description: "Tematy i idee, którymi Artur Buszek zajmuje się długofalowo: samorząd, społeczeństwo obywatelskie, lokalne wspólnoty i bezpieczeństwo."
permalink: /tematy/index.html
---

<div class="container">
  <section class="page-hero">
    <div class="eyebrow">Tematy</div>
    <h1>Sprawy, którymi zajmuję się długofalowo.</h1>
    <p>Nie program wyborczy, lecz miejsce na pogłębione teksty o samorządzie, społeczeństwie obywatelskim i lokalnych wspólnotach.</p>
  </section>

  <section class="list-stack">
    {% for post in collections.tematy %}
    <article class="list-item">
      {% if post.data.image %}
      <img src="{{ post.data.image }}" alt="{{ post.data.imageAlt or post.data.title }}">
      {% endif %}
      <div>
        <span class="tag">{{ post.data.category or "Tematy" }}</span>
        <h3><a href="{{ post.url }}">{{ post.data.title }}</a></h3>
        {% if post.data.description %}<p>{{ post.data.description }}</p>{% endif %}
      </div>
    </article>
    {% endfor %}
  </section>
</div>
