$(function() {
  console.log('Juyeon X Kandinsky Weather: Republic of Korea');



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

    //republic of korea
var url = 'http://api.openweathermap.org/data/2.5/weather?id=1835841&units=metric&APPID=8eb63a37b21bd02ccf7fcbf3494ffb5c'

  $.get(url, function(data) {
    console.log(data);

var name = data.name;
console.log(name);

    var weathertext = data.weather[0].main;
    console.log('Republic of Korea Weathertext:',weathertext);

    if (weathertext == "Thunderstorm") {
        $('html').css("background-color", "#618B98"); //grey blue
        $('.streakone').css("border-bottom","100vh solid rgba(91, 75, 60, 0.73)"); //grey
        $('.streaktwo').css("border-bottom","100vh solid rgba(191, 189, 153, 0.79)"); //light yellow
    }
    else if (weathertext == "Drizzle") {
        $('html').css("background-color", "#B7A7C0"); //light purple
        $('.streakone').css("border-bottom","100vh solid rgba(132, 163, 192, 0.73)"); //grey blue
        $('.streaktwo').css("border-bottom","100vh solid rgba(193, 194, 146, 0.79)"); //light yellow
    }
    else if (weathertext == "Rain" ) {
        $('html').css("background-color", "#BAD7CC"); //mint
        $('.streakone').css("border-bottom","100vh solid rgba(118, 125, 182, 0.73)"); //purple
        $('.streaktwo').css("border-bottom","100vh solid rgba(196, 164, 150, 0.79)"); //light red
    }
    else if (weathertext == "Snow" ) {
        $('html').css("background-color", "E2EFEB"); //light mint
        $('.streakone').css("border-bottom","100vh solid rgba(230, 148, 89, 0.73)"); //orange
        $('.streaktwo').css("border-bottom","100vh solid rgba(172, 219, 174, 0.79)"); //light green
    }
    else if (weathertext == "Haze" ) {
        $('html').css("background-color", "#EAAAAA"); //light pink
        $('.streakone').css("border-bottom","100vh solid rgba(179, 160, 147, 0.73)"); //grey red
        $('.streaktwo').css("border-bottom","100vh solid rgba(148, 170, 196, 0.79)"); //light blue
    }
    else if (weathertext == "Clear" ) {
        $('html').css("background-color", "#F2E1A6"); //grey yellow
        $('.streakone').css("border-bottom","100vh solid rgba(217, 173, 89, 0.73)"); //dark yellow
        $('.streaktwo').css("border-bottom","100vh solid rgba(112, 165, 182, 0.79)"); //grey blue
    }
    else if (weathertext == "Clouds" ) {
        $('html').css("background-color", "#C2C8CB"); //grey
        $('.streakone').css("border-bottom","100vh solid rgba(106, 124, 102, 0.73)"); //grey green
        $('.streaktwo').css("border-bottom","100vh solid rgba(186, 139, 128, 0.79)"); //light red
    }
});




 //circle   

    //seoul=red

  $(".seoul").dblclick(function(){
    alert("Seoul \n Please view console on your browser to see the data");
});


var url = 'http://api.openweathermap.org/data/2.5/weather?id=1835848&units=metric&APPID=8eb63a37b21bd02ccf7fcbf3494ffb5c'

  $.get(url, function(data) {
    console.log(data);

var name = data.name;
console.log(name);

    var temperature = data.main.temp; //scale
    console.log('Seoul Temperature:',temperature);

    if (temperature < 0) {
        $('.seoul').css("width", "10%").css("height","10%");
    }
    else if (temperature >= 0 & temperature < 15) {
        $('.seoul').css("width", "20%").css("height","20%");
    }
    else if (temperature >= 15 & temperature < 25) {
        $('.seoul').css("width","30%").css("height","30%");
    }
    else if (temperature >= 25 & temperature < 35) {
        $('.seoul').css("width","40%").css("height","40%");
    }
    else if (temperature >= 35) {
        $('.seoul').css("width","50%").css("height","50%");
    }

    var humidity = data.main.humidity; //border
    console.log('Seoul Humidity:',humidity);

    if (humidity < 10) {
        $('.seoul').css("border", "solid 1px rgba(0,0,0,0.8)");
    }
    else if (humidity >= 10 & humidity < 25) {
        $('.seoul').css("border", "solid 3px rgba(0,0,0,0.8)");
    }
    else if (humidity >= 25 & humidity < 40) {
        $('.seoul').css("border", "solid 5px rgba(0,0,0,0.8)");
    }
    else if (humidity >= 40 & humidity < 60) {
        $('.seoul').css("border", "solid 7px rgba(0,0,0,0.8)");
    }
    else if (humidity >= 60 & humidity < 75) {
        $('.seoul').css("border", "solid 8px rgba(0,0,0,0.8)");
    }
    else if (humidity >= 75 & humidity < 90) {
        $('.seoul').css("border", "solid 9px rgba(0,0,0,0.8)");
    }
    else if (humidity >= 90) {
        $('.seoul').css("border", "solid 10px rgba(0,0,0,0.8)");
    }

    var cloudiness = data.clouds.all; //opacity
    console.log('Seoul Cloudiness:',cloudiness);

    if (cloudiness < 10) {
        $('.seoul').css("background-color", "rgba(255,0,0,0.2)");
    }
    else if (cloudiness >= 10 & cloudiness < 40) {
        $('.seoul').css("background-color", "rgba(255,0,0,0.4)");
    }
    else if (cloudiness >= 40 & cloudiness < 70) {
        $('.seoul').css("background-color", "rgba(255,0,0,0.6)");
    }
    else if (cloudiness >= 70 & cloudiness <= 90) {
        $('.seoul').css("background-color", "rgba(255,0,0,0.8)");
    }
    else if (cloudiness >= 90) {
        $('.seoul').css("background-color", "rgba(255,0,0,1)");
    }
});

    //incheon=yellow

    $(".incheon").dblclick(function(){
    alert("Incheon \n Please view console on your browser to see the data");
});



var url = 'http://api.openweathermap.org/data/2.5/weather?id=1843564&units=metric&APPID=8eb63a37b21bd02ccf7fcbf3494ffb5c'

  $.get(url, function(data) {
    console.log(data);

var name = data.name;
console.log(name);

    var temperature = data.main.temp; //scale
    console.log('Incheon Temperature:',temperature);

    if (temperature < 0) {
        $('.incheon').css("width", "10%").css("height","10%");
    }
    else if (temperature >= 0 & temperature < 15) {
        $('.incheon').css("width", "20%").css("height","20%");
    }
    else if (temperature >= 15 & temperature < 25) {
        $('.incheon').css("width","30%").css("height","30%");
    }
    else if (temperature >= 25 & temperature < 35) {
        $('.incheon').css("width","40%").css("height","40%");
    }
    else if (temperature >= 35) {
        $('.incheon').css("width","50%").css("height","50%");
    }

    var humidity = data.main.humidity; //border
    console.log('Incheon Humidity:',humidity);

    if (humidity < 10) {
        $('.incheon').css("border", "solid 1px rgba(0,0,0,0.8)");
    }
    else if (humidity >= 10 & humidity < 25) {
        $('.incheon').css("border", "solid 3px rgba(0,0,0,0.8)");
    }
    else if (humidity >= 25 & humidity < 40) {
        $('.incheon').css("border", "solid 5px rgba(0,0,0,0.8)");
    }
    else if (humidity >= 40 & humidity < 60) {
        $('.incheon').css("border", "solid 7px rgba(0,0,0,0.8)");
    }
    else if (humidity >= 60 & humidity < 75) {
        $('.incheon').css("border", "solid 8px rgba(0,0,0,0.8)");
    }
    else if (humidity >= 75 & humidity < 90) {
        $('.incheon').css("border", "solid 9px rgba(0,0,0,0.8)");
    }
    else if (humidity >= 90) {
        $('.incheon').css("border", "solid 10px rgba(0,0,0,0.8)");
    }


    var cloudiness = data.clouds.all; //opacity
    console.log('Incheon Cloudiness:',cloudiness);

    if (cloudiness < 10) {
        $('.incheon').css("background-color", "rgba(255,255,0,0.2)");
    }
    else if (cloudiness >= 10 & cloudiness < 40) {
        $('.incheon').css("background-color", "rgba(255,255,0,0.4)");
    }
    else if (cloudiness >= 40 & cloudiness < 70) {
        $('.incheon').css("background-color", "rgba(255,255,0,0.6)");
    }
    else if (cloudiness >= 70 & cloudiness <= 90) {
        $('.incheon').css("background-color", "rgba(255,255,0,0.8)");
    }
    else if (cloudiness >= 90) {
        $('.incheon').css("background-color", "rgba(255,255,0,1)");
    }
});

    //busan=black

    $(".busan").dblclick(function(){
    alert("Busan \n Please view console on your browser to see the data");
});



var url = 'http://api.openweathermap.org/data/2.5/weather?id=1838524&units=metric&APPID=8eb63a37b21bd02ccf7fcbf3494ffb5c'

  $.get(url, function(data) {
    console.log(data);

var name = data.name;
console.log(name);

    var temperature = data.main.temp; //scale
    console.log('Busan Temperature:',temperature);

    if (temperature < 0) {
        $('.busan').css("width", "10%").css("height","10%");
    }
    else if (temperature >= 0 & temperature < 15) {
        $('.busan').css("width", "20%").css("height","20%");
    }
    else if (temperature >= 15 & temperature < 25) {
        $('.busan').css("width","30%").css("height","30%");
    }
    else if (temperature >= 25 & temperature < 35) {
        $('.busan').css("width","40%").css("height","40%");
    }
    else if (temperature >= 35) {
        $('.busan').css("width","50%").css("height","50%");
    }

    var humidity = data.main.humidity; //border
    console.log('Busan Humidity:',humidity);

    if (humidity < 10) {
        $('.busan').css("border", "solid 1px rgba(0,0,0,0.8)");
    }
    else if (humidity >= 10 & humidity < 25) {
        $('.busan').css("border", "solid 3px rgba(0,0,0,0.8)");
    }
    else if (humidity >= 25 & humidity < 40) {
        $('.busan').css("border", "solid 5px rgba(0,0,0,0.8)");
    }
    else if (humidity >= 40 & humidity < 60) {
        $('.busan').css("border", "solid 7px rgba(0,0,0,0.8)");
    }
    else if (humidity >= 60 & humidity < 75) {
        $('.busan').css("border", "solid 8px rgba(0,0,0,0.8)");
    }
    else if (humidity >= 75 & humidity < 90) {
        $('.busan').css("border", "solid 9px rgba(0,0,0,0.8)");
    }
    else if (humidity >= 90) {
        $('.busan').css("border", "solid 10px rgba(0,0,0,0.8)");
    }


    var cloudiness = data.clouds.all; //opacity
    console.log('Busan Cloudiness:',cloudiness);

    if (cloudiness < 10) {
        $('.busan').css("background-color", "rgba(0,0,0,0.2)");
    }
    else if (cloudiness >= 10 & cloudiness < 40) {
        $('.busan').css("background-color", "rgba(0,0,0,0.4)");
    }
    else if (cloudiness >= 40 & cloudiness < 70) {
        $('.busan').css("background-color", "rgba(0,0,0,0.6)");
    }
    else if (cloudiness >= 70 & cloudiness <= 90) {
        $('.busan').css("background-color", "rgba(0,0,0,0.8)");
    }
    else if (cloudiness >= 90) {
        $('.busan').css("background-color", "rgba(0,0,0,1)");
    }
});

//jeju=green

$(".jeju").dblclick(function(){
    alert("Jeju \n Please view console on your browser to see the data");
});



var url = 'http://api.openweathermap.org/data/2.5/weather?id=1846266&units=metric&APPID=8eb63a37b21bd02ccf7fcbf3494ffb5c'

  $.get(url, function(data) {
    console.log(data);

var name = data.name;
console.log(name);

    var temperature = data.main.temp; //scale
    console.log('Jeju Temperature:',temperature);

    if (temperature < 0) {
        $('.jeju').css("width", "10%").css("height","10%");
    }
    else if (temperature >= 0 & temperature < 15) {
        $('.jeju').css("width", "20%").css("height","20%");
    }
    else if (temperature >= 15 & temperature < 25) {
        $('.jeju').css("width","30%").css("height","30%");
    }
    else if (temperature >= 25 & temperature < 35) {
        $('.jeju').css("width","40%").css("height","40%");
    }
    else if (temperature >= 35) {
        $('.jeju').css("width","50%").css("height","50%");
    }

    var humidity = data.main.humidity; //border
    console.log('Jeju Humidity:',humidity);

    if (humidity < 10) {
        $('.jeju').css("border", "solid 1px rgba(0,0,0,0.8)");
    }
    else if (humidity >= 10 & humidity < 25) {
        $('.jeju').css("border", "solid 3px rgba(0,0,0,0.8)");
    }
    else if (humidity >= 25 & humidity < 40) {
        $('.jeju').css("border", "solid 5px rgba(0,0,0,0.8)");
    }
    else if (humidity >= 40 & humidity < 60) {
        $('.jeju').css("border", "solid 7px rgba(0,0,0,0.8)");
    }
    else if (humidity >= 60 & humidity < 75) {
        $('.jeju').css("border", "solid 8px rgba(0,0,0,0.8)");
    }
    else if (humidity >= 75 & humidity < 90) {
        $('.jeju').css("border", "solid 9px rgba(0,0,0,0.8)");
    }
    else if (humidity >= 90) {
        $('.jeju').css("border", "solid 10px rgba(0,0,0,0.8)");
    }


    var cloudiness = data.clouds.all; //opacity
    console.log('Jeju Cloudiness:',cloudiness);

    if (cloudiness < 10) {
        $('.losangeles').css("background-color", "rgba(0,153,0,0.2)");
    }
    else if (cloudiness >= 10 & cloudiness < 40) {
        $('.losangeles').css("background-color", "rgba(0,153,0,0.4)");
    }
    else if (cloudiness >= 40 & cloudiness < 70) {
        $('.losangeles').css("background-color", "rgba(0,153,0,0.6)");
    }
    else if (cloudiness >= 70 & cloudiness <= 90) {
        $('.losangeles').css("background-color", "rgba(0,153,0,0.8)");
    }
    else if (cloudiness >= 90) {
        $('.losangeles').css("background-color", "rgba(0,153,0,1)");
    }
});

  //daegu=purple

  $(".daegu").dblclick(function(){
    alert("Daegu \n Please view console on your browser to see the data");
});


var url = 'http://api.openweathermap.org/data/2.5/weather?id=1835329&units=metric&APPID=8eb63a37b21bd02ccf7fcbf3494ffb5c'

  $.get(url, function(data) {
    console.log(data);

var name = data.name;
console.log(name);

    var temperature = data.main.temp; //scale
    console.log('Daegu Temperature:',temperature);

    if (temperature < 0) {
        $('.daegu').css("width", "10%").css("height","10%");
    }
    else if (temperature >= 0 & temperature < 15) {
        $('.daegu').css("width", "20%").css("height","20%");
    }
    else if (temperature >= 15 & temperature < 25) {
        $('.daegu').css("width","30%").css("height","30%");
    }
    else if (temperature >= 25 & temperature < 35) {
        $('.daegu').css("width","40%").css("height","40%");
    }
    else if (temperature >= 35) {
        $('.daegu').css("width","50%").css("height","50%");
    }

    var humidity = data.main.humidity; //border
    console.log('Daegu Humidity:',humidity);

    if (humidity < 10) {
        $('.daegu').css("border", "solid 1px rgba(0,0,0,0.8)");
    }
    else if (humidity >= 10 & humidity < 25) {
        $('.daegu').css("border", "solid 3px rgba(0,0,0,0.8)");
    }
    else if (humidity >= 25 & humidity < 40) {
        $('.daegu').css("border", "solid 5px rgba(0,0,0,0.8)");
    }
    else if (humidity >= 40 & humidity < 60) {
        $('.daegu').css("border", "solid 7px rgba(0,0,0,0.8)");
    }
    else if (humidity >= 60 & humidity < 75) {
        $('.daegu').css("border", "solid 8px rgba(0,0,0,0.8)");
    }
    else if (humidity >= 75 & humidity < 90) {
        $('.daegu').css("border", "solid 9px rgba(0,0,0,0.8)");
    }
    else if (humidity >= 90) {
        $('.daegu').css("border", "solid 10px rgba(0,0,0,0.8)");
    }


    var cloudiness = data.clouds.all; //opacity
    console.log('Daegu Cloudiness:',cloudiness);

    if (cloudiness < 10) {
        $('.daegu').css("background-color", "rgba(153,51,225,0.2)");
    }
    else if (cloudiness >= 10 & cloudiness < 40) {
        $('.daegu').css("background-color", "rgba(153,51,225,0.4)");
    }
    else if (cloudiness >= 40 & cloudiness < 70) {
        $('.daegu').css("background-color", "rgba(153,51,225,0.6)");
    }
    else if (cloudiness >= 70 & cloudiness <= 90) {
        $('.daegu').css("background-color", "rgba(153,51,225,0.8)");
    }
    else if (cloudiness >= 90) {
        $('.daegu').css("background-color", "rgba(153,51,225,1)");
    }
});



//draggable & rotatable

  $("#circle,#stroke").each(function() {
    $(this).draggable();
  });

});

$( function() {
      $('.stone,.sttwo,.stthree,.stfour,.stfive').rotatable({
    degress: 45
  });
});


