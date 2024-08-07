document.addEventListener('DOMContentLoaded', function() {
    // Contact form submission
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            document.querySelector('.loader').style.display = 'block';
            setTimeout(() => {
                document.querySelector('.loader').style.display = 'none';
                alert('Thank you for your message. We will get back to you soon!');
                form.reset();
            }, 1500);
        });
    }

    // Back to top button
    const backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) { 
                backToTop.classList.add('show');
            } else {
                backToTop.classList.remove('show');
            }
        });
    
        backToTop.addEventListener('click', () => {
            document.body.scrollIntoView({ behavior: 'smooth' });
        });
    }
    

    // Accordion functionality
    const accordionItems = document.querySelectorAll('.accordion-item');
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        header.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    // Slideshow functionality
    const slides = document.querySelectorAll('.slideshow img');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const description = document.querySelector('.project-description p');
    let currentSlide = 0;

    const descriptions = [
        "Stunning kitchen transformation for a modern family home",
        "Elegant master bathroom renovation with spa-like features",
        "Custom cabinetry solution for a spacious walk-in closet",
        "Complete home renovation showcasing open-concept living"
    ];

    function showSlide(index) {
        slides[currentSlide].classList.remove('active');
        slides[index].classList.add('active');
        description.textContent = descriptions[index];
        currentSlide = index;
    }

    prevButton.addEventListener('click', () => {
        let index = currentSlide - 1;
        if (index < 0) index = slides.length - 1;
        showSlide(index);
    });

    nextButton.addEventListener('click', () => {
        let index = (currentSlide + 1) % slides.length;
        showSlide(index);
    });
});