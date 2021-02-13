let timer
let deleteFirstPhotoDelay

async function loadImages() {
    try {
        const response = await fetch(`https://dog.ceo/api/breed/beagle/images`)
        const data = await response.json()
        showSlides(data.message)    
    } catch(e) {
        console.log("Issue loading images", e)
    }
}	

//start fetching images => returns promises data => awaits json data => sends data.message to slideShow
loadImages()

//create slideshow using template literals
function showSlides(images){
    let imageIndex = 0
    clearInterval(timer)
    clearTimeout(deleteFirstPhotoDelay)

    if(images.length > 1){
        document.querySelector('#slideshow-container').innerHTML = `
        <div class="mySlides fade" style="background-image: url('${images[0]}')"></div>
        <div class="mySlides fade" style="background-image: url('${images[1]}')"></div>
        `
        imageIndex+=2

    if(images.length === 2) imageIndex = 0
    timer = setInterval(nextImage, 3000)
    } else {
        document.querySelector('#slideshow-container').innerHTML = `
            <div class="mySlides fade" style="background-image: url('${images[0]}')"></div>
            <div class="mySlides fade"></div>        
        `
    }

    function nextImage(){
        document.querySelector("#slideshow-container").insertAdjacentHTML("beforeend", `
        <div class="mySlides fade" style="background-image: url('${images[imageIndex]}')"></div>
        `)

        deleteFirstPhotoDelay = setTimeout(() => document.querySelector(".mySlides").remove(), 1000)
        imageIndex+1 >= images.length ? imageIndex=0 : imageIndex++
    }
}


// let showSlides = (images) => {
//     var imageIndex = 0;
//     showSlides();
    
//     function showSlides() {
//       var slides = document.getElementsByClassName("mySlides");
//       for (var i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//       }
//       imageIndex++;
//       if (imageIndex > slides.length) {imageIndex = 1}
//       slides[imageIndex-1].style.display = "block";
//       setTimeout(showSlides, 2000); // Change image every 2 seconds
//     }
// }    


//fetch data - use try catch in situations where something could go wrong
// async function start(){
//     try {
//         const response = await fetch("https://dog.ceo/api/breeds/list/all") //will resolve when we hear back from servere
//         const data = await response.json()  //await response from server - data saved in .json format
//         createBreedList(data.message)
//     } catch(e) {
//         console.log("There was a problem fetching the breed list")
//     }
// }

// start()

// //dynamically show first two slides - two allows for a fade effect from first to second
// function createSlideshow(images){
//     let currentPosition = 0
//     clearInterval(timer)
//     clearTimeout(deleteFirstPhotoDelay)

//     //if we have at least two slides we show them but if just one we show just one but keep 
//     //second div in order for css to work

//     if(images.length> 1){
//         document.querySelector("#slideshow").innerHTML = `
//         <div class="slide" style="background-image: url('${images[0]}')"></div>    
//         <div class="slide" style="background-image: url('${images[1]}')"></div>    
//         `
//         //after 2 images, we add timer to advance current position will be 3rd image
//         currentPosition += 2
//         //if there is only 2 image in db, 3rd posititon is back to beginning 
//         if(images.length === 2 ) currentPosition = 0
//         //if(images.length === 1) currentPosition = 1
//         timer = setInterval(nextSlide, 3000)
//     } else {
//         document.querySelector("#slideshow").innerHTML = `
//         <div class="slide" style="background-image: url('${images[0]}')"></div>    
//         <div class="slide"></div>    
//         `        
//     }

//     //variable scope - closure:  child function has access to parent functions variables
//     function nextSlide(){
//         document.querySelector('#slideshow').insertAdjacentHTML("beforeend", `
//             <div class="slide" style="background-image: url('${images[currentPosition]}')"></div>
//         `)
//         //remove oldest photo after 1 second (slide has a .9s animation )
//         //after 1 second currentPosition counter increases so we go through all images
//         //if currentPosition matches images.length we go back to one  or increment
//         deleteFirstPhotoDelay = setTimeout(() => document.querySelector(".slide").remove(), 1000)
//         currentPosition+1 >= images.length ? currentPosition=0 : currentPosition++   
//     }
// }