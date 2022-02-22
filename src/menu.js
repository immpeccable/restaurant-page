let loadMenu = () => {


    let content = document.getElementById('content');
    let menuContent = document.createElement('div');
    menuContent.setAttribute('class', 'menu-content');
    menuContent.setAttribute('id', 'contentPage');

    content.appendChild(menuContent);

}
export {loadMenu};