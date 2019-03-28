console.log('hello world');

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





     





