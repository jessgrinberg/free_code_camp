  var getIP = 'http://ip-api.com/json/';
  $.getJSON(getIP).done(function(location) {
      console.log(location.city)
      $("#city").html(location.city)
  })

  var openWeatherMap = 'http://api.openweathermap.org/data/2.5/weather'
  $.getJSON(getIP).done(function(location) {
    $.getJSON(openWeatherMap, {
        lat: location.lat,
        lon: location.lon,
        units: 'metric',
        APPID: '8ede00cd5fdb826f5e1ee572a29dc74f'
    }).done(function(weather) {
        $("#toggleTemp").click(function () {
             var text = $('#toggleTemp').text();
             $(this).text(text == "C" ? "F" : "C");
          });
        $("#temp").html(Math.round(weather.main.temp));
        $("#description").html(weather.weather[0].description);
        var iconCode = weather.weather[0].icon;
        var iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";
        $("#icon").html("<img src='" + iconUrl  + "'>");

        console.log(weather)
    })
})
