---
layout: base
eleventyComputed:
  title: '{{ site.title }}'
---

<section class="pane" id="intro">
<style>
    #intro {
      --background--one: hsl(30deg, 100%, 97.5%);
      --background--two: hsl(250deg, 100%, 95%);
      --text: #000;
      --link: #000;
    }
  </style>
	<div class="inner-pane">
		<h1 class="pane-title">The New Defaults of the Modern Web</h1>
		<button class="arrow scroll-cta" aria-label="Scroll to content">↓</button>        
	</div>
</section>
{%- for feature in features -%}
<section class="pane" id="{{ feature.id }}">
  <style>
    #{{feature.id}} {
      --background--one: {{ feature.--background--one }};
      --background--two: {{ feature.--background--two }};
      --text: {{ feature.--text }};
      --link: {{ feature.--link }};
    }
  </style>
	<div class="inner-pane">
    <a href="{{ feature.id }}" aria-label="Go to {{ feature.name }} page">
      <h2 class="pane-title">{{ feature.name }}</h2>
      <span class="arrow">→</span>
    </a>
  </div>
</section>
{%- endfor -%}

<script src="/assets/scripts/home.js" defer></script>
