function checkQuiz() {
  var score = 0;

  var q1 = document.querySelector('input[name="q1"]:checked');
  if (q1 && q1.value === "Eto'o") score++;

  var q2 = document.querySelector('input[name="q2"]:checked');
  if (q2 && q2.value === "1899") score++;

  var q3 = document.querySelector('input[name="q3"]:checked');
  if (q3 && q3.value === "Messi") score++;

  var q4 = document.querySelector('input[name="q4"]:checked');
  if (q4 && q4.value === "Camp Nou") score++;

  var q5 = document.querySelector('input[name="q5"]:checked');
  if (q5 && q5.value === "Luis Enrique") score++;

  var q6 = document.querySelector('input[name="q6"]:checked');
  if (q6 && q6.value === "Real Madrid") score++;

  document.getElementById("quizResult").innerHTML =
    "You scored " + score + " out of 6.";

  return false;
}
