// Program for handling the footer part in /home HTML file


// Paragraphs elements
const aboutUs = document.querySelector('#aboutus');
const aboutUsSpan = document.querySelector('.aboutus');

const aboutOurProducts = document.querySelector('#aboutOurProducts');
const aboutOurProductsSpan = document.querySelector('.aboutour');

const aboutTheProgrammer = document.querySelector('#aboutTheProgrammer');
const aboutTheProgrammerSpan = document.querySelector('.aboutTheProgrammer');

const categories = document.querySelector('#categories');
const categoriesSpan = document.querySelector('.categories');

const policies = document.querySelector('#policies');
const policiesSpan = document.querySelector('.policies');

let hidden = true; // Default mode

function toggleButtons() {

    aboutus.addEventListener('click', () => {
        if (hidden) {
            aboutUsSpan.style.display = "block";
            hidden = false;
        } else {
            aboutUsSpan.style.display = "none";
            hidden = true;
        }
    });

    aboutOurProducts.addEventListener('click', () => {
        if (hidden) {
            aboutOurProductsSpan.style.display = "block";
            hidden = false;
        } else {
            aboutOurProductsSpan.style.display = "none";
            hidden = true;
        }
    });

    aboutTheProgrammer.addEventListener('click', () => {
        if (hidden) {
            aboutTheProgrammerSpan.style.display = "block";
            hidden = false;
        } else {
            aboutTheProgrammerSpan.style.display = "none";
            hidden = true;
        }
    });

    categories.addEventListener('click', () => {
        if (hidden) {
            categoriesSpan.style.display = "block";
            hidden = false;
        } else {
            categoriesSpan.style.display = "none";
            hidden = true;
        }
    });

    policies.addEventListener('click', () => {
        if (hidden) {
            policiesSpan.style.display = "block";
            hidden = false;
        } else {
            policiesSpan.style.display = "none";
            hidden = true;
        }
    });

}

toggleButtons();





