// CAROUSEL
const buttonRight = document.querySelector(".ind-right");
const buttonLeft = document.querySelector(".ind-left");
const testContainer = document.querySelector(".test-container");
const carouselCards = document.querySelectorAll(".carousel-cards");
const cardTextContainer = document.querySelectorAll(".cards-text-container");
const indicator = document.querySelectorAll(".carousel-round-btn");
const carouselContainer = document.querySelector(".carousel");


// other files
// const timelineBTN = document.querySelectorAll(".bt");
// const filler = document.querySelector(".filler");
// const verticalContentH1 = document.querySelector(".timeline-heading");
// const verticalContentPara = document.querySelector(".timeline-para");
// const Bgimage = document.querySelector(".carousel-bg");
// const TimelineContainer = document.querySelector(".vertical-carousel");

// basic positioning
for (let i = 0; i < carouselCards.length; i++) {
    carouselCards[i].style.left = "-110%";
}

let counter = 110;
const funcSlideRight = () => {
    // console.log(counter);
    if (counter <= 0) {
        counter = 440;
    }
    counter = counter - 110;
    for (let i = 0; i < carouselCards.length; i++) {
        // console.log(counter);
        carouselCards[i].style.left = "-" + counter + "%";
    }
}

const funcSlideLeft = () => {
    if (counter >= 330) {
        counter = -110;
    }
    counter = counter + 110;
    for (let i = 0; i < carouselCards.length; i++) {
        // console.log(counter);
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
    else if (counter == 110) {
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
    else if (counter == 220) {
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
    else if (counter == 330) {
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
funcSlide();




// const indicatorClick =()=>{

//     for(let i=0; i < indicator.length; i++){
//         indicator[i].addEventListener("click",()=>{

//         });

//     }
// }
// indicatorClick();










// carouselContainer.addEventListener("mouseenter", () => {
    
    let mouseStart;
    carouselContainer.addEventListener("mousedown", (e) => {
        carouselContainer.style.cursor="grabbing";
        // console.log("mouse down");
        // console.log("mouse down "+e.screenX);
        mouseStart = e.screenX;

    })
    carouselContainer.addEventListener("mouseup", (e) => {
        carouselContainer.style.cursor="grab";
        // console.log("mouse up");
        // console.log("mouse up "+e.screenX);
        let mouseEnd = e.screenX;
        let detectSwipe = mouseStart - mouseEnd;
        if (detectSwipe < 0) {
            // console.log(detectSwipe);
            // console.log("swipe right");
            funcSlideRight();
            funcSlide();

        }
        else if (detectSwipe > 0) {
            // console.log(detectSwipe);
            // console.log("swipe left");
            funcSlideLeft();
            funcSlide();
        }
    })
// })


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


buttonLeft.addEventListener("click", () => {
    funcSlideLeft();
    funcSlide();
}); 

buttonRight.addEventListener("click", () => {
    funcSlideRight();
    funcSlide();
})