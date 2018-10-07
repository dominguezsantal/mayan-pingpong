//Business Logic
var number = x;
for (var x = 1; x <= 100; x++) {
    var output = '';
    if (x % 3 === 0) output += ('ping');
    if (x % 5 === 0) output += ('pong');
    console.log(output || x);
}



//User Interface
$(document).ready(function(){
  $("form#numberInput").submit(function(event) {
    event.preventDefault();

    var number = parseInt($("#number").val());

   $("#output").text(output);

     });
  });
