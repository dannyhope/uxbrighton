var TTWidget = {
  init: function() {
      // load the widget HTML on the page if it's not there already
      if(!document.getElementById("tt_widget_overlay_wrapper")) {
          var widgetHtml = document.createElement('div');
          widgetHtml.id = 'tt_widget_overlay_wrapper';
          widgetHtml.innerHTML = TTWidget.html;
          document.body.appendChild(widgetHtml);
      }
  },
  loadEvent: function(boxOffice, eventSeriesId, ref = 'widget') {
      this.init();
      var url = 'https://www.tickettailor.com/events/' + boxOffice + '/' + eventSeriesId + '/book?ref=' + ref + "&modal_widget=true&widget=true";
      document.getElementById('tt_widget_overlay_wrapper').style.display = "block";
      document.getElementsByTagName("body")[0].style.overflow = 'hidden';
      this.loadUrl(url);
      document.getElementsByTagName("body")[0].style.maxHeight = '100%';
  },
  loadEventOccurrence: function(boxOffice, eventId, ref = 'widget') {
      this.init();
      var url = 'https://www.tickettailor.com/events/' + boxOffice + '/' + eventId + '/select-tickets?ref=' + ref + "&modal_widget=true&widget=true";
      document.getElementById('tt_widget_overlay_wrapper').style.display = "block";
      document.getElementsByTagName("body")[0].style.overflow = 'hidden';
      this.loadUrl(url);
      document.getElementsByTagName("body")[0].style.maxHeight = '100%';
  },
  loadUrl: function(url) {
      var widgetIframe = document.getElementById("tt_widget_iframe");
      if(widgetIframe) {
          widgetIframe.setAttribute('src',url);
      } else {
          setTimeout("TTWidget.loadUrl('"+url+"');", 200);
      }
  },
  close: function(url) {
      document.getElementById('tt_widget_overlay_wrapper').style.display = "none";
      document.getElementsByTagName("body")[0].style.overflow = 'initial';
      document.getElementById('tt_widget_iframe').setAttribute('src', "");
      document.getElementsByTagName("body")[0].style.maxHeight = 'auto';
  },
  html: "<div class=\"tt_widget_overlay\" style='position: fixed; top: 0; right: 0; bottom: 0; left: 0; background:rgba(0,0,0,.7); z-index: 997; '></div>\n" +
      "\n" +
      "    <div style=\"position: fixed; z-index: 999; top:0; left: 0; right: 0; bottom: 0;\">\n" +
      "        <iframe title=\"Checkout\" style=\"height: 100%; width: 100%;\" src=\"\" id=\"tt_widget_iframe\" frameborder=\"0\" role=\"dialog\" aria-live=\"assertive\" aria-labelledby=\"dialog_header\"></iframe>\n" +
      "    </div>\n" +
      "\n" +
      "    <a href=\"javascript: //\" aria-label=\"Close modal\" class=\"tt_widget_close_button\" style=\"position: fixed;\" onclick=\"TTWidget.close();\">\n" +
      "        <svg alt=\"Close modal\" height=\"30px\" id=\"Layer_1\" style=\"enable-background:new 0 0 30 30; fill: #f00;\" version=\"1.1\" viewBox=\"0 0 512 512\" width=\"30px\" xml:space=\"preserve\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><path d=\"M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z\"></path></svg>\n" +
      "    </a>\n" +
      "    <svg width=\"200px\" height=\"200px\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\" style=\"position: fixed; top: 35px; left: 50%; z-index: 998; margin-left: -100px; animation-play-state: running; animation-delay: 0s; background: none;\"><g transform=\"rotate(0 50 50)\" style=\"animation-play-state: running; animation-delay: 0s; position: fixed;\">\n" +
      "            <rect x=\"49\" y=\"37\" rx=\"0\" ry=\"0\" width=\"2\" height=\"6\" fill=\"#ffffff\" style=\"animation-play-state: running; animation-delay: 0s;\">\n" +
      "                <animate attributeName=\"opacity\" values=\"1;0\" times=\"0;1\" dur=\"1s\" begin=\"-0.9166666666666666s\" repeatCount=\"indefinite\" style=\"animation-play-state: running; animation-delay: 0s;\"></animate>\n" +
      "            </rect>\n" +
      "        </g><g transform=\"rotate(30 50 50)\" style=\"animation-play-state: running; animation-delay: 0s;\">\n" +
      "            <rect x=\"49\" y=\"37\" rx=\"0\" ry=\"0\" width=\"2\" height=\"6\" fill=\"#ffffff\" style=\"animation-play-state: running; animation-delay: 0s;\">\n" +
      "                <animate attributeName=\"opacity\" values=\"1;0\" times=\"0;1\" dur=\"1s\" begin=\"-0.8333333333333334s\" repeatCount=\"indefinite\" style=\"animation-play-state: running; animation-delay: 0s;\"></animate>\n" +
      "            </rect>\n" +
      "        </g><g transform=\"rotate(60 50 50)\" style=\"animation-play-state: running; animation-delay: 0s;\">\n" +
      "            <rect x=\"49\" y=\"37\" rx=\"0\" ry=\"0\" width=\"2\" height=\"6\" fill=\"#ffffff\" style=\"animation-play-state: running; animation-delay: 0s;\">\n" +
      "                <animate attributeName=\"opacity\" values=\"1;0\" times=\"0;1\" dur=\"1s\" begin=\"-0.75s\" repeatCount=\"indefinite\" style=\"animation-play-state: running; animation-delay: 0s;\"></animate>\n" +
      "            </rect>\n" +
      "        </g><g transform=\"rotate(90 50 50)\" style=\"animation-play-state: running; animation-delay: 0s;\">\n" +
      "            <rect x=\"49\" y=\"37\" rx=\"0\" ry=\"0\" width=\"2\" height=\"6\" fill=\"#ffffff\" style=\"animation-play-state: running; animation-delay: 0s;\">\n" +
      "                <animate attributeName=\"opacity\" values=\"1;0\" times=\"0;1\" dur=\"1s\" begin=\"-0.6666666666666666s\" repeatCount=\"indefinite\" style=\"animation-play-state: running; animation-delay: 0s;\"></animate>\n" +
      "            </rect>\n" +
      "        </g><g transform=\"rotate(120 50 50)\" style=\"animation-play-state: running; animation-delay: 0s;\">\n" +
      "            <rect x=\"49\" y=\"37\" rx=\"0\" ry=\"0\" width=\"2\" height=\"6\" fill=\"#ffffff\" style=\"animation-play-state: running; animation-delay: 0s;\">\n" +
      "                <animate attributeName=\"opacity\" values=\"1;0\" times=\"0;1\" dur=\"1s\" begin=\"-0.5833333333333334s\" repeatCount=\"indefinite\" style=\"animation-play-state: running; animation-delay: 0s;\"></animate>\n" +
      "            </rect>\n" +
      "        </g><g transform=\"rotate(150 50 50)\" style=\"animation-play-state: running; animation-delay: 0s;\">\n" +
      "            <rect x=\"49\" y=\"37\" rx=\"0\" ry=\"0\" width=\"2\" height=\"6\" fill=\"#ffffff\" style=\"animation-play-state: running; animation-delay: 0s;\">\n" +
      "                <animate attributeName=\"opacity\" values=\"1;0\" times=\"0;1\" dur=\"1s\" begin=\"-0.5s\" repeatCount=\"indefinite\" style=\"animation-play-state: running; animation-delay: 0s;\"></animate>\n" +
      "            </rect>\n" +
      "        </g><g transform=\"rotate(180 50 50)\" style=\"animation-play-state: running; animation-delay: 0s;\">\n" +
      "            <rect x=\"49\" y=\"37\" rx=\"0\" ry=\"0\" width=\"2\" height=\"6\" fill=\"#ffffff\" style=\"animation-play-state: running; animation-delay: 0s;\">\n" +
      "                <animate attributeName=\"opacity\" values=\"1;0\" times=\"0;1\" dur=\"1s\" begin=\"-0.4166666666666667s\" repeatCount=\"indefinite\" style=\"animation-play-state: running; animation-delay: 0s;\"></animate>\n" +
      "            </rect>\n" +
      "        </g><g transform=\"rotate(210 50 50)\" style=\"animation-play-state: running; animation-delay: 0s;\">\n" +
      "            <rect x=\"49\" y=\"37\" rx=\"0\" ry=\"0\" width=\"2\" height=\"6\" fill=\"#ffffff\" style=\"animation-play-state: running; animation-delay: 0s;\">\n" +
      "                <animate attributeName=\"opacity\" values=\"1;0\" times=\"0;1\" dur=\"1s\" begin=\"-0.3333333333333333s\" repeatCount=\"indefinite\" style=\"animation-play-state: running; animation-delay: 0s;\"></animate>\n" +
      "            </rect>\n" +
      "        </g><g transform=\"rotate(240 50 50)\" style=\"animation-play-state: running; animation-delay: 0s;\">\n" +
      "            <rect x=\"49\" y=\"37\" rx=\"0\" ry=\"0\" width=\"2\" height=\"6\" fill=\"#ffffff\" style=\"animation-play-state: running; animation-delay: 0s;\">\n" +
      "                <animate attributeName=\"opacity\" values=\"1;0\" times=\"0;1\" dur=\"1s\" begin=\"-0.25s\" repeatCount=\"indefinite\" style=\"animation-play-state: running; animation-delay: 0s;\"></animate>\n" +
      "            </rect>\n" +
      "        </g><g transform=\"rotate(270 50 50)\" style=\"animation-play-state: running; animation-delay: 0s;\">\n" +
      "            <rect x=\"49\" y=\"37\" rx=\"0\" ry=\"0\" width=\"2\" height=\"6\" fill=\"#ffffff\" style=\"animation-play-state: running; animation-delay: 0s;\">\n" +
      "                <animate attributeName=\"opacity\" values=\"1;0\" times=\"0;1\" dur=\"1s\" begin=\"-0.16666666666666666s\" repeatCount=\"indefinite\" style=\"animation-play-state: running; animation-delay: 0s;\"></animate>\n" +
      "            </rect>\n" +
      "        </g><g transform=\"rotate(300 50 50)\" style=\"animation-play-state: running; animation-delay: 0s;\">\n" +
      "            <rect x=\"49\" y=\"37\" rx=\"0\" ry=\"0\" width=\"2\" height=\"6\" fill=\"#ffffff\" style=\"animation-play-state: running; animation-delay: 0s;\">\n" +
      "                <animate attributeName=\"opacity\" values=\"1;0\" times=\"0;1\" dur=\"1s\" begin=\"-0.08333333333333333s\" repeatCount=\"indefinite\" style=\"animation-play-state: running; animation-delay: 0s;\"></animate>\n" +
      "            </rect>\n" +
      "        </g><g transform=\"rotate(330 50 50)\" style=\"animation-play-state: running; animation-delay: 0s;\">\n" +
      "            <rect x=\"49\" y=\"37\" rx=\"0\" ry=\"0\" width=\"2\" height=\"6\" fill=\"#ffffff\" style=\"animation-play-state: running; animation-delay: 0s;\">\n" +
      "                <animate attributeName=\"opacity\" values=\"1;0\" times=\"0;1\" dur=\"1s\" begin=\"0s\" repeatCount=\"indefinite\" style=\"animation-play-state: running; animation-delay: 0s;\"></animate>\n" +
      "            </rect>\n" +
      "        </g></svg>\n" +
      " <style type=\"text/css\">\n" +
      "    .tt_widget_close_button { top: 35px;left:50%; margin-left: 420px; width: 30px; height: 30px; color: white; text-align: center; z-index: 1001; }\n" +
      "    @media (max-width: 880px) {\n" +
      "        .tt_widget_close_button { top: 15px; right: 15px; margin: 0; left: auto; }\n" +
      "    }\n" +
      "</style>"
}
