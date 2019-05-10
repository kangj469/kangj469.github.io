$(function() {
  console.log('Juyeon X Kandinsky Weather: United States');



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

    //united states
var url = 'http://api.openweathermap.org/data/2.5/weather?id=6252001&units=metric&APPID=8eb63a37b21bd02ccf7fcbf3494ffb5c'

  $.get(url, function(data) {
    console.log(data);

var name = data.name;
console.log(name);

    var weathertext = data.weather[0].main;
    console.log('United States Weathertext:',weathertext);

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
    else if (weathertext == "Atmosphere" ) {
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

    //new york city=red

  $(".newyorkcity").dblclick(function(){
    alert("New York City \n Please view console on your browser to see the data");
});


var url = 'http://api.openweathermap.org/data/2.5/weather?id=5128581&units=metric&APPID=8eb63a37b21bd02ccf7fcbf3494ffb5c'

  $.get(url, function(data) {
    console.log(data);

var name = data.name;
console.log(name);

    var temperature = data.main.temp; //scale
    console.log('New York City Temperature:',temperature);

    if (temperature < 0) {
        $('.newyorkcity').css("width", "10%").css("height","10%");
    }
    else if (temperature >= 0 & temperature < 15) {
        $('.newyorkcity').css("width", "20%").css("height","20%");
    }
    else if (temperature >= 15 & temperature < 25) {
        $('.newyorkcity').css("width","30%").css("height","30%");
    }
    else if (temperature >= 25 & temperature < 35) {
        $('.newyorkcity').css("width","40%").css("height","40%");
    }
    else if (temperature >= 35) {
        $('.newyorkcity').css("width","50%").css("height","50%");
    }

    var humidity = data.main.humidity; //border
    console.log('New York City Humidity:',humidity);

    if (humidity < 10) {
        $('.newyorkcity').css("border", "solid 1px rgba(0,0,0,0.8)");
    }
    else if (humidity >= 10 & humidity < 25) {
        $('.newyorkcity').css("border", "solid 3px rgba(0,0,0,0.8)");
    }
    else if (humidity >= 25 & humidity < 40) {
        $('.newyorkcity').css("border", "solid 5px rgba(0,0,0,0.8)");
    }
    else if (humidity >= 40 & humidity < 60) {
        $('.newyorkcity').css("border", "solid 7px rgba(0,0,0,0.8)");
    }
    else if (humidity >= 60 & humidity < 75) {
        $('.newyorkcity').css("border", "solid 8px rgba(0,0,0,0.8)");
    }
    else if (humidity >= 75 & humidity < 90) {
        $('.newyorkcity').css("border", "solid 9px rgba(0,0,0,0.8)");
    }
    else if (humidity >= 90) {
        $('.newyorkcity').css("border", "solid 10px rgba(0,0,0,0.8)");
    }

    var cloudiness = data.clouds.all; //opacity
    console.log('New York City Cloudiness:',cloudiness);

    if (cloudiness < 10) {
        $('.newyorkcity').css("background-color", "rgba(255,0,0,0.2)");
    }
    else if (cloudiness >= 10 & cloudiness < 40) {
        $('.newyorkcity').css("background-color", "rgba(255,0,0,0.4)");
    }
    else if (cloudiness >= 40 & cloudiness < 70) {
        $('.newyorkcity').css("background-color", "rgba(255,0,0,0.6)");
    }
    else if (cloudiness >= 70 & cloudiness <= 90) {
        $('.newyorkcity').css("background-color", "rgba(255,0,0,0.8)");
    }
    else if (cloudiness >= 90) {
        $('.newyorkcity').css("background-color", "rgba(255,0,0,1)");
    }
});

    //chicago=yellow

    $(".chicago").dblclick(function(){
    alert("Chicago \n Please view console on your browser to see the data");
});



var url = 'http://api.openweathermap.org/data/2.5/weather?id=4887398&units=metric&APPID=8eb63a37b21bd02ccf7fcbf3494ffb5c'

  $.get(url, function(data) {
    console.log(data);

var name = data.name;
console.log(name);

    var temperature = data.main.temp; //scale
    console.log('Chicago Temperature:',temperature);

    if (temperature < 0) {
        $('.chicago').css("width", "10%").css("height","10%");
    }
    else if (temperature >= 0 & temperature < 15) {
        $('.chicago').css("width", "20%").css("height","20%");
    }
    else if (temperature >= 15 & temperature < 25) {
        $('.chicago').css("width","30%").css("height","30%");
    }
    else if (temperature >= 25 & temperature < 35) {
        $('.chicago').css("width","40%").css("height","40%");
    }
    else if (temperature >= 35) {
        $('.chicago').css("width","50%").css("height","50%");
    }

    var humidity = data.main.humidity; //border
    console.log('Chicago Humidity:',humidity);

    if (humidity < 10) {
        $('.chicago').css("border", "solid 1px rgba(0,0,0,0.8)");
    }
    else if (humidity >= 10 & humidity < 25) {
        $('.chicago').css("border", "solid 3px rgba(0,0,0,0.8)");
    }
    else if (humidity >= 25 & humidity < 40) {
        $('.chicago').css("border", "solid 5px rgba(0,0,0,0.8)");
    }
    else if (humidity >= 40 & humidity < 60) {
        $('.chicago').css("border", "solid 7px rgba(0,0,0,0.8)");
    }
    else if (humidity >= 60 & humidity < 75) {
        $('.chicago').css("border", "solid 8px rgba(0,0,0,0.8)");
    }
    else if (humidity >= 75 & humidity < 90) {
        $('.chicago').css("border", "solid 9px rgba(0,0,0,0.8)");
    }
    else if (humidity >= 90) {
        $('.chicago').css("border", "solid 10px rgba(0,0,0,0.8)");
    }


    var cloudiness = data.clouds.all; //opacity
    console.log('Chicago Cloudiness:',cloudiness);

    if (cloudiness < 10) {
        $('.chicago').css("background-color", "rgba(255,255,0,0.2)");
    }
    else if (cloudiness >= 10 & cloudiness < 40) {
        $('.chicago').css("background-color", "rgba(255,255,0,0.4)");
    }
    else if (cloudiness >= 40 & cloudiness < 70) {
        $('.chicago').css("background-color", "rgba(255,255,0,0.6)");
    }
    else if (cloudiness >= 70 & cloudiness <= 90) {
        $('.chicago').css("background-color", "rgba(255,255,0,0.8)");
    }
    else if (cloudiness >= 90) {
        $('.chicago').css("background-color", "rgba(255,255,0,1)");
    }
});

    //houston=black

    $(".houston").dblclick(function(){
    alert("Houston \n Please view console on your browser to see the data");
});



var url = 'http://api.openweathermap.org/data/2.5/weather?id=5194369&units=metric&APPID=8eb63a37b21bd02ccf7fcbf3494ffb5c'

  $.get(url, function(data) {
    console.log(data);

var name = data.name;
console.log(name);

    var temperature = data.main.temp; //scale
    console.log('Houston Temperature:',temperature);

    if (temperature < 0) {
        $('.houston').css("width", "10%").css("height","10%");
    }
    else if (temperature >= 0 & temperature < 15) {
        $('.houston').css("width", "20%").css("height","20%");
    }
    else if (temperature >= 15 & temperature < 25) {
        $('.houston').css("width","30%").css("height","30%");
    }
    else if (temperature >= 25 & temperature < 35) {
        $('.houston').css("width","40%").css("height","40%");
    }
    else if (temperature >= 35) {
        $('.houston').css("width","50%").css("height","50%");
    }

    var humidity = data.main.humidity; //border
    console.log('Houston Humidity:',humidity);

    if (humidity < 10) {
        $('.houston').css("border", "solid 1px rgba(0,0,0,0.8)");
    }
    else if (humidity >= 10 & humidity < 25) {
        $('.houston').css("border", "solid 3px rgba(0,0,0,0.8)");
    }
    else if (humidity >= 25 & humidity < 40) {
        $('.houston').css("border", "solid 5px rgba(0,0,0,0.8)");
    }
    else if (humidity >= 40 & humidity < 60) {
        $('.houston').css("border", "solid 7px rgba(0,0,0,0.8)");
    }
    else if (humidity >= 60 & humidity < 75) {
        $('.houston').css("border", "solid 8px rgba(0,0,0,0.8)");
    }
    else if (humidity >= 75 & humidity < 90) {
        $('.houston').css("border", "solid 9px rgba(0,0,0,0.8)");
    }
    else if (humidity >= 90) {
        $('.houston').css("border", "solid 10px rgba(0,0,0,0.8)");
    }


    var cloudiness = data.clouds.all; //opacity
    console.log('Houston Cloudiness:',cloudiness);

    if (cloudiness < 10) {
        $('.houston').css("background-color", "rgba(0,0,0,0.2)");
    }
    else if (cloudiness >= 10 & cloudiness < 40) {
        $('.houston').css("background-color", "rgba(0,0,0,0.4)");
    }
    else if (cloudiness >= 40 & cloudiness < 70) {
        $('.houston').css("background-color", "rgba(0,0,0,0.6)");
    }
    else if (cloudiness >= 70 & cloudiness <= 90) {
        $('.houston').css("background-color", "rgba(0,0,0,0.8)");
    }
    else if (cloudiness >= 90) {
        $('.houston').css("background-color", "rgba(0,0,0,1)");
    }
});

//los angeles=green

$(".losangeles").dblclick(function(){
    alert("Los Angeles \n Please view console on your browser to see the data");
});



var url = 'http://api.openweathermap.org/data/2.5/weather?id=1705545&units=metric&APPID=8eb63a37b21bd02ccf7fcbf3494ffb5c'

  $.get(url, function(data) {
    console.log(data);

var name = data.name;
console.log(name);

    var temperature = data.main.temp; //scale
    console.log('Los Angeles Temperature:',temperature);

    if (temperature < 0) {
        $('.losangeles').css("width", "10%").css("height","10%");
    }
    else if (temperature >= 0 & temperature < 15) {
        $('.losangeles').css("width", "20%").css("height","20%");
    }
    else if (temperature >= 15 & temperature < 25) {
        $('.losangeles').css("width","30%").css("height","30%");
    }
    else if (temperature >= 25 & temperature < 35) {
        $('.losangeles').css("width","40%").css("height","40%");
    }
    else if (temperature >= 35) {
        $('.losangeles').css("width","50%").css("height","50%");
    }

    var humidity = data.main.humidity; //border
    console.log('Los Angeles Humidity:',humidity);

    if (humidity < 10) {
        $('.losangeles').css("border", "solid 1px rgba(0,0,0,0.8)");
    }
    else if (humidity >= 10 & humidity < 25) {
        $('.losangeles').css("border", "solid 3px rgba(0,0,0,0.8)");
    }
    else if (humidity >= 25 & humidity < 40) {
        $('.losangeles').css("border", "solid 5px rgba(0,0,0,0.8)");
    }
    else if (humidity >= 40 & humidity < 60) {
        $('.losangeles').css("border", "solid 7px rgba(0,0,0,0.8)");
    }
    else if (humidity >= 60 & humidity < 75) {
        $('.losangeles').css("border", "solid 8px rgba(0,0,0,0.8)");
    }
    else if (humidity >= 75 & humidity < 90) {
        $('.losangeles').css("border", "solid 9px rgba(0,0,0,0.8)");
    }
    else if (humidity >= 90) {
        $('.losangeles').css("border", "solid 10px rgba(0,0,0,0.8)");
    }


    var cloudiness = data.clouds.all; //opacity
    console.log('Los Angeles Cloudiness:',cloudiness);

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

  //philadelphia=purple

  $(".philadelphia").dblclick(function(){
    alert("Philadelphia \n Please view console on your browser to see the data");
});


var url = 'http://api.openweathermap.org/data/2.5/weather?id=4440906&units=metric&APPID=8eb63a37b21bd02ccf7fcbf3494ffb5c'

  $.get(url, function(data) {
    console.log(data);

var name = data.name;
console.log(name);

    var temperature = data.main.temp; //scale
    console.log('Philadelphia Temperature:',temperature);

    if (temperature < 0) {
        $('.philadelphia').css("width", "10%").css("height","10%");
    }
    else if (temperature >= 0 & temperature < 15) {
        $('.philadelphia').css("width", "20%").css("height","20%");
    }
    else if (temperature >= 15 & temperature < 25) {
        $('.philadelphia').css("width","30%").css("height","30%");
    }
    else if (temperature >= 25 & temperature < 35) {
        $('.philadelphia').css("width","40%").css("height","40%");
    }
    else if (temperature >= 35) {
        $('.philadelphia').css("width","50%").css("height","50%");
    }

    var humidity = data.main.humidity; //border
    console.log('Philadelphia Humidity:',humidity);

    if (humidity < 10) {
        $('.philadelphia').css("border", "solid 1px rgba(0,0,0,0.8)");
    }
    else if (humidity >= 10 & humidity < 25) {
        $('.philadelphia').css("border", "solid 3px rgba(0,0,0,0.8)");
    }
    else if (humidity >= 25 & humidity < 40) {
        $('.philadelphia').css("border", "solid 5px rgba(0,0,0,0.8)");
    }
    else if (humidity >= 40 & humidity < 60) {
        $('.philadelphia').css("border", "solid 7px rgba(0,0,0,0.8)");
    }
    else if (humidity >= 60 & humidity < 75) {
        $('.philadelphia').css("border", "solid 8px rgba(0,0,0,0.8)");
    }
    else if (humidity >= 75 & humidity < 90) {
        $('.philadelphia').css("border", "solid 9px rgba(0,0,0,0.8)");
    }
    else if (humidity >= 90) {
        $('.philadelphia').css("border", "solid 10px rgba(0,0,0,0.8)");
    }


    var cloudiness = data.clouds.all; //opacity
    console.log('Philadelphia Cloudiness:',cloudiness);

    if (cloudiness < 10) {
        $('.philadelphia').css("background-color", "rgba(153,51,225,0.2)");
    }
    else if (cloudiness >= 10 & cloudiness < 40) {
        $('.philadelphia').css("background-color", "rgba(153,51,225,0.4)");
    }
    else if (cloudiness >= 40 & cloudiness < 70) {
        $('.philadelphia').css("background-color", "rgba(153,51,225,0.6)");
    }
    else if (cloudiness >= 70 & cloudiness <= 90) {
        $('.philadelphia').css("background-color", "rgba(153,51,225,0.8)");
    }
    else if (cloudiness >= 90) {
        $('.philadelphia').css("background-color", "rgba(153,51,225,1)");
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


