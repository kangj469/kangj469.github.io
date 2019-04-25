console.log('hello world');

/*current time*/

function clock() {

  var date = new Date(),
      hour = date.getHours(),
      minute = checkTime(date.getMinutes()),
      second = checkTime(date.getSeconds());

  function checkTime(i) {
    if( i < 10 ) {
      i = "0" + i;
    }
    return i;
  }

if ( hour > 12 ) {
  hour = hour - 12;
  if ( hour == 12 ) {
    hour = checkTime(hour);
  document.getElementById("time").innerHTML = hour+":"+minute+":"+second+" AM";
  }
  else {
    hour = checkTime(hour);
    document.getElementById("time").innerHTML = hour+":"+minute+":"+second+" PM";
  }
}
else {
  document.getElementById("time").innerHTML = hour+":"+minute+":"+second+" AM";;
}
var timeout = setTimeout(clock,1000);
}



