let home = document.getElementById("home");
let menu = document.getElementById("menu");
let contact = document.getElementById("contact");


home.addEventListener('click' , () => {
    menu.classList.remove('active');
    contact.classList.remove('active');
    home.classList.add('active');
})
menu.addEventListener('click' , () => {
    home.classList.remove('active');
    contact.classList.remove('active');
    menu.classList.add('active');
})
contact.addEventListener('click' , () => {
    menu.classList.remove('active');
    home.classList.remove('active');
    contact.classList.add('active');
})