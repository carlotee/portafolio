document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const section = document.querySelector(this.getAttribute('href'));

        section.scrollIntoView({
            behavior: 'smooth'
        });
    });
});


const skills = document.querySelectorAll('.skill');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }

    });
});

skills.forEach(skill => {
    observer.observe(skill);
});


skills.forEach(skill => {

    skill.addEventListener('mouseenter', () => {
        skill.style.transform = "scale(1.1)";
    });

    skill.addEventListener('mouseleave', () => {
        skill.style.transform = "scale(1)";
    });

});