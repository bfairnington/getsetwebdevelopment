// Image Carousel
let index = 0;
const images = document.querySelectorAll(".carousel-item");

function showNextImage() {
    images.forEach(img => img.style.display = "none");
    images[index].style.display = "block";
    index = (index + 1) % images.length;
}

setInterval(showNextImage, 3000);
showNextImage();

// Countdown Timer
function startCountdown() {
    const eventDate = new Date("2025-06-01T00:00:00").getTime();

    setInterval(() => {
        const now = new Date().getTime();
        const distance = eventDate - now;

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    }, 1000);
}

startCountdown();
