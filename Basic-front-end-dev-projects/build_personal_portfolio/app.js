$(document).ready(function(){
   var scroll_start = 0;
   var startchange = $('#startchange');
   var offset = startchange.offset();
   $(document).scroll(function() {
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $('.navbar').css('background-color', 'rgba(255,255,255,0.80)');
          $('.navbar a').css('color', '#000');
       } else {
          $('.navbar').css('background-color', 'rgba(255,255,255,0.0)');
          $('.navbar a').css('color', '#FFF');
       }
   });
});
