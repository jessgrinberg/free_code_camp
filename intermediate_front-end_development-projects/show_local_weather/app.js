
var temp;
var currentUnit = 'metric';

  var getIP = 'http://ip-api.com/json/';
  $.getJSON(getIP).done(function(location) {
      $("#city").html(location.city)
  });

  var openWeatherMap = 'http://api.openweathermap.org/data/2.5/weather'
  $.getJSON(getIP).done(function(location) {
    $.getJSON(openWeatherMap, {
        lat: location.lat,
        lon: location.lon,
        units: currentUnit,
        APPID: '8ede00cd5fdb826f5e1ee572a29dc74f'
    }).done(function(weather) {
        temp = weather.main.temp;
        renderTemp();
        $("#convertTempBtn").click(function () {
            return convertTemp()
        });
        $("#description").html(weather.weather[0].description);
        var iconCode = weather.weather[0].icon;
        var iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";
        $("#icon").html("<img src='" + iconUrl  + "'>");
        console.log(weather)
    });
});

function renderTemp() {
    var unitString = currentUnit === 'metric' ? ' C' : ' F';
    $("#temp").html(Math.round(temp) + unitString);
}

function convertTemp() {
    if (currentUnit == 'metric') {
        temp = (temp * (9/5)) + 32;
        currentUnit = 'farenheit';
    } else if (currentUnit == 'farenheit') {
        temp = (temp - 32) / (9/5);
        currentUnit = 'metric';
    }
    return renderTemp();
}
