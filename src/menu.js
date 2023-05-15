import chipsImage from '../assets/chips.png';
import pancakeImage from '../assets/pancakes.png';
import saladImage from '../assets/salad.png';



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
    menu.appendChild(createMenuItem('Chips', '$12.00', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.', chipsImage));
    menu.appendChild(createMenuItem('Pancakes', '$15.00', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.', pancakeImage));
    menu.appendChild(createMenuItem('Salad', '$10.00', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.', saladImage));
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
    const div1 = document.createElement('div');
    div1.classList.add('menu__item-decoration-circle');
    const div2 = document.createElement('div');
    div2.classList.add('menu__item-decoration-line');
    const div3 = document.createElement('div');
    div3.classList.add('menu__item-decoration-circle');
    menuItemDecoration.appendChild(div1);
    menuItemDecoration.appendChild(div2);
    menuItemDecoration.appendChild(div3);

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