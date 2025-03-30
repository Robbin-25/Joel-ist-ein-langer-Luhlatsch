// Navbar -----------------------------------------------------------------------------------------------------
function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
    document.querySelector(".nav-hamburger").classList.toggle("active");
}

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.nav-hamburger');
    const overlaynav = document.getElementById('overlay-nav');
  
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
  
    if (navLinks.classList.contains('active')) {
        overlaynav.style.display = 'block';
    } else {
        overlaynav.style.display = 'none';
    }
  }

window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".navbar");
    if (window.scrollY > 150) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
});

// Hero -----------------------------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".hero").classList.add("visible");
});

// Service -----------------------------------------------------------------------------------------------------
const cards = document.querySelectorAll('.service-card');
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

cards.forEach(card => {
    observer.observe(card);
});

// Chess -----------------------------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
    const chesscontents = document.querySelectorAll(".chess-content");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("chess-show");
            } else {
                entry.target.classList.remove("chess-show");
            }
        });
    }, { threshold: 0.3 });
    
    chesscontents.forEach(content => {
        observer.observe(content);
    });
});

// Porto -----------------------------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
    const portostatsSection = document.querySelector(".porto-stats");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                portostatsSection.classList.add("porto-show-stats");
            } else {
                portostatsSection.classList.remove("porto-show-stats"); // Entfernt die Klasse, wenn sie nicht sichtbar ist
            }
        });
    }, { threshold: 0.3 });

    observer.observe(portostatsSection);
});

// FAQ-Section -----------------------------------------------------------------------------------------------------
function toggleFAQ(element) {
    let faqItem = element.parentElement;
    faqItem.classList.toggle("faq-active");
}

document.addEventListener("DOMContentLoaded", function () {
    const faqimage = document.querySelector(".faq-img");
    const faqSection = document.querySelector(".faq-section");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                faqimage.classList.add("faq-show");
            } else {
                faqimage.classList.remove("faq-show");
            }
        });
    }, { threshold: 0.5 });
    observer.observe(faqSection);
});

// Chess-FAQ-Section -----------------------------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
    const chessfaqcontents = document.querySelectorAll(".chess-faq-content");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("chess-faq-show");
            } else {
                entry.target.classList.remove("chess-faq-show");
            }
        });
    }, { threshold: 0.3 });
    
    chessfaqcontents.forEach(content => {
        observer.observe(content);
    });
});
// FAQ-Chess-Section -----------------------------------------------------------------------------------------------------
function toggleFAQChess(element) {
    let faqchessItem = element.parentElement;
    faqchessItem.classList.toggle("faq-chess-active");
}

// Work -----------------------------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });

        // Beobachte nur die Karten (nicht die gesamte Sektion)
        const cards = document.querySelectorAll('.work-card-1, .work-card-2, .work-card-3');
        cards.forEach(card => observer.observe(card));
    });

// Num -----------------------------------------------------------------------------------------------------
let valueDisplays = document.querySelectorAll(".num");
let interval = 3000;

let options = {
    root: null,
    threshold: 0.5
};

let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        let el = entry.target;
        let hasPlus = el.getAttribute("data-plus") === "true";

        if (entry.isIntersecting) {
            let startValue = 0;
            let endValue = parseInt(el.getAttribute("data-val")) || 0;
            let duration = Math.floor(interval / endValue);

            el.textContent = hasPlus ? "+000" : "000";

            let counter = setInterval(() => {
                startValue += 1;
                el.textContent = hasPlus ? `+${startValue}` : startValue;

                if (startValue === endValue) {
                    clearInterval(counter);
                }
            }, duration);

            el.counter = counter;
        } else {
            if (el.counter) {
                clearInterval(el.counter);
            }
        }
    });
}, options);

valueDisplays.forEach(num => observer.observe(num));

