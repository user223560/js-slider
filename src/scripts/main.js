import "../styles/main.scss"


const dotsWrapper = document.querySelector(".slider-options__dots-wrapper")
const dots = Array.from(dotsWrapper.children)

const imagesContainer = document.querySelector(".overview__images-container")
const slides = Array.from(imagesContainer.children)

const captionFlex = document.querySelector(".overview__caption-flex")
const captions = Array.from(captionFlex.children)

const gridWrapper = document.querySelector(".details__grid-wrapper")
const grids = Array.from(gridWrapper.children)

const prevBtn = document.querySelector(".slider-options__arrow--prev")
const nextBtn = document.querySelector(".slider-options__arrow--next")

let slideIndex = 0
let gridIndex = 0
let dotIndex = 0
let captionIndex = 0

function showSlide(index) {
    if(index >= slides.length) {
        slideIndex = 0
    } else if(index < 0) {
        slideIndex = slides.length - 1
    }

    slides.forEach(slide => {
        slide.style.display = "none"
    })
    slides[slideIndex].style.display = "block"
}

function showGrid(index) {
    if(index >= grids.length) {
        gridIndex = 0
    } else if(index < 0) {
        gridIndex = grids.length - 1
    }

    grids.forEach(grid => {
        grid.style.display = "none"
    })
    grids[gridIndex].style.display = "grid"
}

function showDots(index) {
    if(index >= dots.length) {
        dotIndex = 0
    } else if(index < 0) {
        dotIndex = dots.length - 1
    }

    dots.forEach(dot => {
        dot.classList.remove("slider-options__dot--current")
    })
    dots[dotIndex].classList.add("slider-options__dot--current")
}

function showCaptions(index) {
    if(index >= captions.length) {
        captionIndex = 0
    } else if(index < 0) {
        captionIndex = captions.length - 1
    }

    captions.forEach(caption => {
        caption.classList.remove("overview__caption--current")
    })
    captions[captionIndex].classList.add("overview__caption--current")
}

function prevItem() {
    slideIndex--
    showSlide(slideIndex)
    gridIndex--
    showGrid(gridIndex)
    dotIndex--
    showDots(dotIndex)
    captionIndex--
    showCaptions(captionIndex)
}

function nextItem() {
    slideIndex++
    showSlide(slideIndex)
    gridIndex++
    showGrid(gridIndex)
    dotIndex++
    showDots(dotIndex)
    captionIndex++
    showCaptions(captionIndex)
}

prevBtn.addEventListener("click", () => {
    prevItem()
})

nextBtn.addEventListener("click", () => {
    nextItem()
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
