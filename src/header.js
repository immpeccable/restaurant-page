let loadHeader = () => {
    let content = document.getElementById('content');
    let header = document.createElement('div');
    header.setAttribute('class', 'header');

    content.appendChild(header);

    let resName = document.createElement('div');
    resName.setAttribute('class', 'restaurant-name');
    resName.textContent = "Chez Nous Cafe";

    header.appendChild(resName);

    let headerButtons = document.createElement('div');
    headerButtons.setAttribute('class', 'header-buttons');

    let homeButton = document.createElement("button");
    let menuButton = document.createElement("button");
    let contactButton = document.createElement("button");

    homeButton.setAttribute('class', 'home');
    homeButton.setAttribute('id', 'home');
    homeButton.classList.add('active');
    homeButton.textContent = "Home";
    menuButton.setAttribute('class', 'menu');
    menuButton.setAttribute('id', 'menu');
    menuButton.textContent = "Menu";
    contactButton.setAttribute('class', 'contact');
    contactButton.setAttribute('id', 'contact');
    contactButton.textContent = "Contact";

    headerButtons.appendChild(homeButton);
    headerButtons.appendChild(menuButton);
    headerButtons.appendChild(contactButton);

    header.appendChild(headerButtons);

}

export {loadHeader}