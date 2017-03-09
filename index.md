---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: home
---
<div class="card-grid">
  {% for card in site.data.beatles %}
  <div class="card-wrapper">
    <div class="card">
      <h3 class="card-title">{{card.title}}</h3>
      <img class="card-image" src="{{card.cover}}" alt="{{card.title}}">
      <p class="card-description">
        {{card.description | truncate:100}}
      </p>
      <a href="#" class="buy-button button info">
        Buy Now
      </a>
    </div>
  </div>
  {% endfor %}
</div>
