function createHeader() {
    const header = document.createElement('header');
    header.classList.add('header');
    header.appendChild(createNav());


    return header;
}

function createNav() {
    const nav = document.createElement('nav');
    nav.classList.add('nav');

    const homeButton = document.createElement('button');
    homeButton.classList.add('nav__button');
    homeButton.textContent = 'Home';

    const menuButton = document.createElement('button');
    menuButton.classList.add('nav__button');
    menuButton.textContent = 'Menu';

    const contactButton = document.createElement('button');
    contactButton.classList.add('nav__button');
    contactButton.textContent = 'Contact';



    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(contactButton);
    return nav;
}

function setActiveButton(button) {
    const buttons = document.querySelectorAll('.nav__button');
    buttons.forEach(button => {
        if (button !== this) {
            button.classList.remove('active');
        }
    });
    button.classList.add('nav__button--active');
}



function initializeWebsite() {
    const content = document.getElementById('content');
    content.appendChild(createHeader());

}

export default initializeWebsite;