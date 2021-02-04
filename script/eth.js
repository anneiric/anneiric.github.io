var output = document.getElementById("txt-output")

function update() {
  var content = document.getElementById("txt-input").value
  output.innerHTML = content
}

function italic(elem) {
  elem.classList.toggle("active")
  output.classList.toggle("italic")
}
