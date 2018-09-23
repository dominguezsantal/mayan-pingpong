$(document).ready(function(){
  $("form#numberInput").submit(function() {
    event.preventDefault();
    var number = parseInt($("#number").val());
    var result;
    for (var x=1; x <= number; x++){
     if( x % 3 && x % 5 ) {
         document.write(x);
     } else {
         if( x % 3 == 0 ) {
             document.write("ping");
         }
         if( x % 5 == 0 ) {
             document.write("pong");
         }
         if( x % 15 == 0 ) {
             document.write("pingpong");
         }
     }
     document.write('<br>'); //line breaks to enhance output readability
   }

   $("#output").text(result);
  });
});
