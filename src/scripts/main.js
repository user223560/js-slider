import "../styles/main.scss"


const prevBtn = document.querySelector(".slider-options__arrow--prev")
const nextBtn = document.querySelector(".slider-options__arrow--next")
const dots = document.querySelectorAll(".slider-options__dot")
const caption = document.querySelectorAll(".overview__caption")
const slides = document.querySelectorAll(".overview__image")
const descTxt = document.querySelectorAll(".details__description")

prevBtn.addEventListener("click", () => {
    console.clear()
    console.log("Click on left arrow")
})

nextBtn.addEventListener("click", () => {
    console.clear()
    console.log("Click on right arrow")
})

dots[1].addEventListener("click", () => {
    dots[0].classList.remove("slider-options__dot--current")
    dots[2].classList.remove("slider-options__dot--current")
    dots[1].classList.add("slider-options__dot--current")
    slides[0].style.display = "none"
    slides[2].style.display = "none"
    slides[1].style.display = "block"
    caption[0].classList.remove("overview__caption--current")
    caption[2].classList.remove("overview__caption--current")
    caption[1].classList.add("overview__caption--current")
})

dots[2].addEventListener("click", () => {
    dots[0].classList.remove("slider-options__dot--current")
    dots[1].classList.remove("slider-options__dot--current")
    dots[2].classList.add("slider-options__dot--current")
    slides[0].style.display = "none"
    slides[1].style.display = "none"
    slides[2].style.display = "block"
    caption[0].classList.remove("overview__caption--current")
    caption[1].classList.remove("overview__caption--current")
    caption[2].classList.add("overview__caption--current")
})

dots[0].addEventListener("click", () => {
    dots[1].classList.remove("slider-options__dot--current")
    dots[2].classList.remove("slider-options__dot--current")
    dots[0].classList.add("slider-options__dot--current")
    slides[1].style.display = "none"
    slides[2].style.display = "none"
    slides[0].style.display = "block"
    caption[1].classList.remove("overview__caption--current")
    caption[2].classList.remove("overview__caption--current")
    caption[0].classList.add("overview__caption--current")
})

caption[1].addEventListener("click", () => {
    caption[0].classList.remove("overview__caption--current")
    caption[2].classList.remove("overview__caption--current")
    caption[1].classList.add("overview__caption--current")
    slides[0].style.display = "none"
    slides[2].style.display = "none"
    slides[1].style.display = "block"
    dots[0].classList.remove("slider-options__dot--current")
    dots[2].classList.remove("slider-options__dot--current")
    dots[1].classList.add("slider-options__dot--current")
})

caption[2].addEventListener("click", () => {
    caption[0].classList.remove("overview__caption--current")
    caption[1].classList.remove("overview__caption--current")
    caption[2].classList.add("overview__caption--current")
    slides[0].style.display = "none"
    slides[1].style.display = "none"
    slides[2].style.display = "block"
    dots[0].classList.remove("slider-options__dot--current")
    dots[1].classList.remove("slider-options__dot--current")
    dots[2].classList.add("slider-options__dot--current")
})

caption[0].addEventListener("click", () => {
    caption[1].classList.remove("overview__caption--current")
    caption[2].classList.remove("overview__caption--current")
    caption[0].classList.add("overview__caption--current")
    slides[1].style.display = "none"
    slides[2].style.display = "none"
    slides[0].style.display = "block"
    dots[1].classList.remove("slider-options__dot--current")
    dots[2].classList.remove("slider-options__dot--current")
    dots[0].classList.add("slider-options__dot--current")
})