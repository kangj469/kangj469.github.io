$(function() {
  console.log('Juyeon X Kandinsky Weather');



//footer

function getval() {
    var currentTime = new Date()
    var hours = currentTime.getHours()
    var minutes = currentTime.getMinutes()

        if (minutes < 10)
            minutes = "0" + minutes;

    var suffix = "AM";
        if (hours >= 12) {
            suffix = "PM";
            hours = hours - 12;
        }
        if (hours == 0) {
            hours = 12;
        }
    var current_time = hours + ":" + minutes + " " + suffix;
            
        $(".time").append(current_time);
        }

$(".time").append(getval);

Date.prototype.yyyymmdd = function() {
  var yyyy = this.getFullYear().toString();
  var mm = (this.getMonth()+1).toString(); 
  var dd  = this.getDate().toString();
  return yyyy + (mm[1]?mm:"0"+mm[0]) + (dd[1]?dd:"0"+dd[0]); 
};

var date = new Date();
$(".date").append( date.yyyymmdd() ); 



//weather js

var url = 'https://api.openweathermap.org/data/2.5/weather?id=5128581&units=metric&APPID=8eb63a37b21bd02ccf7fcbf3494ffb5c'

  $.get(url, function(data) {
    console.log(data);
 

var name = data.name;
console.log(name);

 //circle   

    var temperature = data.main.temp;
    console.log('temperature:',temperature);

    if (temperature < 20) {
        $('.temperature').css("width", "100px").css("height","100px");
    }
    else if (temperature >= 20) {
        $('.temperature').css("width", "150px").css("height","150px");
    }
    else if (temperature >= 10 & temperature <= 20) {
        $('.temperature').css("width","50px").css("height","50px");
    } 

//trial
  /*  var temperature = data.main.temp;
    console.log('temperature:',temperature);

    var output = temperature * 5;
    console.log(output);

    $('.temperature').append('<div class="temperature" style="width: 'output' px"></div>'); */
//trial


    var humidity = data.main.humidity;
    console.log('humidity:',humidity);

    if (humidity < 50) {
        $('.humidity').css("width", "100px").css("height","100px");
    }
    else if (humidity >= 50) {
        $('.humidity').css("width", "150px").css("height","150px");
    }
    else if (humidity >= 40 & humidity <= 50) {
        $('.humidity').css("width", "50px").css("height","50px");
    }


    var cloudiness = data.clouds.all;
    console.log('cloudiness:',cloudiness);

    if (cloudiness < 10) {
        $('.cloudiness').css("width", "100px").css("height","100px");
    }
    else if (cloudiness >= 10) {
        $('.cloudiness').css("width", "150px").css("height","150px");
    }
    else if (cloudiness >= 5 & cloudiness <= 10) {
        $('.cloudiness').css("width", "50px").css("height","50px");
    }

    var weathertext = data.weather[0].main;
    console.log('weathertext:',weathertext);

    if (weathertext = "clear") {
        $('.weathertext').css("width", "100px").css("height","100px");
    }
    else if (weathertext = "clouds") {
        $('.weathertext').css("width", "150px").css("height","150px");
    }
    else if (weathertext = "rain, snow" ) {
        $('.weathertext').css("width", "50px").css("height","50px");
    }

    var pressure = data.main.pressure;
    console.log('pressure:',pressure);

    if (pressure < 1000 ) {
        $('.pressure').css("width", "100px").css("height","100px");
    }
    else if (pressure < 1030 ) {
        $('.pressure').css("width", "150px").css("height","150px");
    }
    else if (pressure <1050 ) {
        $('.pressure').css("width", "50px").css("height","50px");
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
        $('.winddeg').css("transform","rotate(90deg)");
    }
    else if (winddeg < 160) {
        $('.winddeg').css("transform","rotate(140deg)");
    }

    var tempmin = data.main.temp_min;
    console.log('tempmin:',tempmin);

    if (tempmin < 20) {
        $('.tempmin').css("transform","rotate(50deg)");
    }
    else if (tempmin < 25) {
        $('.tempmin').css("transform","rotate(90deg)");
    }
    else if (winddeg < 30) {
        $('.tempmin').css("transform","rotate(140deg)");
    }

    var tempmax = data.main.temp_max;
    console.log('tempmax:',tempmax);

    if (tempmax < 20) {
        $('.tempmax').css("transform","rotate(50deg)");
    }
    else if (tempmax < 25) {
        $('.tempmax').css("transform","rotate(90deg)");
    }
    else if (tempmax < 30) {
        $('.tempmax').css("transform","rotate(140deg)");
    }
});


//draggable & resizable 

  $("#circle,#stroke").each(function() {
    $(this).draggable();
  });

});




