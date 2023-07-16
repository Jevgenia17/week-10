const images = ["./assets/images/img_1.jpeg", "./assets/images/img_2.jpeg", "./assets/images/img_3.jpeg"];
let currentImageIndex = 0;

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const image = document.getElementById("image");

prevBtn.addEventListener("click", showPrevImage);
nextBtn.addEventListener("click", showNextImage);

function showPrevImage() {
    currentImageIndex--;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }
    updateImage();
}

function showNextImage() {
    currentImageIndex++;
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    updateImage();
}

function updateImage() {
    image.src = images[currentImageIndex];
}
