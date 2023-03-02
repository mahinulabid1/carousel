const timelineBTN = document.querySelectorAll(".bt");
const filler = document.querySelector(".filler");
const verticalContentH1 = document.querySelector(".timeline-heading");
const verticalContentPara = document.querySelector(".timeline-para");
const Bgimage = document.querySelectorAll(".carousel-bg");
const TimelineContainer = document.querySelector(".timeline-carousel");
const timeLineTextContent = document.querySelector(".timeline-text-container");
const timeLineMenu = document.querySelector(".timeline-menu");
const timeLineBtnContainer = document.querySelector(".timeline-btn-container");


// DEVICE WIDTH STATUS
let devicestatus;
const WidthCheck = () => {
    let x = window.innerWidth;
    if (x <= 700) {
        console.info("mobile device");
        devicestatus = "smallScreen";
    }
    else if (x > 700) {
        console.info("desktop device");
        devicestatus= "bigScreen";
    }
}
WidthCheck();
window.addEventListener("resize", () => {
    WidthCheck();
});


// TIMELINE SLIDER DATA
// ====================================
const DataSlider = {
    sliderOne: {
        h1: "TIMELINE COUNTER",
        p: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        bgImagePath: "./src/image/image1.jpg"
    },
    sliderTwo: {
        h1: "1960",
        p: "Technology has undoubtedly transformed the way we live our lives. From smartphones to laptops, we rely on technology to stay connected with loved ones, complete work tasks, and access information quickly. However, this increased reliance on technology has also led to some negative consequences. Many people report feeling more stressed and anxious due to the constant pressure to be connected and productive. Additionally, concerns about privacy and security are becoming increasingly prevalent as we share more and more of our personal information online. Despite these challenges, there is no doubt that technology will continue to play a significant role in shaping our world for years to come.",
        bgImagePath: "./src/image/image2.jpg"
    },
    sliderThree: {
        h1: "COUNTER",
        p: "Nature has a unique ability to inspire and rejuvenate us. Spending time in the great outdoors can have a profound impact on our mental and physical health, providing a much-needed escape from the stress and chaos of modern life. From breathtaking mountain vistas to serene ocean views, there is no shortage of natural wonders to explore. However, as our planet faces a growing environmental crisis, it is more important than ever to protect and preserve these natural wonders. By making small changes in our daily lives, such as reducing our use of plastic or driving less, we can help ensure that future generations are able to enjoy the same natural beauty that we do today.",
        bgImagePath: "./src/image/image3.jpg"
    },
    sliderFour: {
        h1: "LAW",
        p: "Rain has a unique ability to both calm and invigorate us. The sound of raindrops tapping against a windowpane can be incredibly soothing, helping us to relax and unwind. At the same time, there is something invigorating about being caught in a sudden downpour, feeling the cool drops of rain on our skin and smelling the earthy scent of wet pavement. Rain is also essential for our planet's ecosystem, providing much-needed nourishment for plants and animals alike. However, as climate change continues to alter weather patterns around the world, we may see more frequent and severe droughts or floods. It is crucial that we take steps to reduce our carbon footprint and protect our planet's delicate balance, so that rain can continue to nourish and inspire us for generations to come.",
        bgImagePath: "./src/image/image4.jpg"
    }
}

// TIMELINE SLIDER FUNCTION
// ==============================================================


const ClassHandlerTimeline=(timeLineState)=>{
    if(timeLineState == 1){
        timelineBTN[0].classList.add("bt-active");
        timelineBTN[1].classList.remove("bt-active");
        timelineBTN[2].classList.remove("bt-active");
        timelineBTN[3].classList.remove("bt-active");


        // removing previous class
        timelineBTN[0].classList.remove("bt-previous");
        timelineBTN[1].classList.remove("bt-previous");
        timelineBTN[2].classList.remove("bt-previous");
        timelineBTN[3].classList.remove("bt-previous");


        // DATA FETCHING FROM OBJECT(DataSlider) AND REPLACING
        let heading = DataSlider.sliderOne.h1;
        let para = DataSlider.sliderOne.p;
        verticalContentH1.textContent = heading;
        verticalContentPara.textContent = para;



        // IMAGE OPACITY HANDLER
        Bgimage[0].classList.add("op-1");
        Bgimage[0].classList.remove("op-0");

        Bgimage[1].classList.add("op-0");
        Bgimage[1].classList.remove("op-1");

        Bgimage[2].classList.add("op-0");
        Bgimage[2].classList.remove("op-1");

        Bgimage[3].classList.add("op-0");
        Bgimage[3].classList.remove("op-1");
    }
    else if(timeLineState == 2){
        timelineBTN[0].classList.remove("bt-active");
        timelineBTN[1].classList.add("bt-active");
        timelineBTN[2].classList.remove("bt-active");
        timelineBTN[3].classList.remove("bt-active");


        // DATA FETCHING FROM OBJECT(DataSlider) AND REPLACING
        let heading = DataSlider.sliderTwo.h1;
        let para = DataSlider.sliderTwo.p;

        verticalContentH1.textContent = heading;
        verticalContentPara.textContent = para;


        // removing previous class
        timelineBTN[0].classList.add("bt-previous");
        timelineBTN[1].classList.remove("bt-previous");
        timelineBTN[2].classList.remove("bt-previous");
        timelineBTN[3].classList.remove("bt-previous");


        // IMAGE OPACITY HANDLER
        Bgimage[0].classList.add("op-0");
        Bgimage[0].classList.remove("op-1");

        Bgimage[1].classList.add("op-1");
        Bgimage[1].classList.remove("op-0");

        Bgimage[2].classList.add("op-0");
        Bgimage[2].classList.remove("op-1");

        Bgimage[3].classList.add("op-0");
        Bgimage[3].classList.remove("op-1");
    }
    else if(timeLineState == 3){
        timelineBTN[0].classList.remove("bt-active");
        timelineBTN[1].classList.remove("bt-active");
        timelineBTN[2].classList.add("bt-active");
        timelineBTN[3].classList.remove("bt-active");


        // DATA FETCHING FROM OBJECT(DataSlider) AND REPLACING
        let heading = DataSlider.sliderThree.h1;
        let para = DataSlider.sliderThree.p;

        verticalContentH1.textContent = heading;
        verticalContentPara.textContent = para;

        // removing previous class
        timelineBTN[0].classList.add("bt-previous");
        timelineBTN[1].classList.add("bt-previous");
        timelineBTN[2].classList.remove("bt-previous");
        timelineBTN[3].classList.remove("bt-previous");


        // IMAGE OPACITY HANDLER
        Bgimage[0].classList.add("op-0");
        Bgimage[0].classList.remove("op-1");

        Bgimage[1].classList.add("op-0");
        Bgimage[1].classList.remove("op-1");

        Bgimage[2].classList.add("op-1");
        Bgimage[2].classList.remove("op-0");

        Bgimage[3].classList.add("op-0");
        Bgimage[3].classList.remove("op-1");
    }
    else if(timeLineState == 4){
        timelineBTN[0].classList.remove("bt-active");
        timelineBTN[1].classList.remove("bt-active");
        timelineBTN[2].classList.remove("bt-active");
        timelineBTN[3].classList.add("bt-active");

        // DATA FETCHING FROM OBJECT(DataSlider) AND REPLACING
        let heading = DataSlider.sliderFour.h1;
        let para = DataSlider.sliderFour.p;
        verticalContentH1.textContent = heading;
        verticalContentPara.textContent = para;


        // removing previous class
        timelineBTN[0].classList.add("bt-previous");
        timelineBTN[1].classList.add("bt-previous");
        timelineBTN[2].classList.add("bt-previous");
        timelineBTN[3].classList.remove("bt-previous");

        // IMAGE OPACITY HANDLER
        Bgimage[0].classList.add("op-0");
        Bgimage[0].classList.remove("op-1");

        Bgimage[1].classList.add("op-0");
        Bgimage[1].classList.remove("op-1");

        Bgimage[2].classList.add("op-0");
        Bgimage[2].classList.remove("op-1");

        Bgimage[3].classList.add("op-1");
        Bgimage[3].classList.remove("op-0");
    }
}









// SLIDER FOR DESKTOP
const SwitchSliderDesktop = {
    sliderOne: () => {
        filler.style.height = "18%";
        ClassHandlerTimeline(1);
    },
    sliderTwo: () => {
        filler.style.height = "36%";
        ClassHandlerTimeline(2);
    },
    sliderThree: () => {
        filler.style.height = "54%";
        ClassHandlerTimeline(3);
    },
    sliderFour: () => {
        filler.style.height = "73%";
        ClassHandlerTimeline(4);
    }
}

// SLIDER FUNCTION FOR MOBILE AND TABLET
const SwitchSliderSmallDevice = {
    sliderOne: () => {
        console.log("0001");
        filler.style.width = "10%";
        ClassHandlerTimeline(1);
    },
    sliderTwo: () => {
        console.log("0002");
        filler.style.width = "32%";
        ClassHandlerTimeline(2);
    },
    sliderThree: () => {
        filler.style.width = "56%";
        ClassHandlerTimeline(3);
    },
    sliderFour: () => {
        filler.style.width = "80%";
        ClassHandlerTimeline(4);
    }
}



// CLICK EVENTS FOR TIMELINE
for (let i = 0; i < timelineBTN.length; i++) {
    timelineBTN[i].addEventListener("click", () => {

        let ListClass = timelineBTN[i].classList;
        if (ListClass.contains("bt-1") && devicestatus =="bigScreen") {
            SwitchSliderDesktop.sliderOne();
            console.log("switching to slider one");
        }
        else if (ListClass.contains("bt-2") && devicestatus =="bigScreen") {
            SwitchSliderDesktop.sliderTwo();
            console.log("switching to slider two");
        }
        else if (ListClass.contains("bt-3") && devicestatus =="bigScreen") {
            SwitchSliderDesktop.sliderThree();
        }
        else if (ListClass.contains("bt-4") && devicestatus =="bigScreen") {
            SwitchSliderDesktop.sliderFour();
        }


        else if(ListClass.contains("bt-1") && devicestatus =="smallScreen"){
            console.log("switching to slider one");
            SwitchSliderSmallDevice.sliderOne();
        }
        else if(ListClass.contains("bt-2") && devicestatus =="smallScreen"){
            console.log("switching to slider two");
            SwitchSliderSmallDevice.sliderTwo();
        }
        else if(ListClass.contains("bt-3") && devicestatus =="smallScreen"){
            SwitchSliderSmallDevice.sliderThree();
        }
        else if(ListClass.contains("bt-4") && devicestatus =="smallScreen"){
            SwitchSliderSmallDevice.sliderFour();
        }
    })
}

setInterval(()=>{
    console.log('working interval');
    if(timelineBTN[0].classList.contains('bt-active')) {
        console.log("switch slider two");
        if(devicestatus =="bigscreen"){
            SwitchSliderDesktop.sliderTwo();
        }
        else if(devicestatus =="smallScreen"){
            SwitchSliderSmallDevice.sliderTwo();
        }
        
    }else if(timelineBTN[1].classList.contains('bt-active')){
        console.log("switch slider three");
        if(devicestatus =="bigscreen"){
            SwitchSliderDesktop.sliderThree();
        }
        else if(devicestatus =="smallScreen"){
            SwitchSliderSmallDevice.sliderThree();
        }
    }
    else if(timelineBTN[2].classList.contains('bt-active')){
        console.log("switch slider four");
        if(devicestatus =="bigscreen"){
            SwitchSliderDesktop.sliderFour();
        }
        else if(devicestatus =="smallScreen"){
            SwitchSliderSmallDevice.sliderFour();
        }
    }
    else if(timelineBTN[3].classList.contains('bt-active')){
        console.log("switch slider 1");
        if(devicestatus =="bigscreen"){
            SwitchSliderDesktop.sliderOne();
        }
        else if(devicestatus =="smallScreen"){
            SwitchSliderSmallDevice.sliderOne();
        }
    }
}, 5000);




