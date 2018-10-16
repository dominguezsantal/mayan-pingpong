function resultLoop(number) {
  var numArray = [];
  for (var x = 1; x <= number; x++) {
    if ((x % 15) === 0){
      numArray.push('pingpong');
    } else if((x % 5) === 0) {
      numArray.push('pong');
    } else if((x % 3) === 0) {
      numArray.push('ping');
    } else {
      numArray.push(x);
    }
  }
  return numArray;
}
$(document).ready(function(){
  $('.btn').click(function(event){
    $("numArray").show();
    var input = parseInt($('#numberInput').val());
    numArray = resultLoop(input);
    for(var x = 0; x < numArray.length; x++){
      $('#numberInput').append('<li>' + numArray[x] + '</li>');
    event.preventDefault();

    }*/
  });
});
