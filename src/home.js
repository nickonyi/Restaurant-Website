import loadMenu from "./menu.js";

function createHome() {
    const home = document.createElement('div');
    home.classList.add('home');

    const homeTitle = document.createElement('h1');
    homeTitle.classList.add('home__title');
    homeTitle.textContent = 'Welcome to';

    const homeText = document.createElement('h2');
    homeText.classList.add('home__text');
    homeText.textContent = `L'Atelier de Cuisine`;

    const homeSubText = document.createElement('h2');
    homeSubText.classList.add('home__subtext');
    homeSubText.textContent = `An expereince you will never forget`;

    const menuBtn = document.createElement('button');
    menuBtn.classList.add('home__button');
    menuBtn.textContent = 'See Menu';
    menuBtn.addEventListener('click', (e) => {
        loadMenu();
    });


    home.appendChild(homeTitle);
    home.appendChild(homeText);
    home.appendChild(homeSubText);
    home.appendChild(menuBtn);

    return home;
}



function loadHome() {
    const main = document.querySelector('.main');
    main.textContent = '';
    main.appendChild(createHome());
}

export default loadHome;