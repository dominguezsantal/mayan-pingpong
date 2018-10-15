function resultLoop(number) {
  var resultOutput = [];
  for (var x = 1; x <= number; x++) {
    if ((x % 15) === 0){
      resultOutput.push('pingpong');
    } else if((x % 5) === 0) {
      resultOutput.push('pong');
    } else if((x % 3) === 0) {
      resultOutput.push('ping');
    } else {
      resultOutput.push(x);
    }
  }
  return resultOutput;
}
$(document).ready(function(){
  $('.btn').click(function(event){
    $('#numberInput').empty();
    var result = parseInt($('#resultOutput').val());
    resultOutput = resultLoop(x);
    for(var x = 0; x < resultOutput.length; i++){
      $('#numberInput').append('<li>' + resultOutput[x] + '</li>');
    event.preventDefault();
    }
  });
});
