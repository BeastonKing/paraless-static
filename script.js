window.addEventListener('scroll', () => {
    const navbar = document.querySelector('nav');
    navbar.classList.toggle('scrolled', window.scrollY > 100);

});

// Function to change the album that is currently being displayed
const changeAlbum = (button) => {

    // targets the button
    const btnId = button.target.id;

    // removes the album currently being displayed
    document.querySelector('#tiw').style.display = 'none';
    document.querySelector('#al').style.display = 'none';
    document.querySelector('#st').style.display = 'none';
    document.querySelector('#bne').style.display = 'none';
    document.querySelector('#riot').style.display = 'none';
    document.querySelector('#awkif').style.display = 'none';

    // removes the active/selected class from all buttons
    document.querySelector('#tiw-btn').classList.remove('active');
    document.querySelector('#al-btn').classList.remove('active');
    document.querySelector('#st-btn').classList.remove('active');
    document.querySelector('#bne-btn').classList.remove('active');
    document.querySelector('#riot-btn').classList.remove('active');
    document.querySelector('#awkif-btn').classList.remove('active');



    // selects the album based on the clicked button
    // adds an 'active' class to a clicked button to show the currently selected button
    if (btnId === 'tiw-btn') {
        document.querySelector('#tiw').style.display = 'flex';
        document.querySelector('#tiw-btn').classList.add('active');
    } else if (btnId === 'al-btn') {
        document.querySelector('#al').style.display = 'flex';
        document.querySelector('#al-btn').classList.add('active');
    } else if (btnId === 'st-btn') {
        document.querySelector('#st').style.display = 'flex';
        document.querySelector('#st-btn').classList.add('active');
    } else if (btnId === 'bne-btn') {
        document.querySelector('#bne').style.display = 'flex';
        document.querySelector('#bne-btn').classList.add('active');
    } else if (btnId === 'riot-btn') {
        document.querySelector('#riot').style.display = 'flex';
        document.querySelector('#riot-btn').classList.add('active');
    } else if (btnId === 'awkif-btn') {
        document.querySelector('#awkif').style.display = 'flex';
        document.querySelector('#awkif-btn').classList.add('active');
    } else {
        console.log('error');
    }
}

// finds all buttons (located only on Albums)
const buttons = document.querySelectorAll('#buttons button');


// adds changeAlbum function to each buttons
buttons.forEach((button) => {
    button.addEventListener('click', changeAlbum);
});

// function to add functionality to navbar when it's shrunk enough
// this function will add a 'navbar-responsive' class to a <nav> if it doesn't have one already
const responsiveNavbar = () => {
    const navbar = document.querySelector('#top-navbar');

    // toggle could also work here
    if (!navbar.className.includes('navbar-responsive')) {
        navbar.classList.add('navbar-responsive');
    } else {
        navbar.classList.remove('navbar-responsive');
    }
}

// add the responsiveNavbar function to the hamburger icon
document.querySelector('.icon-container').addEventListener('click', responsiveNavbar);