const timelineBTN = document.querySelectorAll(".bt");
const filler = document.querySelector(".filler");
const verticalContentH1 = document.querySelector(".timeline-heading");
const verticalContentPara = document.querySelector(".timeline-para");
const Bgimage = document.querySelector(".carousel-bg");
const TimelineContainer = document.querySelector(".vertical-carousel");



// TIMELINE SLIDER DATA
// ====================================
const DataSlider = {
    sliderOne: {
        h1: "TIMELINE COUNTER",
        p: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        bgImagePath: "./src/image/image1.jpg"
    },
    sliderTwo: {
        h1: "SLIDER 1960",
        p: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        bgImagePath: "./src/image/image2.jpg"
    },
    sliderThree: {
        h1: "SLIDER Counter",
        p: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        bgImagePath: "./src/image/image3.jpg"
    },
    sliderFour: {
        h1: "SLIDER Law",
        p: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        bgImagePath: "./src/image/image4.jpg"
    }
}

// TIMELINE SLIDER FUNCTION
// ==============================================================
const SwitchSlider = {
    sliderOne: () => {
        // COLOR FUNCTION
        filler.style.height = "18%";
        timelineBTN[0].classList.add("bt-active");
        timelineBTN[0].classList.remove("bt-white");

        timelineBTN[1].classList.remove("bt-active");
        timelineBTN[1].classList.remove("bt-white");
        timelineBTN[2].classList.remove("bt-active");
        timelineBTN[2].classList.remove("bt-white");
        timelineBTN[3].classList.remove("bt-active");
        timelineBTN[3].classList.remove("bt-white");

        // DATA FETCHING AND RENDERING
        let heading = DataSlider.sliderOne.h1;
        let para = DataSlider.sliderOne.p;
        verticalContentH1.textContent = heading;
        verticalContentPara.textContent = para;
        let bgImage = DataSlider.sliderOne.bgImagePath;
        Bgimage.src = bgImage;
    },
    sliderTwo: () => {
        // COLOR FUNCTION
        filler.style.height = "36%";
        timelineBTN[0].classList.remove("bt-active");
        timelineBTN[0].classList.add("bt-white");
        timelineBTN[1].classList.add("bt-active");
        timelineBTN[2].classList.remove("bt-active");
        timelineBTN[2].classList.remove("bt-white");
        timelineBTN[3].classList.remove("bt-active");
        timelineBTN[3].classList.remove("bt-white");

        // DATA FETCHING AND RENDERING
        let heading = DataSlider.sliderTwo.h1;
        let para = DataSlider.sliderTwo.p;
        let bgImage = DataSlider.sliderTwo.bgImagePath;
        verticalContentH1.textContent = heading;
        verticalContentPara.textContent = para;
        Bgimage.src = bgImage;
    },
    sliderThree: () => {
        // COLOR FUNCTION
        filler.style.height = "54%";
        timelineBTN[0].classList.remove("bt-active");
        timelineBTN[0].classList.add("bt-white");
        timelineBTN[1].classList.remove("bt-active");
        timelineBTN[1].classList.add("bt-white");
        timelineBTN[2].classList.add("bt-active");
        timelineBTN[3].classList.remove("bt-active");
        timelineBTN[3].classList.remove("bt-white");

        // DATA FETCHING AND RENDERING
        let heading = DataSlider.sliderThree.h1;
        let para = DataSlider.sliderThree.p;
        let bgImage = DataSlider.sliderThree.bgImagePath;
        verticalContentH1.textContent = heading;
        verticalContentPara.textContent = para;
        Bgimage.src = bgImage;
    },
    sliderFour: () => {
        // COLOR FUNCTION
        filler.style.height = "73%";
        timelineBTN[0].classList.remove("bt-active");
        timelineBTN[0].classList.add("bt-white");
        timelineBTN[1].classList.remove("bt-active");
        timelineBTN[2].classList.add("bt-white");
        timelineBTN[2].classList.remove("bt-active");
        timelineBTN[3].classList.add("bt-active");

        // DATA FETCHING AND RENDERING
        let heading = DataSlider.sliderFour.h1;
        let para = DataSlider.sliderFour.p;
        let bgImage = DataSlider.sliderFour.bgImagePath;
        verticalContentH1.textContent = heading;
        verticalContentPara.textContent = para;
        Bgimage.src = bgImage;
    }
}



// CLICK EVENTS FOR TIMELINE
for (let i = 0; i < timelineBTN.length; i++) {
    timelineBTN[i].addEventListener("click", () => {
        // 
        // TimelineFunction();
        let ListClass = timelineBTN[i].classList;
        if (ListClass.contains("bt-1")) {
            SwitchSlider.sliderOne();
        }
        else if (ListClass.contains("bt-2")) {
            SwitchSlider.sliderTwo();

        }
        else if (ListClass.contains("bt-3")) {
            SwitchSlider.sliderThree();
        }
        else if (ListClass.contains("bt-4")) {
            SwitchSlider.sliderFour();
        }
    })
}

// TIMELINE SCROLL BEHAVIOUR
// let percentage;
// let scrollingStatus;
// TimelineContainer.addEventListener("mouseover", () => {
//     // console.log("mouse over elements");
//     let x = filler.clientHeight;
//     let y = document.querySelector(".vertical-btn-container").clientHeight;
//     percentage = Math.floor((x / y) * 100);
//     console.log(percentage);
//     // if (scrollingStatus == "down") {

//     // }
//     // else if (scrollingStatus == "up") {

//     // }
//     var scrollPosition = window.scrollY || window.pageYOffset;
//     console.log(scrollPosition);
// });












// TimelineContainer.addEventListener("mouseenter", () => {
//     // if(window.scrollY>1317 || window.pageYOffset>1317){
//     //     window.addEventListener('scroll', disableScroll);
//     // }
//     // console.log(window.pageYOffset);
//     console.log("scrolling");
//     // if (window.scrollY > 1317 || window.pageYOffset > 1317) {
//     document.body.style.overflowY = "hidden";
//     // }
// });

// TimelineContainer.addEventListener("mouseleave", () => {
//     // window.removeEventListener('scroll', disableScroll);
//     document.body.style.overflowY = "auto";

// });




// window.addEventListener('wheel', function (event) {
//     var delta = Math.sign(event.deltaY);
//     if (delta > 0) {
//         console.log('Scrolling down');

//         scrollingStatus = "down";




//     } else if (delta < 0) {
//         console.log('Scrolling up');
//         scrollingStatus = "up";



//     }


//     this.setTimeout(()=>{
//         if(scrollingStatus == "down"){
//             if (percentage == 17) {
//                 SwitchSlider.sliderTwo();
//             }
//             else if (percentage == 36) {
//                 SwitchSlider.sliderThree();
//             }
//             else if (percentage == 53) {
//                 SwitchSlider.sliderFour();
//             }
//             else if (percentage == 72) {
//                 SwitchSlider.sliderOne();
//             }
//         }
//         else if(scrollingStatus == "up"){
//             if (percentage == 17) {
//                 SwitchSlider.sliderFour();
//             }
//             else if (percentage == 36) {
//                 SwitchSlider.sliderOne();
//             }
//             else if (percentage == 53) {
//                 SwitchSlider.sliderTwo();
//             }
//             else if (percentage == 72) {
//                 SwitchSlider.sliderThree();
//             }
//         }
//     },300)
// });







// CAROUSEL
const buttonRight = document.querySelector(".ind-right");
const buttonLeft = document.querySelector(".ind-left");
const testContainer = document.querySelector(".test-container");
const carouselCards = document.querySelectorAll(".carousel-cards");
const cardTextContainer = document.querySelectorAll(".cards-text-container");
const indicator = document.querySelectorAll(".carousel-round-btn");
const carouselContainer = document.querySelector(".carousel");

// basic positioning
for (let i = 0; i < carouselCards.length; i++) {
    carouselCards[i].style.left = "-110%";
}

let counter = 110;
const funcSlideRight = () => {
    console.log(counter);
    if (counter <= 0) {
        counter = 440;
    }
    counter = counter - 110;
    for (let i = 0; i < carouselCards.length; i++) {
        console.log(counter);
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







// buttonLeft.addEventListener("click", () => {
//     funcSlideLeft();
//     funcSlide();
// });

// buttonRight.addEventListener("click", () => {
//     funcSlideRight();
//     funcSlide();
// })


carouselContainer.addEventListener("mouseenter", () => {
    let mouseStart;
    carouselContainer.addEventListener("mousedown", (e) => {
        // console.log("mouse down "+e.screenX);
        mouseStart = e.screenX;

    })
    carouselContainer.addEventListener("mouseup", (e) => {
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
})



carouselContainer.addEventListener("touchstart",(e)=>{
    console.log(e.screenX);
})

carouselContainer.addEventListener("touchend",(e)=>{
    console.log(e.screenX);
})






// carouselContainer.addEventListener("mouseleave",(e)=>{
//     // console.log("mouse down");
//     console.log("mouse up "+e.offsetX);
// })

setInterval(() => {
    funcSlideLeft();
    funcSlide();
}, 7000);