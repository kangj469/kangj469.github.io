/* 2 */
alert("Welcome! Please view console on your broswer");

/* 3 */
var myName = "Juyeon Kang";
console.log(myName);

var myAge = 20;
console.log(myAge);

var myBirthday = "My birthday is September 3rd.";
console.log(myBirthday);

var admin = false;
console.log(admin);

var myself = myName + myAge;
console.log(myself);

/* 4 */
console.log(19 + 1);
console.log(10 * 2);
console.log(15 + 5);
console.log(30 - 10);
console.log(40 / 2);


/* 5 */
var countries = ["UK", "Italy", "Iceland", "Taiwan"]
console.log(countries[0]);
console.log(countries.length);

/* 6 */
var currentTime = "The current time is ";
var time =  new Date().getHours() + ":" + new Date().getMinutes() + ".";

console.log(currentTime + time);

/* 7 */
var currentHour = new Date().getHours();

if (currentHour == 11) {
  console.log("It is 11 now.")
} else {
  console.log("It is not 11 yet.")
};

/* 8 */
console.log (myName.length);
myName = myName.length - 1;

if (myName <= 9) {
  console.log("My name is relatively short.")
} else if (myName >= 14) {
  console.log("My name is relatively long.")
} else {
  console.log("My name is neither short nor long.")
};

/* 9 */
var newyorkTemp = fToCNY(48);

function fToCNY(fahrenheit) {
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;

  var message = "The temperature in New York City is " + fToCel + "\xB0C at 10:30.";
    console.log(message);}


var londonTemp = fToCLD(41);

  function fToCLD(fahrenheit) {
    var fTemp = fahrenheit;
    var fToCel = (fTemp - 32) * 5 / 9;

    var message = "The temperature in London is " + fToCel + "\xB0C at 10:30.";
      console.log(message);}

/* 10 */

for (j = 0; j < 100; j++) {

  for (i = 0; i < 20; i++) {

    if (i == 5) {
      $('.wrapper').append('<div class="rect" style="border-radius:20px;"></div>');
    } else if (i > 7) {
      $('.wrapper').append('<div class="rect" style="background-color:hsl(' + i * j + ',100%,50%)"></div>');
    } else {
      $('.wrapper').append('<div class="rect"></div>');
    }

  }

  $('.wrapper').append('<div class="clear"></div>');

}
