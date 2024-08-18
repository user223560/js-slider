import "../styles/main.scss"

// const dots = document.querySelectorAll(".slider-options__dot")
// const slides = document.querySelectorAll(".overview__image")
// const caption = document.querySelectorAll(".overview__caption")

const dotsWrapper = document.querySelector(".slider-options__dots-wrapper")
const imagesContainer = document.querySelector(".overview__images-container")
const captionFlex = document.querySelector(".overview__caption-flex")
const dots = Array.from(dotsWrapper.children)
const slides = Array.from(imagesContainer.children)
const captions = Array.from(captionFlex.children)
const currentDot = dotsWrapper.querySelector(".slider-options__dot--current")
const currentSlide = imagesContainer.querySelector(".overview__image--current")
const currentCaption = captionFlex.querySelector(".overview__caption--current")
const prevBtn = document.querySelector(".slider-options__arrow--prev")
const nextBtn = document.querySelector(".slider-options__arrow--next")

// prevBtn.addEventListener("click", () => {
    
// })

// nextBtn.addEventListener("click", () => {

// })

dots[1].addEventListener("click", () => {
    dots[0].classList.remove("slider-options__dot--current")
    dots[2].classList.remove("slider-options__dot--current")
    dots[1].classList.add("slider-options__dot--current")
    slides[0].style.display = "none"
    slides[2].style.display = "none"
    slides[1].style.display = "block"
    captions[0].classList.remove("overview__caption--current")
    captions[2].classList.remove("overview__caption--current")
    captions[1].classList.add("overview__caption--current")
})

dots[2].addEventListener("click", () => {
    dots[0].classList.remove("slider-options__dot--current")
    dots[1].classList.remove("slider-options__dot--current")
    dots[2].classList.add("slider-options__dot--current")
    slides[0].style.display = "none"
    slides[1].style.display = "none"
    slides[2].style.display = "block"
    captions[0].classList.remove("overview__caption--current")
    captions[1].classList.remove("overview__caption--current")
    captions[2].classList.add("overview__caption--current")
})

dots[0].addEventListener("click", () => {
    dots[1].classList.remove("slider-options__dot--current")
    dots[2].classList.remove("slider-options__dot--current")
    dots[0].classList.add("slider-options__dot--current")
    slides[1].style.display = "none"
    slides[2].style.display = "none"
    slides[0].style.display = "block"
    captions[1].classList.remove("overview__caption--current")
    captions[2].classList.remove("overview__caption--current")
    captions[0].classList.add("overview__caption--current")
})

captions[1].addEventListener("click", () => {
    captions[0].classList.remove("overview__caption--current")
    captions[2].classList.remove("overview__caption--current")
    captions[1].classList.add("overview__caption--current")
    slides[0].style.display = "none"
    slides[2].style.display = "none"
    slides[1].style.display = "block"
    dots[0].classList.remove("slider-options__dot--current")
    dots[2].classList.remove("slider-options__dot--current")
    dots[1].classList.add("slider-options__dot--current")
})

captions[2].addEventListener("click", () => {
    captions[0].classList.remove("overview__caption--current")
    captions[1].classList.remove("overview__caption--current")
    captions[2].classList.add("overview__caption--current")
    slides[0].style.display = "none"
    slides[1].style.display = "none"
    slides[2].style.display = "block"
    dots[0].classList.remove("slider-options__dot--current")
    dots[1].classList.remove("slider-options__dot--current")
    dots[2].classList.add("slider-options__dot--current")
})

captions[0].addEventListener("click", () => {
    captions[1].classList.remove("overview__caption--current")
    captions[2].classList.remove("overview__caption--current")
    captions[0].classList.add("overview__caption--current")
    slides[1].style.display = "none"
    slides[2].style.display = "none"
    slides[0].style.display = "block"
    dots[1].classList.remove("slider-options__dot--current")
    dots[2].classList.remove("slider-options__dot--current")
    dots[0].classList.add("slider-options__dot--current")
})