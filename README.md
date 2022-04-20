# imageslider
 The code is used to find the number of slides in a slider.
 const slidesLength = slideRight.querySelectorAll('div').length //we take this negative because the left silde is going to go up.
 slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`
 The code is used to change the slide direction when the user clicks on either of the buttons.
