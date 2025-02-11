// Get the button and hug animation container
const hugButton = document.getElementById("hug-button");
const hugAnimation = document.getElementById("hug-animation");

// Function to trigger the hug animation
hugButton.addEventListener("click", function() {
    hugAnimation.style.display = "block"; // Show the heart animation

    // Hide the animation after it completes
    setTimeout(function() {
        hugAnimation.style.display = "none";
    }, 1500); // Match with the animation duration
});
