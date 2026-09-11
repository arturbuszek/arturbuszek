---
layout: layouts/base.njk
title: Kontakt
description: Kontakt z Arturem Buszkiem.
permalink: /kontakt/index.html
---
<div class="container">
<section class="contact-page-grid">
  <div class="contact-page-copy">
    <div class="eyebrow">Kontakt</div>
    <h1>Masz sprawę, pomysł albo chcesz porozmawiać?</h1>
    <p>Najprościej napisać wiadomość. Jeśli sprawa dotyczy konkretnej instytucji albo postępowania, zaznacz to od razu w treści.</p>
    <div class="contact-links">
      <a href="mailto:{{ site.email }}"><span>E-mail</span><strong>{{ site.email }}</strong></a>
      {% if site.instagram %}<a href="{{ site.instagram }}" target="_blank" rel="noopener"><span>Instagram</span><strong>@buszekartur ↗</strong></a>{% endif %}
    </div>
    <p class="contact-note">Sprawy związane z pełnioną funkcją publiczną mogą wymagać kontaktu oficjalnym kanałem Urzędu Miasta Krakowa.</p>
  </div>
  <figure class="contact-page-photo">
    <img src="/assets/photos/artur-buszek-kontakt.webp" alt="Artur Buszek">
  </figure>
</section>
</div>
