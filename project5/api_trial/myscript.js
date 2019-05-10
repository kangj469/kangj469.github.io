//THESE ARE THE VARIABLES WE WILL USE
var windspeed; //Wind speed. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour.
var winddeg; //Wind direction, degrees (meteorological)
var temp; //Temperature. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit. 
var tempmin;
var tempmax;
var pressure; //Atmospheric pressure (on the sea level, if there is no sea_level or grnd_level data), hPa
var humidity; //Humidity, %
var weathertext; //Group of weather parameters (Rain, Snow, Extreme etc.)
var weatherdescription; //Weather condition within the group
var cloudiness; //Cloudiness, %



//New York 

$(document).ready(function(){

    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=5128581&units=metric&APPID=8eb63a37b21bd02ccf7fcbf3494ffb5c', //CHANGE THE URL TO YOUR API QUERY
        dataType: 'jsonp',
        success: function(results){
            weathertext = results.weather[0].main;
            weatherdescription = results.weather[0].description;
            windspeed = results.wind.speed;
            winddeg = results.wind.deg;
            tempmin = results.main.temp_min;
            tempmax = results.main.temp_max;
            temp = results.main.temp;
            pressure = results.main.pressure;
            humidity = results.main.humidity;
            cloudiness = results.clouds.all;

            myWeatherInterpretation();

        }
    });
    

    function myWeatherInterpretation(){
        //THIS IS WHERE YOU CAN CUSTOMIZE YOUR PAGE'S FUNCTIONS    
        
        
        //JUST SEEING IF THE VALUES COME THROUGH
        $('.one').append('windspeed: ' + windspeed);
        $('.two').append('winddeg: ' + winddeg);
        $('.three').append('temp: ' + temp);
        $('.four').append('tempmin: ' + tempmin);
        $('.five').append('tempmax: ' + tempmax);
        $('.six').append('pressure: ' + pressure);
        $('.seven').append('humidity: ' + humidity);
        $('.eight').append('weathertext: ' + weathertext);
        $('.nine').append('weatherdescription: ' + weatherdescription);
        $('.ten').append('cloudiness: ' + cloudiness);

    

        //END OF MYWEATHERINTERPRETATION FUNCTION
    } 

});


//LA
$(document).ready(function(){

    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=1705545&units=metric&APPID=8eb63a37b21bd02ccf7fcbf3494ffb5c', //CHANGE THE URL TO YOUR API QUERY
        dataType: 'jsonp',
        success: function(results){
            weathertext = results.weather[0].main;
            weatherdescription = results.weather[0].description;
            windspeed = results.wind.speed;
            winddeg = results.wind.deg;
            tempmin = results.main.temp_min;
            tempmax = results.main.temp_max;
            temp = results.main.temp;
            pressure = results.main.pressure;
            humidity = results.main.humidity;
            cloudiness = results.clouds.all;

            myWeatherInterpretation();

        }
    });
    

    function myWeatherInterpretation(){
        //THIS IS WHERE YOU CAN CUSTOMIZE YOUR PAGE'S FUNCTIONS    
        
        
        //JUST SEEING IF THE VALUES COME THROUGH
        $('.one2').append('windspeed: ' + windspeed);
        $('.two2').append('winddeg: ' + winddeg);
        $('.three2').append('temp: ' + temp);
        $('.four2').append('tempmin: ' + tempmin);
        $('.five2').append('tempmax: ' + tempmax);
        $('.six2').append('pressure: ' + pressure);
        $('.seven2').append('humidity: ' + humidity);
        $('.eight2').append('weathertext: ' + weathertext);
        $('.nine2').append('weatherdescription: ' + weatherdescription);
        $('.ten2').append('cloudiness: ' + cloudiness);

    

        //END OF MYWEATHERINTERPRETATION FUNCTION
    }   
});


//Houston

$(document).ready(function(){

    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=5194369&units=metric&APPID=8eb63a37b21bd02ccf7fcbf3494ffb5c', //CHANGE THE URL TO YOUR API QUERY
        dataType: 'jsonp',
        success: function(results){
            weathertext = results.weather[0].main;
            weatherdescription = results.weather[0].description;
            windspeed = results.wind.speed;
            winddeg = results.wind.deg;
            tempmin = results.main.temp_min;
            tempmax = results.main.temp_max;
            temp = results.main.temp;
            pressure = results.main.pressure;
            humidity = results.main.humidity;
            cloudiness = results.clouds.all;

            myWeatherInterpretation();

        }
    });
    

    function myWeatherInterpretation(){
        //THIS IS WHERE YOU CAN CUSTOMIZE YOUR PAGE'S FUNCTIONS    
        
        
        //JUST SEEING IF THE VALUES COME THROUGH
        $('.one3').append('windspeed: ' + windspeed);
        $('.two3').append('winddeg: ' + winddeg);
        $('.three3').append('temp: ' + temp);
        $('.four3').append('tempmin: ' + tempmin);
        $('.five3').append('tempmax: ' + tempmax);
        $('.six3').append('pressure: ' + pressure);
        $('.seven3').append('humidity: ' + humidity);
        $('.eight3').append('weathertext: ' + weathertext);
        $('.nine3').append('weatherdescription: ' + weatherdescription);
        $('.ten3').append('cloudiness: ' + cloudiness);

    

        //END OF MYWEATHERINTERPRETATION FUNCTION
    }   
});


//Chicago

$(document).ready(function(){

    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=4887398&units=metric&APPID=8eb63a37b21bd02ccf7fcbf3494ffb5c', //CHANGE THE URL TO YOUR API QUERY
        dataType: 'jsonp',
        success: function(results){
            weathertext = results.weather[0].main;
            weatherdescription = results.weather[0].description;
            windspeed = results.wind.speed;
            winddeg = results.wind.deg;
            tempmin = results.main.temp_min;
            tempmax = results.main.temp_max;
            temp = results.main.temp;
            pressure = results.main.pressure;
            humidity = results.main.humidity;
            cloudiness = results.clouds.all;

            myWeatherInterpretation();

        }
    });
    

    function myWeatherInterpretation(){
        //THIS IS WHERE YOU CAN CUSTOMIZE YOUR PAGE'S FUNCTIONS    
        
        
        //JUST SEEING IF THE VALUES COME THROUGH
        $('.one4').append('windspeed: ' + windspeed);
        $('.two4').append('winddeg: ' + winddeg);
        $('.three4').append('temp: ' + temp);
        $('.four4').append('tempmin: ' + tempmin);
        $('.five4').append('tempmax: ' + tempmax);
        $('.six4').append('pressure: ' + pressure);
        $('.seven4').append('humidity: ' + humidity);
        $('.eight4').append('weathertext: ' + weathertext);
        $('.nine4').append('weatherdescription: ' + weatherdescription);
        $('.ten4').append('cloudiness: ' + cloudiness);

    

        //END OF MYWEATHERINTERPRETATION FUNCTION
    }   
});
