import "../styles/main.scss"

// const dots = document.querySelectorAll(".slider-options__dot")
// const slides = document.querySelectorAll(".overview__image")
// const caption = document.querySelectorAll(".overview__caption")

const dotsWrapper = document.querySelector(".slider-options__dots-wrapper")
const dots = Array.from(dotsWrapper.children)
const currentDot = dotsWrapper.querySelector(".slider-options__dot--current")

const imagesContainer = document.querySelector(".overview__images-container")
const slides = Array.from(imagesContainer.children)
const currentSlide = imagesContainer.querySelector(".overview__image--current")

const captionFlex = document.querySelector(".overview__caption-flex")
const captions = Array.from(captionFlex.children)
const currentCaption = captionFlex.querySelector(".overview__caption--current")

const GridWrapper = document.querySelector(".details__grid-wrapper")
const grids = Array.from(GridWrapper.children)
const currentGrid = GridWrapper.querySelector(".details__grid--current")

const prevBtn = document.querySelector(".slider-options__arrow--prev")
const nextBtn = document.querySelector(".slider-options__arrow--next")

let slideIndex = 0

function showSlide(index) {
    if (index >= slides.length) {
        slideIndex = 0
    } else if(index < 0) {
        slideIndex = slides.length - 1
    }

    slides.forEach(slide => {
        slide.style.display = "none"
    })
    slides[slideIndex].style.display = "block"
}

function prevSlide() {
    slideIndex--
    showSlide(slideIndex)
}

function nextSlide() {
    slideIndex++
    showSlide(slideIndex)
}

prevBtn.addEventListener("click", () => {
    prevSlide()
})

nextBtn.addEventListener("click", () => {
    nextSlide()
})

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

    grids[0].style.display = "none"
    grids[2].style.display = "none"
    grids[1].style.display = "grid"
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

    grids[0].style.display = "none"
    grids[1].style.display = "none"
    grids[2].style.display = "grid"
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

    grids[1].style.display = "none"
    grids[2].style.display = "none"
    grids[0].style.display = "grid"
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

    grids[0].style.display = "none"
    grids[2].style.display = "none"
    grids[1].style.display = "grid"
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

    grids[0].style.display = "none"
    grids[1].style.display = "none"
    grids[2].style.display = "grid"
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

    grids[1].style.display = "none"
    grids[2].style.display = "none"
    grids[0].style.display = "grid"
})
