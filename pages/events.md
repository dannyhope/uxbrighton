---
layout: event-list-page
title: Events
subtitle: Upcoming and past UX Brighton events
description: A list of future & past events that we've organised.
permalink: events
redirect_from:
  - /archive
  - /e
  - /media
  - /slides
  - /slidedecks
  - /slide-decks
  - /vid
  - /vids
  - /video
  - /videos
seo: true
---

<!-- Sample links with search parameters -->
<!-- [Mentorship](?filter=mentorship) · [Design](?filter=design) · [Conference](?filter=conference) · [Psychology](?filter=psycho) · [UX Brighton Socials](?filter=ux+brighton+social) -->

## Upcoming

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

## Past

<ul class="event-archive list no-list">
<!-- {% for post in site.posts %}
{% if post.noinfo == null %}
{% if post.stub == null %} -->
  {% if post.upcoming == null or post.upcoming == false %}
  <li>
    <article>
      <h3 class="post-title"><a href="{{ site.url }}{{post.url}}">{{ post.title }}</a></h3>
      <p class="post-date">{{ post.date | date: "%d %B, %Y" }}</p>
      <div class="post-excerpt">{{ post.content | strip_html }}</div>
    </article>
  </li>
  {% endif %}
<!-- {% endif %}
{% endif %} -->
{% endfor %}
</ul>

<!-- ## Past events without much info

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
</ul> -->

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
