$(function() {
  console.log('by Juyeon Kang');

var url = 'https://api.openweathermap.org/data/2.5/weather?id=519188&units=metric&APPID=8eb63a37b21bd02ccf7fcbf3494ffb5c'

  $.get(url, function(data) {

    console.log(data);
    
    var temperature = data.main.temp;
    console.log('temperature',temperature);

    if (temperature < 20) {
        $('#circle,#stroke,#triangle').css("background-color","yellow");
    }
    else if (temperature >= 20) {
        $('#circle,#stroke,#triangle').css("background-color","red");
    }
    else if (temperature >= 10 & temperature <= 20) {
        $('#circle,#stroke,#triangle').css("background-color","blue");
    }

//circle
    var humidity = data.main.humidity;
    console.log('humidity',humidity);

    if (humidity < 50) {
        $('.humidity').css("border-radius","20%");
    }
    else if (humidity >= 50) {
        $('.humidity').css("border-radius","60%");
    }
    else if (humidity >= 40 & humidity <= 50) {
        $('.humidity').css("border-radius","100%");
    }


    var cloudiness = data.clouds.all;
    console.log('cloudiness',cloudiness);

    if (cloudiness < 10) {
        $('.cloudiness').css("opacity","0.2");
    }
    else if (cloudiness >= 10) {
        $('.cloudiness').css("opacity","0.5");
    }
    else if (cloudiness >= 5 & cloudiness <= 10) {
        $('.cloudiness').css("opacity","1");
    }


//stroke
    var windspeed = data.wind.speed;
    console.log('windspeed',windspeed);

    if (windspeed < 5) {
        $('.windspeed').css("transform","rotate(45deg)");
    }
    else if (windspeed >= 5) {
        $('.windspeed').css("transform","rotate(90deg)");
    }
    else if (windspeed >= 2 & windspeed <= 5) {
        $('.windspeed').css("transform","rotate(135deg)");
    }


    var weathertext = data.weather[0].main;
    console.log('weathertext',weathertext);

    if (weathertext = "clear") {
        $('.weathertext').css("height","150px");
    }
    else if (windspeed = "clouds") {
        $('.weathertext').css("height","100px");
    }
    else if (weathertext = "rain, snow" ) {
        $('.weathertext').css("height","50px");
    }
  });


//traingle
    var pressure = data.main.pressure;
    console.log('pressure',pressure);

    if (pressure < 5) {
        $('.pressure').css("","");
    }
    else if (pressure >= 5) {
        $('.pressure').css("","");
    }
    else if (pressure >= 2 & windspeed <= 5) {
        $('.pressure').css("","");
    }


    var weathertext = data..main;
    console.log('weathertext',weathertext);

    if (weathertext = "clear") {
        $('.weathertext').css("height","150px");
    }
    else if (windspeed = "clouds") {
        $('weathertext').css("height","100px");
    }
    else if (weathertext = "rain, snow" ) {
        $('.weathertext').css("height","50px");
    }
  });
});

