$(function() {
  console.log('hello');

  var url = 'http://api.openweathermap.org/data/2.5/weather?id=519188&units=metric&APPID=8eb63a37b21bd02ccf7fcbf3494ffb5c'

  $.get(url, function(data) {
    // The get request fires a callback function when the API request finishes
    console.log(data);
    // The data object contains all the information returned in the API
    
    var humidity = data.main.humidity;
    console.log('humidity',humidity);
    // In this case, the most interesting bit of data is in the weather key
    // Now do something interesting with the data!
    if (humidity < 50) {
        $('.humidity').append('Dry :(');
    }
    else if (humidity >= 50) {
        $('.humidity').append('Too Humid :(');
    }
    else if (humidity >= 40 & humidity <= 50) {
        $('.humidity').append('Nice Humidity! :)');
    }

    var wind = data.wind.speed;
    console.log('wind',wind);
    $('.wind').append(wind);

    var sun = data.precipitation.value;
    console.log('rain',rain);
    $('.rain').append(rain);
  });


});
