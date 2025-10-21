// Dark mode toggle
const toggle = document.getElementById('themeToggle');
toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    toggle.classList.toggle('fa-sun');
    toggle.classList.toggle('fa-moon');
});

// Typing effect
const phrases = [
    "I build intelligent systems that solve real-world problems.",
    "I craft user-focused web applications.",
    "I explore emerging tech trends and lead creative design initiatives."
];

const typedText = document.getElementById('typed-text');
let i = 0, j = 0, isDeleting = false;

function type() {
    let currentPhrase = phrases[i];
    typedText.textContent = currentPhrase.substring(0, j);

    if (!isDeleting) {
        j++;
        if (j > currentPhrase.length) {
            isDeleting = true;
            setTimeout(type, 1500);
            return;
        }
    } else {
        j--;
        if (j === 0) {
            isDeleting = false;
            i = (i + 1) % phrases.length;
        }
    }
    setTimeout(type, isDeleting ? 50 : 100);
}
type();

// Scroll reveal
const sections = document.querySelectorAll('section, .hero-text, .hero-img');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.2 });
sections.forEach(sec => observer.observe(sec));

// Skill animation
const skills = document.querySelectorAll('.skill');
const skillObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, { threshold: 0.5 });
skills.forEach(skill => skillObserver.observe(skill));
