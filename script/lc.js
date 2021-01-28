var english = document.getElementById("english")
var el = document.getElementById("display")
var maths = document.getElementById("maths")
var irish = document.getElementById("irish")
var subject4 = document.getElementById("subject4")
var subject5 = document.getElementById("subject5")
var subject6 = document.getElementById("subject6")
  
document.getElementById("showVal").onclick = function () {
  el.value =
    +maths.value +
    +english.value +
    +irish.value +
    +subject4.value +
    +subject5.value +
    +subject6.value;
    display.innerHTML = el.value
}