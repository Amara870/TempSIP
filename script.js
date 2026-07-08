// Slidshow

// slideshow image array
let arrImages = [
    "download (1).jpg",
    "download (18).jpg",
    "images.png",
    "Company_logo.jpg"
];

let currImg = 0;

function showSlide(index) {
    let image = document.getElementById("slideshow");
    image.src = arrImages[index];
}

showSlide(currImg);

function prevSlide() {
    currImg--;

    if (currImg < 0) {
        currImg = arrImages.length - 1;
    }

    showSlide(currImg);
}

function nextSlide() {
    currImg++;

    if (currImg >= arrImages.length) {
        currImg = 0;
    }

    showSlide(currImg);
}
