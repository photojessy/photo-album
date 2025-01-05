// Select all images with the "lightbox-img" class
const lightboxImages = document.querySelectorAll(".lightbox-img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("close-btn");

// Show lightbox when an image is clicked
lightboxImages.forEach(img => {
    img.addEventListener("click", () => {
        lightboxImg.src = img.src; // Set the lightbox image source to the clicked image
        lightbox.classList.remove("hidden");
    });
});

// Close lightbox when "Close" button is clicked
closeBtn.addEventListener("click", () => {
    lightbox.classList.add("hidden");
});

// Close lightbox when clicking outside the image
lightbox.addEventListener("click", (e) => {
    if (e.target !== lightboxImg) {
        lightbox.classList.add("hidden");
    }
});
