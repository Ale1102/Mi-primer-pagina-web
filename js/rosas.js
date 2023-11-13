document.addEventListener("DOMContentLoaded", function() {
    const zoomableImages = document.querySelectorAll(".zoomable");
    const overlay = document.createElement("div");
    overlay.className = "zoom-overlay";
    const zoomedImage = new Image();
    zoomedImage.className = "zoomed-image";
    overlay.appendChild(zoomedImage);
    document.body.appendChild(overlay);

    let currentImageIndex = 0;
    const galleryImages = Array.from(zoomableImages);

    galleryImages.forEach(function(image, index) {
        image.addEventListener("click", function() {
            currentImageIndex = index;
            showImageInOverlay();
        });
    });

    overlay.addEventListener("click", function() {
        overlay.style.display = "none";
    });

    function showImageInOverlay() {
        const selectedImage = galleryImages[currentImageIndex];
        zoomedImage.src = selectedImage.src;
        overlay.style.display = "block";
    }
});
