
{% for job in site.data.jobs %}
  <div id="{{ job.id }}" class="job">
    <a href="#{{ job.id }}" class="job-open drop rounded" onclick='ga("send", "event", "jobs", "view", "{{ job.id }}");'></a>
    <a href="#{{ job.id }}-info" class="job-close">&times;</a>
    <div id="{{ job.id }}-info" class="job-info pa3">
      <div class="job-info__inner">
        <div class="job-logo left-over-s mr3" style="background-image: url({{ job.logo }});"></div>
        <div class="job-text table">
          <h3 class="job-title block-link__highlight color-blue mv0">{{ job.title }}</h3>
          <p class="mv0"><strong>{{ job.company }}</strong></p>
          <p class="mv0">{{ job.money-min }}-{{ job.money-max }}  ·  {{ job.engagement-length }}  ·  {{ job.location }}</p>
          <div class="job-text-extended hidden row">
            {{ job.longdescription | markdownify }}
            <a  onclick='ga("send", "event", "jobs", "apply", "{{ job.id }}");' href="{{ job.url }}">Apply for this job</a>
          </div><!-- job-text-extended -->
        </div><!-- job-text -->        
      </div>
    </div><!-- job-info -->
  </div>
{% endfor %}


<!-- <script>
  $(function() {

    $('.job-open,.job-close').on('click tap', function(e){
      e.preventDefault();
      if ( $(this).closest('.job').hasClass('job-target') ) {
        $(this).closest('.job').removeClass('job-target');
        $('body').removeClass('job-open');
        $(this).closest('.job').find('.job-info').attr('style','')
      } else {


      _target   = $(this).closest('.job').find('.job-info');
      _width    = _target.width();
      _height   = _target.height();
      _top      = _target[0].getBoundingClientRect().top;
      _left     = _target[0].getBoundingClientRect().left;

      _target.css({
        "height": _height, 
        "width":  _width,
        "top":    _top,
        "left":   _left,
        "position": "fixed"
      }).closest('.job').addClass('job-target').closest('body').addClass('job-open');
      }

    });

  });
</script> -->