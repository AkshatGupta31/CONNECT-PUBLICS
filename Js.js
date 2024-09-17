// ----------------------js of changing text in hero section title

// Array of taglines to display
const taglines = [
    "Iconic brands",
    "Trusted Brand",
    "Respected Brand",
    "Top Brand",
    "Leading Brand",
    "Recognized Brand"
];


// Get the tagline element
const taglineElement = document.getElementById('tagline');

// Function to change the tagline with a fade effect
let currentIndex = 0;
function changeTagline() {
    taglineElement.style.opacity = 0; // Start by fading out

    setTimeout(() => {
        // Change the text after fade-out completes
        taglineElement.innerHTML = `"${taglines[currentIndex]}"`;
        taglineElement.style.opacity = 1; // Fade back in

        // Update the current index
        currentIndex = (currentIndex + 1) % taglines.length; // Loop through the taglines
    }, 1000); // Wait for 1 second to match the fade-out duration
}

// Call the function to change the tagline every 4 seconds (3-second wait + 1-second fade)
setInterval(changeTagline, 3000);

// Set the initial tagline
changeTagline();

// / ---------------------- end of js of changing text in hero section title