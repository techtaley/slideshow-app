//const response = await fetch(`https://dog.ceo/api/breed/beagle/images`)
//const response = await fetch(`https://dog.ceo/api/breeds/list/all`)

let timer
let deleteFirstPhotoDelay

async function loadImages() {
    try {
        const response = await fetch(`https://dog.ceo/api/breed/beagle/images`)
        const data = await response.json()
        showSlides(data.message)
        //console.log(data.mesage)
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