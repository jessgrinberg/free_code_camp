//Run our jQuery
$(document).ready(function() {

    $.ajax({
    type: "GET",
    url: "https://api.twitch.tv/kraken/streams/freecodecamp",
    headers: {
        'Client-ID': 'jqid6bqablk6skn7fz1n39qxmz75d3'
    },
    success: function(data1) {
        if(data1.stream === null) {
            $("#fccstatus").html("Free code camp us currently OFFLINE!")
        } else {
             $("#fccstatus").html("Free code camp us currently ONLINE!")
         }
        }
    });


});
