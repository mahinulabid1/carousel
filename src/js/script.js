const timelineBTN = document.querySelectorAll(".bt");
const filler = document.querySelector(".filler");
const verticalContentH1 = document.querySelector(".timeline-heading");
const verticalContentPara =document.querySelector(".timeline-para");
const Bgimage= document.querySelector(".carousel-bg");

// const btResponse=()=>{
//     let classContain;
//     for(let i=0; i<timelineBTN.length; i++){
//         timelineBTN[i].addEventListener("click",()=>{
//             console.log("btn clicked from line 7");
//         });

//     }
// }


// vertical counter



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

// // a function for content changing handler
// const contentChanger = (slider) => {
//     // get data from the object according to condition  
//     if (slider === 1) {
//         let heading = DataSlider.sliderOne.h1;
//         let para = DataSlider.sliderOne.p;
//         let bgImage = DataSlider.sliderOne.bgImagePath;
//         verticalContentH1.textContent = heading;
//         verticalContentPara.textContent = para;
//         verticalCarouselContainer.style.background = 'url(' + bgImage + ')';
//     }
//     else if (slider === 2) {
//         let heading = DataSlider.sliderTwo.h1;
//         let para = DataSlider.sliderTwo.p;
//         let bgImage = DataSlider.sliderTwo.bgImagePath;
//         verticalContentH1.textContent = heading;
//         verticalContentPara.textContent = para;
//         verticalCarouselContainer.style.background = 'url(' + bgImage + ')';
//     }
//     else if (slider === 3) {
//         let heading = DataSlider.sliderThree.h1;
//         let para = DataSlider.sliderThree.p;
//         let bgImage = DataSlider.sliderThree.bgImagePath;
//         verticalContentH1.textContent = heading;
//         verticalContentPara.textContent = para;
//         verticalCarouselContainer.style.background = 'url(' + bgImage + ')';
//     }
//     else if (slider === 4) {
//         let heading = DataSlider.sliderFour.h1;
//         let para = DataSlider.sliderFour.p;
//         let bgImage = DataSlider.sliderFour.bgImagePath;
//         verticalContentH1.textContent = heading;
//         verticalContentPara.textContent = para;
//         verticalCarouselContainer.style.background = 'url(' + bgImage + ')';
//     }

//     // verticalContentH1.textContent=heading;
//     // verticalContentPara.textContent =para;
// }






// timeline button color function
for (let i = 0; i < timelineBTN.length; i++) {
    timelineBTN[i].addEventListener("click", () => {
        let ListClass = timelineBTN[i].classList;
        if (ListClass.contains("bt-1")) {
            // COLOR FUNCTION
            filler.style.height = "18%";
            timelineBTN[0].classList.add("bt-active");
            timelineBTN[1].classList.remove("bt-active");
            timelineBTN[2].classList.remove("bt-active");
            timelineBTN[3].classList.remove("bt-active");

            // DATA FETCHING AND RENDERING
            let heading = DataSlider.sliderOne.h1;
            let para = DataSlider.sliderOne.p;
            verticalContentH1.textContent = heading;
            verticalContentPara.textContent = para;
            let bgImage = DataSlider.sliderOne.bgImagePath;
            Bgimage.src=bgImage;
        }
        else if (ListClass.contains("bt-2")) {
            // COLOR FUNCTION
            filler.style.height = "36%";
            timelineBTN[0].classList.remove("bt-active");
            timelineBTN[1].classList.add("bt-active");
            timelineBTN[2].classList.remove("bt-active");
            timelineBTN[3].classList.remove("bt-active");

            // DATA FETCHING AND RENDERING
            let heading = DataSlider.sliderTwo.h1;
            let para = DataSlider.sliderTwo.p;
            let bgImage = DataSlider.sliderTwo.bgImagePath;
            verticalContentH1.textContent = heading;
            verticalContentPara.textContent = para;
            Bgimage.src=bgImage;

        }
        else if (ListClass.contains("bt-3")) {
            // COLOR FUNCTION
            filler.style.height = "54%";
            timelineBTN[0].classList.remove("bt-active");
            timelineBTN[1].classList.remove("bt-active");
            timelineBTN[2].classList.add("bt-active");
            timelineBTN[3].classList.remove("bt-active");

            // DATA FETCHING AND RENDERING
            let heading = DataSlider.sliderThree.h1;
            let para = DataSlider.sliderThree.p;
            let bgImage = DataSlider.sliderThree.bgImagePath;
            verticalContentH1.textContent = heading;
            verticalContentPara.textContent = para;
            Bgimage.src=bgImage;
        }
        else if (ListClass.contains("bt-4")) {
            // COLOR FUNCTION
            filler.style.height = "73%";
            timelineBTN[0].classList.remove("bt-active");
            timelineBTN[1].classList.remove("bt-active");
            timelineBTN[2].classList.remove("bt-active");
            timelineBTN[3].classList.add("bt-active");

            // DATA FETCHING AND RENDERING
            let heading = DataSlider.sliderFour.h1;
            let para = DataSlider.sliderFour.p;
            let bgImage = DataSlider.sliderFour.bgImagePath;
            verticalContentH1.textContent = heading;
            verticalContentPara.textContent = para;
            Bgimage.src=bgImage;
        }
    })
}