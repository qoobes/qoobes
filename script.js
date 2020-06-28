'use strict'

document.addEventListener("DOMContentLoaded", function(event) { 
  // window.scrollTo(0, 0)
  document.querySelector('.anim').classList.remove('hidden')
  // animate()
  setTimeout(() => {
    stopAnimation()
  }, 8500)
});

const stopAnimation = () => {
  document.querySelector('#animationContainer').remove()
  document.querySelector('body').classList.remove('overflow-hidden')
}

setInterval(() => {
    if (window.innerWidth < 760) {
      document.body.innerHTML = ''
      document.write('this website does not work on smaller screens')
}}, 1000)

  // Make the animation work
