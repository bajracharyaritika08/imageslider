const sliderContainer = document.querySelector('.slider-container')
const slideRight = document.querySelector('.right-slide')
const slideLeft = document.querySelector('.left-slide')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
    //The code is used to find the number of slides in a slider.
const slidesLength = slideRight.querySelectorAll('div').length

let activeSlideIndex = 0;
//we take this negative because the left silde is going to go up.
slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`
console.log("checssdak==>", sliderContainer);

upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))
    //changeSlide will take (direction as a parameter)
const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight
    console.log("check==>", sliderHeight);
    if (direction === 'up') {
        activeSlideIndex++
        if (activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0
        }
    } else if (direction === 'down') {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1
        }
    }
    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`

}