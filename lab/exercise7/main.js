console.log('hello world');

var $sound = $("<audio preload=auto>");
     $sound.attr("src",
        "https://www.kasandbox.org/programming-sounds/rpg/door-open.mp3");
        $("#leafers").on("click", function(event) {
            // Do something!
         $("body").append($sound);
        $sound[0].play();})

   $("html").on("click", function(event) {
        var $dot = $("<div></div>");
        $dot.addClass("star");
        $dot.appendTo("body");
    });   
    
         $("html").on("click", function(eventt) {
var $dot = $("<div></div>");
$dot.addClass("star");
$dot.css("position", "absolute");
$dot.css("top", event.pageY + "px");
$dot.css("left", event.pageX + "px");
$dot.appendTo("body");
});





     





