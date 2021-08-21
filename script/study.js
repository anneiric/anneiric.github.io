const set = document.getElementById("setTimer")
var value = set.value

var startTimer = document.getElementById("start")
startTimer.disabled = false

var timer = function (opts) {
  var self = this

  self.opts = opts || {}
  self.element = opts.element || null
  self.minutes = opts.minutes || 0
  self.seconds = opts.seconds || 30

  self.start = function () {
    self.interval = setInterval(countdown, 1000)
  }
  self.stop = function () {
    clearInterval(self.interval)
  }

  function countdown() {
    self.seconds--
    if (self.minutes == 0 && self.seconds == 0) {
      self.stop()
    }

    if (self.seconds < 0) {
      self.seconds = 59
      self.minutes--
    }

    if (self.seconds <= 9) {
      self.seconds = "0" + self.seconds
    }

    self.element.textContent = self.minutes + " : " + self.seconds
  }
}

function startCountdown() {
  startTimer.disabled = true

  if (value == 0) {
    var newTimer = new timer({
      minutes: 29,
      seconds: 60,
      element: document.querySelector(".time"),
    })
  }

  newTimer.start()
}
