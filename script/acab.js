acab = document.getElementById("acab");

acab.addEventListener('click', function(event) {
    var pigs = "";
    var input = document.getElementById("input").value;
    var words = countWords(input);
    if (input == null || input == "" || !input.replace(/\s/g, '').length) {
        words = 0;
      }
    for (var i = 0; i < words; i++) {
      pigs += "pigs ";
    }
    document.getElementById("output").value = pigs;
  });

  function countWords(str) {
    return str.trim().split(/\s+/).length;
  }
  