var sentenceFunction = function(input) {
var letters = input.split("");
console.log(letters);
var sentenceWithout = letters.map(function(letter) {
  if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u" || letter === "y") {
    letter = "-";
    return letter;
  } else {
    return letter;
  }
  console.log(sentenceWithout);
});
  var finalSentence = sentenceWithout.join("");
  return finalSentence;
  console.log(finalSentence);
}


$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var sentence = $("input#sentence").val();
    $("#output").text(sentenceFunction(sentence));
  });

});
