---
layout: layouts/base.njk
title: Kontakt
description: Kontakt z Arturem Buszkiem.
permalink: /kontakt/index.html
---
<div class="container">
  <section class="page-hero">
    <div class="eyebrow">Kontakt</div>
    <h1>Masz sprawę, pomysł albo chcesz porozmawiać?</h1>
    <p>Napisz wiadomość i krótko opisz temat. Możesz też skontaktować się przez Facebook albo Instagram.</p>
  </section>

  <section class="prose">
    <p>
      <strong>E-mail:</strong>
      <a href="mailto:{{ site.email }}">{{ site.email }}</a>
    </p>

{% if site.facebook %}
<p>
  <strong>Facebook:</strong>
  <a href="{{ site.facebook }}" target="_blank" rel="noopener">
    facebook.com/buszekartur
  </a>
</p>
{% endif %}

{% if site.instagram %}
<p>
  <strong>Instagram:</strong>
  <a href="{{ site.instagram }}" target="_blank" rel="noopener">
    @buszekartur
  </a>
</p>
{% endif %}

<div class="note">
  W sprawach związanych z pełnioną funkcją publiczną warto korzystać także z właściwych oficjalnych kanałów instytucjonalnych.
</div>

  </section>
</div>
