function bubbles() {
  var arr = ['Yes', 'No', 'Maybe', 'So']
  var randNum = Math.floor(Math.random() * (arr.length))
  // reset the input
  document.getElementById('userInput').innerHTML = ''
  
  
  if (validateForm()) {
    var userData = document.getElementById('userInput').value.toLowerCase()
    switch (userData) {
      case  "what is the meaning of life?":
        document.getElementById('answerDisplay').innerHTML = '42'
        break
      case "what is love?":
        document.getElementById('answerDisplay').innerHTML = "Baby don't hurt me"
        break
      case "baby don't hurt me?":
        document.getElementById('answerDisplay').innerHTML = "no more"
        break
      default:
        document.getElementById('answerDisplay').innerHTML = arr[randNum]
    }
  } 
}

function validateForm() {
  var userData = document.getElementById('userInput').value
  if (!userData.includes('?') || userData == "") {
    document.getElementById('answerDisplay').innerHTML = 'Must ask a question'
    return false
  } else {
    return true
  }
}

// For enter to work to click the shake button.
document.querySelector("#userInput").addEventListener("keyup", function () {
  if (event.key !== "Enter") {
    return
  } 
  document.querySelector("#shakeBtn").click();
});