const grams = document.getElementById("input")
const mr = 18
let el = document.getElementById("display")

document.getElementById("showVal").onclick = function () {
  el.value = +grams.value / +mr
  display.innerHTML = el.value
}
