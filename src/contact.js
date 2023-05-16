function createContact() {
    const contact = document.createElement('div');
    contact.classList.add('contact');


    const contactHeaderH = document.createElement('h1');
    contactHeaderH.classList.add('contact__header');
    contactHeaderH.textContent = `L'Atelier de Cuisine`;

    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contact__container');

    contactContainer.appendChild(contactBox('contact us', '+1 123 456 789', 'cuisine@yahoo.com', 'Contact Form'));
    contactContainer.appendChild(contactBox('Address', '1234 Main Street', 'New York 1001', 'Book a Table'));

    contact.appendChild(contactHeaderH);
    contact.appendChild(contactContainer);



    return contact;
}

function contactBox(BoxHeader, BoxText1, BoxText2, BoxText3) {
    const contactBox = document.createElement('div');
    contactBox.classList.add('contact__box');

    const contactBox1H = document.createElement('h2');
    contactBox1H.classList.add('contact__box--header');
    contactBox1H.textContent = BoxHeader;

    const contactBox1P = document.createElement('p');
    contactBox1P.classList.add('contact__box--text');
    contactBox1P.textContent = BoxText1;

    const contactBox1P2 = document.createElement('p');
    contactBox1P2.classList.add('contact__box--text');
    contactBox1P2.textContent = BoxText2;

    const contactSmallBox = document.createElement('div');
    contactSmallBox.classList.add('contact__smallbox');
    contactSmallBox.textContent = BoxText3;

    contactBox.appendChild(contactBox1H);
    contactBox.appendChild(contactBox1P);
    contactBox.appendChild(contactBox1P2);
    contactBox.appendChild(contactSmallBox);

    return contactBox;
}


function loadContact() {
    const main = document.querySelector('.main');
    main.textContent = '';
    main.appendChild(createContact());

}

export default loadContact;