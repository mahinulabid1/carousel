// CAROUSEL
const buttonRight = document.querySelector(".ind-right");
const buttonLeft = document.querySelector(".ind-left");
const testContainer = document.querySelector(".inner-carousel-container");
const carouselCards = document.querySelectorAll(".carousel-cards");
const cardTextContainer = document.querySelectorAll(".cards-text-container");
const indicator = document.querySelectorAll(".carousel-round-btn");
const carouselContainer = document.querySelector(".carousel");



// MAKING THE SECOND SLIDER 
for (let i = 0; i < carouselCards.length; i++) {
    carouselCards[i].style.left = "-101%";
}

let counter = 101;
const funcSlideRight = () => {
    if (counter <= 0) {
        counter = 404;
    }
    counter = counter - 101;
    for (let i = 0; i < carouselCards.length; i++) {
        carouselCards[i].style.left = "-" + counter + "%";
    }
}

// FUNCTION FOR SLIDING LEFT
const funcSlideLeft = () => {
    if (counter >= 303) {
        counter = -101;
    }
    counter = counter + 101;
    for (let i = 0; i < carouselCards.length; i++) {
        carouselCards[i].style.left = "-" + counter + "%";
    }
}

const funcSlide = () => {
    if (counter == 0) {
        carouselCards[0].classList.remove("cards-inactive");
        carouselCards[1].classList.add("cards-inactive");
        carouselCards[2].classList.add("cards-inactive");
        carouselCards[3].classList.add("cards-inactive");

        // show and hide text content function
        setTimeout(() => {
            cardTextContainer[0].classList.remove("d-none");
            cardTextContainer[1].classList.add("d-none");
            cardTextContainer[2].classList.add("d-none");
            cardTextContainer[3].classList.add("d-none");
        }, 300);


        // the indicator sign
        indicator[0].classList.add("carousel-round-active");
        indicator[1].classList.remove("carousel-round-active");
        indicator[2].classList.remove("carousel-round-active");
        indicator[3].classList.remove("carousel-round-active");
    }
    else if (counter == 101) {
        carouselCards[0].classList.add("cards-inactive");
        carouselCards[1].classList.remove("cards-inactive");
        carouselCards[2].classList.add("cards-inactive");
        carouselCards[3].classList.add("cards-inactive");

        // show and hide text content function
        setTimeout(() => {
            cardTextContainer[0].classList.add("d-none");
            cardTextContainer[1].classList.remove("d-none");
            cardTextContainer[2].classList.add("d-none");
            cardTextContainer[3].classList.add("d-none");
        }, 300);

        // the indicator sign
        indicator[0].classList.remove("carousel-round-active");
        indicator[1].classList.add("carousel-round-active");
        indicator[2].classList.remove("carousel-round-active");
        indicator[3].classList.remove("carousel-round-active");
    }
    else if (counter == 202) {
        carouselCards[0].classList.add("cards-inactive");
        carouselCards[1].classList.add("cards-inactive");
        carouselCards[2].classList.remove("cards-inactive");
        carouselCards[3].classList.add("cards-inactive");

        // show and hide text content function
        setTimeout(() => {
            cardTextContainer[0].classList.add("d-none");
            cardTextContainer[1].classList.add("d-none");
            cardTextContainer[2].classList.remove("d-none");
            cardTextContainer[3].classList.add("d-none");
        }, 300);

        // the indicator sign
        indicator[0].classList.remove("carousel-round-active");
        indicator[1].classList.remove("carousel-round-active");
        indicator[2].classList.add("carousel-round-active");
        indicator[3].classList.remove("carousel-round-active");
    }
    else if (counter == 303) {
        carouselCards[0].classList.add("cards-inactive");
        carouselCards[1].classList.add("cards-inactive");
        carouselCards[2].classList.add("cards-inactive");
        carouselCards[3].classList.remove("cards-inactive");

        // show and hide text content function
        setTimeout(() => {
            cardTextContainer[0].classList.add("d-none");
            cardTextContainer[1].classList.add("d-none");
            cardTextContainer[2].classList.add("d-none");
            cardTextContainer[3].classList.remove("d-none");
        }, 300);

        // the indicator sign
        indicator[0].classList.remove("carousel-round-active");
        indicator[1].classList.remove("carousel-round-active");
        indicator[2].classList.remove("carousel-round-active");
        indicator[3].classList.add("carousel-round-active");
    }
}

// THE FIRST SLIDING ANIMATION DOESN'T WORK IF THE FUNCTION DOESN'T CALL ITSELF
funcSlide();



let mouseStart;
carouselContainer.addEventListener("mousedown", (e) => {
    carouselContainer.style.cursor = "grabbing";
    mouseStart = e.screenX;
});

carouselContainer.addEventListener("mouseup", (e) => {
    carouselContainer.style.cursor = "grab";
    let mouseEnd = e.screenX;
    let detectSwipe = mouseStart - mouseEnd;
    if (detectSwipe < 0) {
        // detection :user swiped right
        funcSlideRight();
        funcSlide();
    }
    else if (detectSwipe > 0) {
        // detection :user swiped left
        funcSlideLeft();
        funcSlide();
    }
})



let touchStartPosition;
let touchEndPosition;
carouselContainer.addEventListener("touchstart", (e) => {
    touchStartPosition = Math.floor(e.touches[0].clientX);
    console.log(touchStartPosition);
});

carouselContainer.addEventListener("touchmove", (e) => {
    let x = Math.floor(e.touches[0].clientX);
    touchEndPosition = touchStartPosition - x;
});

carouselContainer.addEventListener("touchend", (e) => {
    console.info("touch ENDED");
    if (touchEndPosition < 0) {
        // console.log(detectSwipe);
        console.log("swipe right");
        console.log(touchEndPosition);
        funcSlideRight();
        funcSlide();
    }
    else if (touchEndPosition > 0) {
        // console.log(detectSwipe);
        console.log("swipe left");
        console.log(touchEndPosition);
        funcSlideLeft();
        funcSlide();
    }
})


// setInterval(() => {
//     funcSlideLeft();
//     funcSlide();
// }, 7000);

