document.addEventListener("DOMContentLoaded", function () {
    const icons = document.querySelectorAll(".icons");

    // Add hover event listeners to each icon
    icons.forEach(function (icon) {
        const imageSwitcher = icon.querySelector("img");
        const hoverImageUrl = icon.getAttribute("data-hover-image");

        // Preload the hover image for each icon
        const hoverImage = new Image();
        hoverImage.src = hoverImageUrl;

        // Add a hover event listener to each icon
        icon.addEventListener("mouseover", function () {
            // Change the source to the hover image
            imageSwitcher.src = hoverImageUrl;
        });

        // Add a mouseout event listener (optional, to switch back)
        icon.addEventListener("mouseout", function () {
            // Change the source back to the default image
            imageSwitcher.src = "./ICONs/Income.png"; // Replace with the default image path
        });
    });
});
