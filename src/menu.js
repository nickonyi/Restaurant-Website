import menuImage1 from '../assets/menu-1.png';
import menuImage2 from '../assets/menu-2.png';
import menuImage3 from '../assets/menu-3.png';



function createMenu() {
    const menu = document.createElement('div');
    menu.classList.add('menu');

    const menuHeaderContainer = document.createElement('div');
    menuHeaderContainer.classList.add('menu__header-container');

    const menuTitle = document.createElement('h1');
    menuTitle.classList.add('menu__title');
    menuTitle.textContent = `L'Atelier de Cuisine`;

    const menuText = document.createElement('h2');
    menuText.classList.add('menu__text');
    menuText.textContent = `Menu`;

    menuHeaderContainer.appendChild(menuTitle);
    menuHeaderContainer.appendChild(menuText);
    menu.appendChild(menuHeaderContainer);
    menu.appendChild(createMenuItem('Pancakes', '$12.00', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.', menuImage1));
    menu.appendChild(createMenuItem('Eggs', '$15.00', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.', menuImage2));
    menu.appendChild(createMenuItem('Onions', '$10.00', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.', menuImage3));
    return menu;
}


function createMenuItem(name, price, description, image) {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu__item');

    const menuItemDiv = document.createElement('div');
    menuItemDiv.classList.add('menu__item-div');

    const menuItemName = document.createElement('h3');
    menuItemName.classList.add('menu__item-name');
    menuItemName.textContent = name;

    const menuItemDecoration = document.createElement('div');
    menuItemDecoration.classList.add('menu__item-decoration');


    const menuItemPrice = document.createElement('h3');
    menuItemPrice.classList.add('menu__item-price');
    menuItemPrice.textContent = price;

    menuItemDiv.appendChild(menuItemName);
    menuItemDiv.appendChild(menuItemDecoration);
    menuItemDiv.appendChild(menuItemPrice);

    const menuItemDescription = document.createElement('p');
    menuItemDescription.classList.add('menu__item-description');
    menuItemDescription.textContent = description;

    const menuItemImage = document.createElement('img');
    menuItemImage.classList.add('menu__item-image');
    menuItemImage.src = image;

    menuItem.appendChild(menuItemDiv);
    menuItem.appendChild(menuItemDescription);
    menuItem.appendChild(menuItemImage);

    return menuItem;
}

function loadMenu() {
    const main = document.querySelector('#main');
    main.textContent = '';
    main.appendChild(createMenu());
}

export default loadMenu;