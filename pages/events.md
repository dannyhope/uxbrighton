---
layout: generic
title: Upcoming and past events
subtitle: A list of future & past events that we've organised
description: A list of future & past events that we've organised.
permalink: events
redirect_from:
  - /archive
  - /media
  - /vid
  - /vids
  - /video
  - /videos
  - /slides
  - /slidedecks
  - /slide-decks
seo: true
---

## Upcoming:

<ul class="event-archive no-list">
{% for post in site.posts %}
  {% if post.upcoming == true %}
  <li>
    <article>
      <h3><a href="{{ site.url }}{{post.url}}">{{ post.title }}</a></h3>
      <p>{{ post.date | date: "%d %B, %Y" }}</p>
    </article>
  </li>
  {% endif %}
{% endfor %}
</ul>

## Past:

<ul class="event-archive no-list">
{% for post in site.posts %}
{% if post.noinfo == null %}
{% if post.stub == null %}
  {% if post.upcoming == null or post.upcoming == false %}
  <li>
    <article>
      <h3><a href="{{ site.url }}{{post.url}}">{{ post.title }}</a></h3>
      <p>{{ post.date | date: "%d %B, %Y" }}</p>
    </article>
  </li>
  {% endif %}
{% endif %}
{% endif %}
{% endfor %}
</ul>

## Past events without much info

We don't have much information about the following past events. You can help us contribute content by getting in touch on Twitter or GitHub.

<ul class="event-archive no-list">
{% for post in site.posts %}
  {% if post.noinfo == true %}
  <li>
    <article>
      <h3><a href="{{ site.url }}{{post.url}}">{{ post.title }}</a></h3>
      <p>{{ post.date | date: "%d %B, %Y" }}</p>
    </article>
  </li>
  {% endif %}
{% endfor %}
</ul>

<!-- ## Future events

The following events are mere ideas. If you'd like to speak at or help organise any of these, get in touch.

<ul class="event-archive no-list">
{% for post in site.posts %}
  {% if post.stub == true %}
  <li>
    <article>
      <h3><a href="{{ site.url }}{{post.url}}">{{ post.title }}</a></h3>
    </article>
  </li>
  {% endif %}
{% endfor %}
</ul> -->