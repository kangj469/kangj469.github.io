$(function() {
  console.log('Juyeon X Kandinsky Weather: Malaysia');



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

    //malaysia
var url = 'http://api.openweathermap.org/data/2.5/weather?id=1733045&units=metric&APPID=8eb63a37b21bd02ccf7fcbf3494ffb5c'

  $.get(url, function(data) {
    console.log(data);

var name = data.name;
console.log(name);

    var weathertext = data.weather[0].main;
    console.log('Malaysia Weathertext:',weathertext);

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

    //kk=red

  $(".kk").dblclick(function(){
    alert("Kota Kinabalu \n Please view console on your browser to see the data");
});


var url = 'http://api.openweathermap.org/data/2.5/weather?id=1733432&units=metric&APPID=8eb63a37b21bd02ccf7fcbf3494ffb5c'

  $.get(url, function(data) {
    console.log(data);

var name = data.name;
console.log(name);

    var temperature = data.main.temp; //scale
    console.log('Kota Kinabalu Temperature:',temperature);

    if (temperature < 0) {
        $('.kk').css("width", "10%").css("height","10%");
    }
    else if (temperature >= 0 & temperature < 15) {
        $('.kk').css("width", "20%").css("height","20%");
    }
    else if (temperature >= 15 & temperature < 25) {
        $('.kk').css("width","30%").css("height","30%");
    }
    else if (temperature >= 25 & temperature < 35) {
        $('.kk').css("width","40%").css("height","40%");
    }
    else if (temperature >= 35) {
        $('.kk').css("width","50%").css("height","50%");
    }

    var humidity = data.main.humidity; //border
    console.log('Kota Kinabalu Humidity:',humidity);

    if (humidity < 10) {
        $('.kk').css("border", "solid 1px rgba(0,0,0,0.8)");
    }
    else if (humidity >= 10 & humidity < 25) {
        $('.kk').css("border", "solid 3px rgba(0,0,0,0.8)");
    }
    else if (humidity >= 25 & humidity < 40) {
        $('.kk').css("border", "solid 5px rgba(0,0,0,0.8)");
    }
    else if (humidity >= 40 & humidity < 60) {
        $('.kk').css("border", "solid 7px rgba(0,0,0,0.8)");
    }
    else if (humidity >= 60 & humidity < 75) {
        $('.kk').css("border", "solid 8px rgba(0,0,0,0.8)");
    }
    else if (humidity >= 75 & humidity < 90) {
        $('.kk').css("border", "solid 9px rgba(0,0,0,0.8)");
    }
    else if (humidity >= 90) {
        $('.kk').css("border", "solid 10px rgba(0,0,0,0.8)");
    }

    var cloudiness = data.clouds.all; //opacity
    console.log('Kota Kinabalu Cloudiness:',cloudiness);

    if (cloudiness < 10) {
        $('.kk').css("background-color", "rgba(255,0,0,0.2)");
    }
    else if (cloudiness >= 10 & cloudiness < 40) {
        $('.kk').css("background-color", "rgba(255,0,0,0.4)");
    }
    else if (cloudiness >= 40 & cloudiness < 70) {
        $('.kk').css("background-color", "rgba(255,0,0,0.6)");
    }
    else if (cloudiness >= 70 & cloudiness <= 90) {
        $('.kk').css("background-color", "rgba(255,0,0,0.8)");
    }
    else if (cloudiness >= 90) {
        $('.kk').css("background-color", "rgba(255,0,0,1)");
    }
});

    //kl=yellow

    $(".kl").dblclick(function(){
    alert("Kuala Lumpur \n Please view console on your browser to see the data");
});



var url = 'http://api.openweathermap.org/data/2.5/weather?id=1735161&units=metric&APPID=8eb63a37b21bd02ccf7fcbf3494ffb5c'

  $.get(url, function(data) {
    console.log(data);

var name = data.name;
console.log(name);

    var temperature = data.main.temp; //scale
    console.log('Kuala Lumpur Temperature:',temperature);

    if (temperature < 0) {
        $('.kl').css("width", "10%").css("height","10%");
    }
    else if (temperature >= 0 & temperature < 15) {
        $('.kl').css("width", "20%").css("height","20%");
    }
    else if (temperature >= 15 & temperature < 25) {
        $('.kl').css("width","30%").css("height","30%");
    }
    else if (temperature >= 25 & temperature < 35) {
        $('.kl').css("width","40%").css("height","40%");
    }
    else if (temperature >= 35) {
        $('.kl').css("width","50%").css("height","50%");
    }

    var humidity = data.main.humidity; //border
    console.log('Kuala Lumpur Humidity:',humidity);

    if (humidity < 10) {
        $('.kl').css("border", "solid 1px rgba(0,0,0,0.8)");
    }
    else if (humidity >= 10 & humidity < 25) {
        $('.kl').css("border", "solid 3px rgba(0,0,0,0.8)");
    }
    else if (humidity >= 25 & humidity < 40) {
        $('.kl').css("border", "solid 5px rgba(0,0,0,0.8)");
    }
    else if (humidity >= 40 & humidity < 60) {
        $('.kl').css("border", "solid 7px rgba(0,0,0,0.8)");
    }
    else if (humidity >= 60 & humidity < 75) {
        $('.kl').css("border", "solid 8px rgba(0,0,0,0.8)");
    }
    else if (humidity >= 75 & humidity < 90) {
        $('.kl').css("border", "solid 9px rgba(0,0,0,0.8)");
    }
    else if (humidity >= 90) {
        $('.kl').css("border", "solid 10px rgba(0,0,0,0.8)");
    }


    var cloudiness = data.clouds.all; //opacity
    console.log('Kuala Lumpur Cloudiness:',cloudiness);

    if (cloudiness < 10) {
        $('.kl').css("background-color", "rgba(255,255,0,0.2)");
    }
    else if (cloudiness >= 10 & cloudiness < 40) {
        $('.kl').css("background-color", "rgba(255,255,0,0.4)");
    }
    else if (cloudiness >= 40 & cloudiness < 70) {
        $('.kl').css("background-color", "rgba(255,255,0,0.6)");
    }
    else if (cloudiness >= 70 & cloudiness <= 90) {
        $('.kl').css("background-color", "rgba(255,255,0,0.8)");
    }
    else if (cloudiness >= 90) {
        $('.kl').css("background-color", "rgba(255,255,0,1)");
    }
});

    //kuching=black

    $(".kuching").dblclick(function(){
    alert("Kuching \n Please view console on your browser to see the data");
});



var url = 'http://api.openweathermap.org/data/2.5/weather?id=1735634&units=metric&APPID=8eb63a37b21bd02ccf7fcbf3494ffb5c'

  $.get(url, function(data) {
    console.log(data);

var name = data.name;
console.log(name);

    var temperature = data.main.temp; //scale
    console.log('Kuching Temperature:',temperature);

    if (temperature < 0) {
        $('.kuching').css("width", "10%").css("height","10%");
    }
    else if (temperature >= 0 & temperature < 15) {
        $('.kuching').css("width", "20%").css("height","20%");
    }
    else if (temperature >= 15 & temperature < 25) {
        $('.kuching').css("width","30%").css("height","30%");
    }
    else if (temperature >= 25 & temperature < 35) {
        $('.kuching').css("width","40%").css("height","40%");
    }
    else if (temperature >= 35) {
        $('.kuching').css("width","50%").css("height","50%");
    }

    var humidity = data.main.humidity; //border
    console.log('Kuching Humidity:',humidity);

    if (humidity < 10) {
        $('.kuching').css("border", "solid 1px rgba(0,0,0,0.8)");
    }
    else if (humidity >= 10 & humidity < 25) {
        $('.kuching').css("border", "solid 3px rgba(0,0,0,0.8)");
    }
    else if (humidity >= 25 & humidity < 40) {
        $('.kuching').css("border", "solid 5px rgba(0,0,0,0.8)");
    }
    else if (humidity >= 40 & humidity < 60) {
        $('.kuching').css("border", "solid 7px rgba(0,0,0,0.8)");
    }
    else if (humidity >= 60 & humidity < 75) {
        $('.kuching').css("border", "solid 8px rgba(0,0,0,0.8)");
    }
    else if (humidity >= 75 & humidity < 90) {
        $('.kuching').css("border", "solid 9px rgba(0,0,0,0.8)");
    }
    else if (humidity >= 90) {
        $('.kuching').css("border", "solid 10px rgba(0,0,0,0.8)");
    }


    var cloudiness = data.clouds.all; //opacity
    console.log('Kuching Cloudiness:',cloudiness);

    if (cloudiness < 10) {
        $('.kuching').css("background-color", "rgba(0,0,0,0.2)");
    }
    else if (cloudiness >= 10 & cloudiness < 40) {
        $('.kuching').css("background-color", "rgba(0,0,0,0.4)");
    }
    else if (cloudiness >= 40 & cloudiness < 70) {
        $('.kuching').css("background-color", "rgba(0,0,0,0.6)");
    }
    else if (cloudiness >= 70 & cloudiness <= 90) {
        $('.kuching').css("background-color", "rgba(0,0,0,0.8)");
    }
    else if (cloudiness >= 90) {
        $('.kuching').css("background-color", "rgba(0,0,0,1)");
    }
});

//gt=green

$(".gt").dblclick(function(){
    alert("George Town \n Please view console on your browser to see the data");
});



var url = 'http://api.openweathermap.org/data/2.5/weather?id=1735106&units=metric&APPID=8eb63a37b21bd02ccf7fcbf3494ffb5c'

  $.get(url, function(data) {
    console.log(data);

var name = data.name;
console.log(name);

    var temperature = data.main.temp; //scale
    console.log('George Town Temperature:',temperature);

    if (temperature < 0) {
        $('.gt').css("width", "10%").css("height","10%");
    }
    else if (temperature >= 0 & temperature < 15) {
        $('.gt').css("width", "20%").css("height","20%");
    }
    else if (temperature >= 15 & temperature < 25) {
        $('.gt').css("width","30%").css("height","30%");
    }
    else if (temperature >= 25 & temperature < 35) {
        $('.gt').css("width","40%").css("height","40%");
    }
    else if (temperature >= 35) {
        $('.gt').css("width","50%").css("height","50%");
    }

    var humidity = data.main.humidity; //border
    console.log('George Town Humidity:',humidity);

    if (humidity < 10) {
        $('.gt').css("border", "solid 1px rgba(0,0,0,0.8)");
    }
    else if (humidity >= 10 & humidity < 25) {
        $('.gt').css("border", "solid 3px rgba(0,0,0,0.8)");
    }
    else if (humidity >= 25 & humidity < 40) {
        $('.gt').css("border", "solid 5px rgba(0,0,0,0.8)");
    }
    else if (humidity >= 40 & humidity < 60) {
        $('.gt').css("border", "solid 7px rgba(0,0,0,0.8)");
    }
    else if (humidity >= 60 & humidity < 75) {
        $('.gt').css("border", "solid 8px rgba(0,0,0,0.8)");
    }
    else if (humidity >= 75 & humidity < 90) {
        $('.gt').css("border", "solid 9px rgba(0,0,0,0.8)");
    }
    else if (humidity >= 90) {
        $('.gt').css("border", "solid 10px rgba(0,0,0,0.8)");
    }


    var cloudiness = data.clouds.all; //opacity
    console.log('George Town Cloudiness:',cloudiness);

    if (cloudiness < 10) {
        $('.gt').css("background-color", "rgba(0,153,0,0.2)");
    }
    else if (cloudiness >= 10 & cloudiness < 40) {
        $('.gt').css("background-color", "rgba(0,153,0,0.4)");
    }
    else if (cloudiness >= 40 & cloudiness < 70) {
        $('.gt').css("background-color", "rgba(0,153,0,0.6)");
    }
    else if (cloudiness >= 70 & cloudiness <= 90) {
        $('.gt').css("background-color", "rgba(0,153,0,0.8)");
    }
    else if (cloudiness >= 90) {
        $('.gt').css("background-color", "rgba(0,153,0,1)");
    }
});

  //jb=purple

  $(".jb").dblclick(function(){
    alert("Johor Bahru \n Please view console on your browser to see the data");
});


var url = 'http://api.openweathermap.org/data/2.5/weather?id=1732752&units=metric&APPID=8eb63a37b21bd02ccf7fcbf3494ffb5c'

  $.get(url, function(data) {
    console.log(data);

var name = data.name;
console.log(name);

    var temperature = data.main.temp; //scale
    console.log('Johor Bahru Temperature:',temperature);

    if (temperature < 0) {
        $('.jb').css("width", "10%").css("height","10%");
    }
    else if (temperature >= 0 & temperature < 15) {
        $('.jb').css("width", "20%").css("height","20%");
    }
    else if (temperature >= 15 & temperature < 25) {
        $('.jb').css("width","30%").css("height","30%");
    }
    else if (temperature >= 25 & temperature < 35) {
        $('.jb').css("width","40%").css("height","40%");
    }
    else if (temperature >= 35) {
        $('.jb').css("width","50%").css("height","50%");
    }

    var humidity = data.main.humidity; //border
    console.log('Johor Bahru Humidity:',humidity);

    if (humidity < 10) {
        $('.jb').css("border", "solid 1px rgba(0,0,0,0.8)");
    }
    else if (humidity >= 10 & humidity < 25) {
        $('.jb').css("border", "solid 3px rgba(0,0,0,0.8)");
    }
    else if (humidity >= 25 & humidity < 40) {
        $('.jb').css("border", "solid 5px rgba(0,0,0,0.8)");
    }
    else if (humidity >= 40 & humidity < 60) {
        $('.jb').css("border", "solid 7px rgba(0,0,0,0.8)");
    }
    else if (humidity >= 60 & humidity < 75) {
        $('.jb').css("border", "solid 8px rgba(0,0,0,0.8)");
    }
    else if (humidity >= 75 & humidity < 90) {
        $('.jb').css("border", "solid 9px rgba(0,0,0,0.8)");
    }
    else if (humidity >= 90) {
        $('.jb').css("border", "solid 10px rgba(0,0,0,0.8)");
    }


    var cloudiness = data.clouds.all; //opacity
    console.log('Johor Bahru Cloudiness:',cloudiness);

    if (cloudiness < 10) {
        $('.jb').css("background-color", "rgba(153,51,225,0.2)");
    }
    else if (cloudiness >= 10 & cloudiness < 40) {
        $('.jb').css("background-color", "rgba(153,51,225,0.4)");
    }
    else if (cloudiness >= 40 & cloudiness < 70) {
        $('.jb').css("background-color", "rgba(153,51,225,0.6)");
    }
    else if (cloudiness >= 70 & cloudiness <= 90) {
        $('.jb').css("background-color", "rgba(153,51,225,0.8)");
    }
    else if (cloudiness >= 90) {
        $('.jb').css("background-color", "rgba(153,51,225,1)");
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


