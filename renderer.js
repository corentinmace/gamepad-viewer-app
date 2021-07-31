let packageAnswer = document.getElementById("background")
packageAnswer.style.backgroundColor = electronInfo.backgroundCookie

let colorpickerInput = document.getElementById("colorPicker")
  colorpickerInput.value = electronInfo.backgroundCookie

document.getElementById('colorPicker').addEventListener('change', (event) => {
  event.preventDefault()
  const form = event.target
  window.myAPI.printNameToCLI(form.value)
})