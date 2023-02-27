const verticalRoundBtn = document.querySelectorAll(".bt");
const verticalContentH1 = document.querySelector("#vc-heading");
const verticalContentPara = document.querySelector("#vc-para");
const verticalCarouselContainer= document.querySelector(".vertical-carousel");




// vertical counter
(() => {


    const DataSlider = {
        sliderOne: {
            h1: "TIMELINE COUTNER",
            p: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            bgImagePath:"./images/image1.jpg"
        },
        sliderTwo: {
            h1: "SLIDER 1960",
            p: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            bgImagePath:"./images/image2.jpg"
        },
        sliderThree: {
            h1: "SLIDER Counter",
            p: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            bgImagePath:"./images/image3.jpg"
        },
        sliderFour: {
            h1: "SLIDER Law",
            p: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            bgImagePath:"./images/image4.jpg"
        }
    }

    // a function for content changing handler
    const contentChanger = (slider) => {
        // get data from the object according to condition  
        if (slider === 1) {
            let heading = DataSlider.sliderOne.h1;
            let para = DataSlider.sliderOne.p;
            let bgImage= DataSlider.sliderOne.bgImagePath;
            verticalContentH1.textContent=heading;
            verticalContentPara.textContent =para;
            verticalCarouselContainer.style.background='url(' + bgImage + ')';
        }
        else if (slider === 2) {
            let heading = DataSlider.sliderTwo.h1;
            let para = DataSlider.sliderTwo.p;
            let bgImage= DataSlider.sliderTwo.bgImagePath;
            verticalContentH1.textContent=heading;
            verticalContentPara.textContent =para;
            verticalCarouselContainer.style.background='url(' + bgImage + ')';
        }
        else if (slider === 3) {
            let heading = DataSlider.sliderThree.h1;
            let para = DataSlider.sliderThree.p;
            let bgImage= DataSlider.sliderThree.bgImagePath;
            verticalContentH1.textContent=heading;
            verticalContentPara.textContent =para;
            verticalCarouselContainer.style.background='url(' + bgImage + ')';
        }
        else if (slider === 4) {
            let heading = DataSlider.sliderFour.h1;
            let para = DataSlider.sliderFour.p;
            let bgImage= DataSlider.sliderFour.bgImagePath;
            verticalContentH1.textContent=heading;
            verticalContentPara.textContent =para;
            verticalCarouselContainer.style.background='url(' + bgImage + ')';
        }

        // verticalContentH1.textContent=heading;
        // verticalContentPara.textContent =para;
    }

    for (let i = 0; i < verticalRoundBtn.length; i++) {
        verticalRoundBtn[i].addEventListener("click", () => {
            console.log("button clicked");
            let classlist = verticalRoundBtn[i].classList;

            if (classlist.contains("bt-1")) {
                contentChanger(1);
            }
            else if (classlist.contains("bt-2")) {
                console.log("bt-2");
                contentChanger(2);
            }
            else if (classlist.contains("bt-3")) {
                contentChanger(3);
            }
            else if (classlist.contains("bt-4")) {
                contentChanger(4);
            }
        });


    }


})();


// let x=document.querySelector(".btn-req");
// x.addEventListener("click",()=>{
//     console.log("clicked");
// })
