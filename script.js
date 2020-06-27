'use strict'

// document.addEventListener("DOMContentLoaded", function(event) { 
    // window.scrollTo(0, 0)
    setInterval(() => {
       if (window.innerWidth < 760) {
         document.body.innerHTML = ''
         document.write('this website does not work on smaller screens')
    }, 1000)
  // });