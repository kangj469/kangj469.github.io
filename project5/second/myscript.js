$(function() {
  console.log('Juyeon X Kandinsky Weather');

var url = 'https://api.openweathermap.org/data/2.5/weather?id=5128581&units=metric&APPID=8eb63a37b21bd02ccf7fcbf3494ffb5c'

  $.get(url, function(data) {
    console.log(data);
 

var name = data.name;
console.log(name);

 //circle   

    var temperature = data.main.temp;
    console.log('temperature:',temperature);

    if (temperature < 20) {
        $('.temperature').css("background-color","rgba(255,0,0,0.6)");
    }
    else if (temperature >= 20) {
        $('.temperature').css("background-color","rgba(255,0,0,0.8)");
    }
    else if (temperature >= 10 & temperature <= 20) {
        $('.temperature').css("background-color","rgba(255,0,0,1)");
    }

    var humidity = data.main.humidity;
    console.log('humidity:',humidity);

    if (humidity < 50) {
        $('.humidity').css("background-color","rgba(255,255,0,0.6)");
    }
    else if (humidity >= 50) {
        $('.humidity').css("background-color","rgba(255,255,0,0.8)");
    }
    else if (humidity >= 40 & humidity <= 50) {
        $('.humidity').css("background-color","rgba(255,255,0,1)");
    }


    var cloudiness = data.clouds.all;
    console.log('cloudiness:',cloudiness);

    if (cloudiness < 10) {
        $('.cloudiness').css("background-color","rgba(0,0,255,0.6)");
    }
    else if (cloudiness >= 10) {
        $('.cloudiness').css("background-color","rgba(0,0,255,0.8)");
    }
    else if (cloudiness >= 5 & cloudiness <= 10) {
        $('.cloudiness').css("background-color","rgba(0,0,255,1)");
    }

    var weathertext = data.weather[0].main;
    console.log('weathertext:',weathertext);

    if (weathertext = "clear") {
        $('.weathertext').css("background-color","rgba(0,153,0,0.6)");
    }
    else if (weathertext = "clouds") {
        $('.weathertext').css("background-color","rgba(0,153,0,0.8)");
    }
    else if (weathertext = "rain, snow" ) {
        $('.weathertext').css("background-color","rgba(0,153,0,1)");
    }


//stroke

    var windspeed = data.wind.speed;
    console.log('windspeed:',windspeed);

    if (windspeed < 5) {
        $('.windspeed').css("transform","rotate(50deg)");
    }
    else if (windspeed >= 5) {
        $('.windspeed').css("transform","rotate(90deg)");
    }
    else if (windspeed >= 2 & windspeed <= 5) {
        $('.windspeed').css("transform","rotate(140deg)");
    }

    var winddeg = data.wind.deg;
    console.log('winddeg:',winddeg);

    if (winddeg < 60) {
        $('.winddeg').css("transform","rotate(50deg)");
    }
    else if (winddeg < 100) {
        $('winddeg').css("transform","rotate(90deg)");
    }
    else if (winddeg < 160) {
        $('.winddeg').css("transform","rotate(140deg)");
    }
});
  });

//drag&resize


