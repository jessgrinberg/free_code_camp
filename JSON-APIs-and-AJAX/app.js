//1. Trigger click events with jQuery
$(document).ready(function() {
  $("#getMessage").on("click", function() {
      //2. Change Text with Click Events
      //$(".message").html("Here is the message");

      //3.Get JSON with the jQuery getJSON Method
        //   $.getJSON("/json/cats.json", function(json) {
        //       $(".message").html(JSON.stringify(json));
        //   });

    //4.Convert JSON Data to HTM
    $("#getMessage").on("click", function() {
      $.getJSON("/json/cats.json", function(json) {

        var html = "";

        //6.Prefilter JSON
        json = json.filter(function(val) {
          return (val.id !== 1);
        })

        json.forEach(function(val) {
          var keys = Object.keys(val);
          html += "<div class = 'cat'>";
          keys.forEach(function(key) {
            html += "<strong>" + key + "</strong>:" + val[key] + "<br>";
            //5.Render Images from Data Sources
            html+= "<img src= '" + val.imageLink + "' " + "alt='" + val.altText + "'>";
            html += "</div><br>";
          })
        })

        $(".message").html(html);

      });
    });
  })
});
