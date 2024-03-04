document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").slice(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                const offsetTop = targetElement.offsetTop;
                window.scrollTo({
                    top: offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });

    // Scrollspy
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".menu li a");

    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });
    });

    // Scroll-to-top button
    const scrollToTopButton = document.getElementById("scrollToTop");

    window.addEventListener("scroll", () => {
        if (window.pageYOffset > 100) {
            scrollToTopButton.classList.add("show");
        } else {
            scrollToTopButton.classList.remove("show");
        }
    });

    scrollToTopButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});


// Active navigation indicator
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 50; // Adjust for navbar height
        const sectionHeight = section.clientHeight;
        const id = section.getAttribute('id');

        if (window.pageYOffset >= sectionTop && window.pageYOffset < (sectionTop + sectionHeight)) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });

            document.querySelector(`nav a[href="#${id}"]`).classList.add('active');
        }
    });
});

// Filter projects based on selected category
const filterButtons = document.querySelectorAll('.project-filter li');

filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        const category = this.getAttribute('data-category');

        // Remove 'project-filter-active' class from all buttons
        filterButtons.forEach(button => {
            button.classList.remove('project-filter-active');
        });

        // Add 'project-filter-active' class to the clicked button
        this.classList.add('project-filter-active');

        // Show or hide portfolio items based on selected category
        const portfolioItems = document.querySelectorAll('.portfolio-box');

        portfolioItems.forEach(item => {
            const itemCategory = item.getAttribute('data-category');

            if (category === 'all' || category === itemCategory) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

//Animation
document.addEventListener("DOMContentLoaded", function() {
    const animateElements = document.querySelectorAll(".animate");

    function checkInView(element) {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;

        return elementTop < windowHeight ? true : false;
    }

    function animateOnScroll() {
        animateElements.forEach(element => {
            if (checkInView(element)) {
                element.classList.add("animate__animated", "animate__fadeInUp");
            }
        });
    }

    window.addEventListener("scroll", animateOnScroll);
});

//type animation
document.addEventListener("DOMContentLoaded", function() {
    const options = {
        strings: ['Layson', '23 Years Old', 'a 3rd Year Student'], // Add your desired texts here
        typeSpeed: 55, // Adjust the typing speed (in milliseconds)
        loop: true // Set to true if you want the typing animation to loop
    };

    const typed = new Typed('.typed-text', options);
});

//Read More
document.addEventListener("DOMContentLoaded", function() {
    const readMoreBtn = document.querySelector('.read-more-btn');
    const hiddenContent = document.querySelector('.hidden');

    readMoreBtn.addEventListener('click', function() {
        if (hiddenContent.style.display === "none") {
            hiddenContent.style.display = "block";
            readMoreBtn.textContent = "Read Less";
        } else {
            hiddenContent.style.display = "none";
            readMoreBtn.textContent = "Read More";
        }
    });
});

// Scroll to top function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show or hide the button based on scroll position
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollToTopBtn").style.display = "block";
    } else {
        document.getElementById("scrollToTopBtn").style.display = "none";
    }
}

// Display a custom message in the browser tab
document.title = "Not Interested?";
// Event listener for when the user switches back to the tab
document.addEventListener("visibilitychange", function() {
    if (document.visibilityState === 'visible') {
      // Change the title back to the default one
      document.title = "Portfolio | Aron Layson";
    }
  });
