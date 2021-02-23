const letters = {
    α: "a",
    ά: "a",
    β: "v",
    γ: "g",
    δ: "d",
    ε: "e",
    έ: "e",
    ζ: "z",
    η: "h",
    ή: "h",
    θ: "th",
    ι: "i",
    ί: "i",
    κ: "k",
    λ: "l",
    μ: "m",
    ν: "n",
    ξ: "ks",
    ο: "o",
    ό: "o",
    π: "p",
    ρ: "r",
    σ: "s",
    ς: "s",
    τ: "t",
    υ: "u",
    ύ: "u",
    φ: "f",
    χ: "x",
    ψ: "ps",
    ω: "w",
    ώ: "w",
    Α: "A",
    Β: "V",
    Γ: "G",
    Δ: "D",
    Ε: "E",
    Ζ: "Z",
    Η: "H",
    Θ: "TH",
    Ι: "I",
    Κ: "K",
    Λ: "L",
    Μ: "M",
    Ν: "N",
    Ξ: "KS",
    Ο: "O",
    Π: "P",
    Ρ: "R",
    Σ: "S",
    Τ: "T",
    Υ: "Y",
    Φ: "F",
    Χ: "X",
    Ψ: "PS",
    Ω: "W",
    ";": "?",
  }
  
  let greek = document.getElementById("greek")
  let english = document.getElementById("english")
  
  greek.addEventListener("input", function () {
    english.value = ""
    let val = this.value
    val = val.split("")
  
    setTimeout(function () {
      Object.keys(letters).map(function (item) {
        for (var j = 0; j < val.length; j++) {
          var i = val.indexOf(item)
          if (i !== -1) {
            val[i] = letters[item]
            english.value = val.join("")
          }
        }
      })
    })
  })
  