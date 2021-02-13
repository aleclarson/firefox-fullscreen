document.addEventListener('keyup', e => {
  if (e.ctrlKey && e.shiftKey && e.keyCode == 70) {
    e.preventDefault()
    document.documentElement.requestFullScreen()
  }
})
