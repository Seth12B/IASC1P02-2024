var age = parseInt(prompt("What is your Age?"));
var now = new Date();
var currentYear = now.getFullYear();
var birthYear = currentYear-age;
document.getElementById("output").innerHTML = birthYear;
