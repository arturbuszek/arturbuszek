# arturbuszek.pl — GitHub + Cloudflare Pages + Eleventy

Ten projekt jest przygotowany do automatycznego wdrażania przez Cloudflare Pages z repozytorium GitHub.

## Najważniejsze ustawienia Cloudflare Pages

- Framework preset: **Eleventy**
- Production branch: `main`
- Build command: `npx @11ty/eleventy`
- Build output directory: `_site`
- Root directory: zostaw puste

## Pierwsze uruchomienie lokalne

Wymagane: Node.js 20+.

```bash
npm install
npm run start
```

Eleventy uruchomi lokalny serwer pod adresem wskazanym w terminalu.

## Jak dodać nową aktualność

1. Otwórz folder `src/aktualnosci/`.
2. Skopiuj plik `SZABLON-WPISU.md`.
3. Zmień nazwę, np. `2026-09-20-tytul-artykulu.md`.
4. Uzupełnij nagłówek YAML i treść.
5. Dodaj zdjęcie do `src/assets/`.
6. Ustaw `image: /assets/nazwa-zdjecia.jpg`.
7. Zapisz i wyślij zmianę do GitHuba.

Przykład:

```md
---
layout: layouts/article.njk
title: Tytuł artykułu
description: Jednozdaniowy opis do listy i wyszukiwarki.
date: 2026-09-20
category: NGO
image: /assets/moje-zdjecie.jpg
imageAlt: Opis zdjęcia
author: Artur Buszek
draft: false
permalink: /aktualnosci/tytul-artykulu/index.html
---

Pierwszy akapit.

## Śródtytuł

Dalsza treść.
```

## Wersja robocza

Jeżeli wpis ma nie być publikowany, ustaw:

```yaml
draft: true
```

Po zmianie na `false` i wysłaniu do `main` zostanie opublikowany.

## Jak edytować stronę O mnie

Edytuj:

`src/o-mnie.md`

## Jak edytować kontakt i podstawowe dane

Edytuj:

`src/_data/site.json`

## Zdjęcia

Wrzuć plik JPG/WEBP do:

`src/assets/`

i odwołuj się do niego jako:

`/assets/nazwa-pliku.jpg`

Najlepiej:
- szerokość 1200–1800 px,
- WebP lub JPG,
- rozsądna kompresja,
- krótkie nazwy bez spacji i polskich znaków.

## Automatyczna publikacja

Po każdym `git push` do gałęzi `main` Cloudflare Pages:
1. pobiera repozytorium,
2. instaluje zależności,
3. uruchamia Eleventy,
4. publikuje katalog `_site`.

Zmiany na innych gałęziach mogą dostać osobny Preview URL.
