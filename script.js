const but = document.getElementById('contactbutton');
but.addEventListener('click', () => {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
});
const revealElements = document.querySelectorAll('.reveal');


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        }
    });
});
revealElements.forEach((element) => {
    observer.observe(element);
});