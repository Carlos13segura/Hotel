// =============================
// Scroll suave para los enlaces del menú
// =============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// =============================
//  Efectos de animación al hacer scroll
// =============================
window.addEventListener('scroll', revealOnScroll);

function revealOnScroll() {
    const elements = document.querySelectorAll('.reveal');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < window.innerHeight - 100) {
            element.classList.add('active');
        } else {
            element.classList.remove('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    revealOnScroll();
});


