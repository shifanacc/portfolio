// Active navbar link while scrolling
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

// Scroll reveal animation
const revealElements = document.querySelectorAll(
    ".section-title, .stat-card, .about-text, .info-item, .skill-card, .project-card, .edu-card, .certificate-card, .contact-content"
);

const revealOnScroll = () => {
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 80) {
            element.classList.add("show");
        }
    });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// Animated counter
const counters = document.querySelectorAll(".stat-card h4");
let counterStarted = false;

const startCounters = () => {
    if (counterStarted) return;

    const statsSection = document.querySelector(".stats");
    const statsTop = statsSection.getBoundingClientRect().top;

    if (statsTop < window.innerHeight - 80) {
        counters.forEach(counter => {
            const target = parseInt(counter.innerText);
            let count = 0;

            const updateCounter = () => {
                if (count < target) {
                    count++;
                    counter.innerText = count + "+";
                    setTimeout(updateCounter, 90);
                } else {
                    counter.innerText = target + "+";
                }
            };

            updateCounter();
        });

        counterStarted = true;
    }
};

window.addEventListener("scroll", startCounters);
window.addEventListener("load", startCounters);
// Dark mode toggle
const themeToggle = document.getElementById("themeToggle");
const themeIcon = themeToggle.querySelector("i");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");
    } else {
        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");
    }
});/* =====================================
   Typing Animation
===================================== */

const roles = [
    "AI & Data Science Enthusiast",
    "Machine Learning Developer",
    "Deep Learning Developer",
    "Data Analytics Practitioner",
    "Streamlit App Developer",
    "Building Intelligent Solutions"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

const typingElement = document.getElementById("typing");

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!deleting) {
        typingElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentRole.length) {
            deleting = true;
            setTimeout(typeEffect, 1800);
            return;
        }

    } else {

        typingElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            deleting = false;
            roleIndex++;

            if (roleIndex >= roles.length) {
                roleIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, deleting ? 40 : 80);
}

typeEffect();