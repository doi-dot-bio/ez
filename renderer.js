function handleKeyPress (event) {
  document.getElementById('last-keypress').innerText = event.key
  alert(`You pressed ${event.key}`)
}

window.addEventListener('keyup', handleKeyPress, true)

