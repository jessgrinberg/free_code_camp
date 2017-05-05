//1. Trigger click events with jQuery
$(document).ready(function() {
  $("#getMessage").on("click", function() {
      //2. Change Text with Click Events
      //$(".message").html("Here is the message");

      //3.Get JSON with the jQuery getJSON Method
    $.getJSON("/json/cats.json", function(json) {
      $(".message").html(JSON.stringify(json));
    });
  })
});
