$(document).ready(function() {
    $('#search').click(function() {
        //Get search input
        var searchTerm = $('#searchTerm').val();

        //API url with searchTerm
        var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm +"&format=json&callback=?"

        $.ajax({
            type: "GET",
            url: url,
            async: false,
            dataType: "json",
            success: function(data) {
                var output = $("#output");
                for (var i=0; i<data[1].length; i++) {
                    output.append('<li>' + data[1][0] + '</li>');
                    output.append('<li>' + data[2][0] + '</li>');
                    output.append('<li><a href=' +  data[3][0]  + '>'+ data[3][0] +'</li>');
                }
                //get heading console.log(data[1][0]);
                //get description console.log(data[2][0]);
                //get link console.log(data[3][0]);
            },
            error: function(errorMessage) {
                alert("Error")
            }
        });
    });
});
