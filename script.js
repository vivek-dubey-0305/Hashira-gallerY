const divs = document.querySelectorAll(".array-div");

const images = [
    'url("./daemon-slayer-1 (1).jpg")',
    'url("./daemon-slayer-1 (2).jpg")',
    'url("./daemon-slayer-1 (3).jpg")',
    'url("./daemon-slayer-1 (4).jpg")',
    'url("./daemon-slayer-1 (5).png")'
];

function initializeGallery() {
    divs.forEach((div, index) => {
        div.style.backgroundImage = images[index];

        div.addEventListener('click', () => {
            removeActiveClass();
            div.classList.add("active");
        });

        // Add hover effect
        div.addEventListener('mouseover', () => {
            div.style.transform = 'scale(1.02)';
        });

        div.addEventListener('mouseout', () => {
            div.style.transform = 'scale(1)';
        });
    });

    // Set the first div as active by default
    // divs[0].classList.add("active");
}

function removeActiveClass() {
    divs.forEach(div => {
        div.classList.remove("active");
    });
}

// Add smooth scrolling to the gallery when it comes into view
function addScrollAnimation() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    document.querySelector('.container').style.opacity = '0';
    document.querySelector('.container').style.transform = 'translateY(50px)';
    document.querySelector('.container').style.transition = 'opacity 1s, transform 1s';

    observer.observe(document.querySelector('.container'));
}

// Initialize everything when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeGallery();
    addScrollAnimation();
});