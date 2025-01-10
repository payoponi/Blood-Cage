
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const links = document.querySelectorAll('nav ul li a');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionBottom = sectionTop + sectionHeight;

        if (window.scrollY >= sectionTop - sectionHeight / 3 && window.scrollY < sectionBottom) {
            current = section.getAttribute('id');
        }
    });

    links.forEach(link => {
        link.classList.remove('active');
        if (current && link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});




const scrollTopBtn = document.getElementById('scrollTopBtn');

window.onscroll = () => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollTopBtn.style.display = 'block';
    } else {
        scrollTopBtn.style.display = 'none';
    }
};

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});



let visitCount = localStorage.getItem('visitCount') || 0;

visitCount++; 

localStorage.setItem('visitCount', visitCount);

document.querySelector('#visitCount').innerHTML = `Number of visits: ${visitCount}`;





const elements = document.querySelectorAll('.animateOnScroll');

window.addEventListener('scroll', () => {
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
            element.classList.add('visible');
        }
    });
});
