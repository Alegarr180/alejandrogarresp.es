//Pregunta 1
const question1 = document.getElementsByClassName("question1")[0];
const q1txt = document.getElementsByClassName("q1txt")[0];
const q1arrow = document.getElementsByClassName("q1arrow")[0];
question1.addEventListener("click", () => {
  q1txt.classList.toggle("inactiveq1");
  question1.classList.toggle("inactive1");
  q1arrow.classList.toggle("inactiveq1arrow");
});

//Pregunta 2
const question2 = document.getElementsByClassName("question2")[0];
const q2txt = document.getElementsByClassName("q2txt")[0];
const q2arrow = document.getElementsByClassName("q2arrow")[0];
question2.addEventListener("click", () => {
  q2txt.classList.toggle("inactiveq2");
  question2.classList.toggle("inactive2");
  q2arrow.classList.toggle("inactiveq2arrow");
});

//Pregunta 3
const question3 = document.getElementsByClassName("question3")[0];
const q3txt = document.getElementsByClassName("q3txt")[0];
const q3arrow = document.getElementsByClassName("q3arrow")[0];
question3.addEventListener("click", () => {
  q3txt.classList.toggle("inactiveq3");
  question3.classList.toggle("inactive3");
  q3arrow.classList.toggle("inactiveq3arrow");
});

//Pregunta 4
const question4 = document.getElementsByClassName("question4")[0];
const q4txt = document.getElementsByClassName("q4txt")[0];
const q4arrow = document.getElementsByClassName("q4arrow")[0];
question4.addEventListener("click", () => {
  q4txt.classList.toggle("inactiveq4");
  question4.classList.toggle("inactive4");
  q4arrow.classList.toggle("inactiveq4arrow");
});