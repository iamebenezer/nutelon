document.addEventListener('DOMContentLoaded', function() {
    const sectionTokenomics = document.querySelector('.section_tokenomics');

    // Check if the section_tokenomics element exists
    if (!sectionTokenomics) return;

    // Define CSS keyframes for falling and rotating animations
    const styleSheet = document.createElement('style');
    styleSheet.innerHTML = `
        @keyframes falling {
            to { top: ${sectionTokenomics.offsetHeight + 150}px; }
        }
        @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(styleSheet);

    // Function to create and animate a money image
    function createAndAnimateMoney() {
        const img = document.createElement('img');
        img.src = 'images/shuriken.png';
        img.style.position = 'absolute';
        img.style.maxWidth = '130px';
        img.style.height = 'auto';
        img.style.zIndex = '10';
        img.style.pointerEvents = 'none';

        // Generate a random starting position within the section
        const startX = Math.random() * sectionTokenomics.offsetWidth;
        img.style.left = `${startX}px`;

        // Adjust initial top position to start further off-screen
        img.style.top = '-150px'; // Start further above the section

        // Append the image to the section_tokenomics div
        sectionTokenomics.appendChild(img);

        // Add animation for falling and rotating with random durations
        const fallingDuration = 4 + Math.random() * 2; // between 4 and 6 seconds
        const rotateDuration = 5 + Math.random(); // between 5 and 6 seconds
        img.style.animation = `falling ${fallingDuration}s linear forwards, rotate ${rotateDuration}s linear infinite`;

        // Remove the image after it has fallen out of view to clean up DOM
        setTimeout(() => {
            img.remove();
        }, fallingDuration * 1000); // Match the timeout to the falling duration
    }

    // Create initial set of money images
    for (let i = 0; i < 9; i++) {
        createAndAnimateMoney();
    }

    // Continuously create new money images at random intervals
    setInterval(createAndAnimateMoney, 1000); // Adjust interval as needed
});