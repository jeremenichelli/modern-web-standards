---
layout: base
pagination:
  data: features
  size: 1
  alias: feature
eleventyComputed:
  title: '{{ feature.name }} — The New Defaults of the Modern Web'
permalink: '/{{ feature.id }}/'
---

<div class="feature">
<style>
    .feature {
      --background--one: {{ feature.--background--one }};
      --background--two: {{ feature.--background--two }};
      --text: {{ feature.--text }};
      --link: {{ feature.--link }};
    }
  </style>
    <h1 class="feature-title">{{ feature.name }}</h1>
    <p class="feature-description">{{ feature.description }}</p>
    <p>
    <a class="feature-link" target="_blank" href="{{ feature.link }}">{{ feature.link }}</a>
    </p>
    <p>
    <a class="back-link" href="/">← Go back home</a>
    </p>
</div>
