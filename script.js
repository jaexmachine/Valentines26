const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const mainGif = document.getElementById('main-gif');
const heartsContainer = document.getElementById('hearts-container');

let noClickCount = 0;

// The text sequence you requested
const noTexts = [
    "No",
    "Weh?",
    "Pleaseeeeeeee",
    "Think about DingDong and Jannah",
    "Are you really sure?",
    "You're breaking my heart :(",
    "I'm gonna cry...",
    "YES IS THE ONLY OPTION!"
];

// 1. Spawning Floating Hearts
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = Math.random() * (30 - 10) + 10 + 'px';
    heart.style.animationDuration = Math.random() * (5 - 3) + 3 + 's';
    
    heartsContainer.appendChild(heart);

    // Remove heart after animation ends
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Start spawning hearts every 500ms
setInterval(createHeart, 500);

// 2. The "No" Button Logic
noButton.addEventListener('click', () => {
    noClickCount++;

    // Update text based on our array (loops at the end)
    if (noClickCount < noTexts.length) {
        noButton.innerText = noTexts[noClickCount];
    } else {
        noButton.innerText = noTexts[noTexts.length - 1];
    }

    // Make the YES button grow
    const currentScale = 1 + (noClickCount * 0.4); // Increases by 40% each click
    const currentPaddingX = 32 + (noClickCount * 15);
    const currentPaddingY = 12 + (noClickCount * 8);
    
    yesButton.style.transform = `scale(${currentScale})`;
    yesButton.style.padding = `${currentPaddingY}px ${currentPaddingX}px`;
    
    // Optional: Move the "No" button slightly or make it smaller
    const noScale = Math.max(0.5, 1 - (noClickCount * 0.1));
    noButton.style.transform = `scale(${noScale})`;

    // If YES button gets too big, it starts to overlap everything
    if (noClickCount > 6) {
        yesButton.style.position = 'fixed';
        yesButton.style.inset = '0';
        yesButton.style.zIndex = '50';
        yesButton.style.display = 'flex';
        yesButton.style.alignItems = 'center';
        yesButton.style.justifyContent = 'center';
        yesButton.style.fontSize = '5rem';
    }
});

// 3. The "Yes" Button Logic
yesButton.addEventListener('click', () => {
    // Add confetti (using a simple emoji burst since we're in one file)
    for(let i=0; i<50; i++) {
        setTimeout(createHeart, i * 20);
    }
    
    // Change GIF to a happy one
    mainGif.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM20ycHByYml4bXF3Z3R3bm5qZGRvbm9qZGRvbm9qZGRvbm9qZGRvbm9qZGRvbm8mZXB2MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/MDJ9NmMAMyjSqzobI2/giphy.gif";

    // Redirect after a short delay so she sees the happy reaction
    setTimeout(() => {
        window.location.href = "letter.html"; 
    }, 2000);

});
