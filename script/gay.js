var text = [
  "0% </br> go take a shower",
  "30% </br> stream arca to be gayer",
  "50% </br> let's be besties",
  "80% </br> can we kiss on the pride anti-homeless bench",
  "100% </br> how does it feel like being hot",
]
function result() {
  document.getElementById("display").innerHTML =
    text[Math.floor(Math.random() * text.length)]
}
