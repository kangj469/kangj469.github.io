$(function() {
  console.log('hello');

var url = 'https://api.openweathermap.org/data/2.5/weather?id=519188&units=metric&APPID=8eb63a37b21bd02ccf7fcbf3494ffb5c'

  $.get(url, function(data) {

    console.log(data);
    
    var temperature = data.main.temp;
    console.log('temperature',temperature);

    if (temperature < 20) {
        $('.temperature').css("border-radius","20%");
    }
    else if (temperature >= 20) {
        $('.temperature').css("border-radius","60%");
    }
    else if (temperature >= 10 & temperature <= 20) {
        $('.temperature').css("border-radius","100%");
    }




    var humidity = data.main.humidity;
    console.log('humidity',humidity);

    if (humidity < 50) {
        $('.humidity').css("background-color","red");
    }
    else if (humidity >= 50) {
        $('.humidity').css("background-color","yellow");
    }
    else if (humidity >= 40 & humidity <= 50) {
        $('.humidity').css("background-color","green");
    }

  });


});

