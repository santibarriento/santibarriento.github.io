const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('.section');

function showSection(sectionId) {

    const targetSection = document.getElementById(sectionId);

    if (!targetSection) {
        console.error(`No se encontró la sección: ${sectionId}`);
        return;
    }

    sections.forEach(section => {
        section.classList.remove('active');
    });

    targetSection.classList.add('active');
}

function setActiveLink(link) {

    navLinks.forEach(navLink => {
        navLink.classList.remove('active');
    });

    link.classList.add('active');
}

navLinks.forEach(link => {

    link.addEventListener('click', (event) => {

        event.preventDefault();

        const sectionId = link.dataset.section;

        if (!sectionId) {
            return;
        }

        showSection(sectionId);
        setActiveLink(link);

    });

});

showSection('about');

const aboutLink = document.querySelector(
    'nav a[data-section="about"]'
);

if (aboutLink) {
    setActiveLink(aboutLink);
}