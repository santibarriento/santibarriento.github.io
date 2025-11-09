const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('.section');

function showSection(sectionId) {
  sections.forEach(section => {
    section.classList.remove('active');
  });
  document.getElementById(sectionId).classList.add('active');
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
    showSection(sectionId);
    setActiveLink(link);
  });
});

showSection('about');
setActiveLink(document.querySelector('nav a[data-section="about"]'));
