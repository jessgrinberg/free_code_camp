//Run our jQuery
$(document).ready(function() {
    var following = [];

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

    $.ajax({
    type: "GET",
    url: "https://api.twitch.tv/kraken/users/freecodecamp/follows/channels",
    headers: {
        'Client-ID': 'jqid6bqablk6skn7fz1n39qxmz75d3'
    },
    success: function(data2) {
            for (var i=0; i<data2.follows.length ; i++) {
                //gets displayName
                var displayName = data2.follows[i].channel.display_name;
    
                following.push(displayName);
            }
            following.push('jessica');
            following.push('grinberg');
            for (var i = 0; i<following.length; i++) {
                var url2= "https://api.twitch.tv/kraken/streams/" + following[i] + '?/callback=?';
                $.ajax({
                type: "GET",
                url: "https://api.twitch.tv/kraken/streams/freecodecamp",
                headers: {
                    'Client-ID': 'jqid6bqablk6skn7fz1n39qxmz75d3'
                },
                success: function(data1) {

                });
            }
        }
    });


});
