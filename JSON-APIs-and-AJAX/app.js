//1. Trigger click events with jQuery
$(document).ready(function() {
  $("#getMessage").on("click", function() {
      //2. Change Text with Click Events
      $(".message").html("Here is the message");
     })
});
