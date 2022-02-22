import {loadHome} from './home.js';
import {loadContact} from './contact.js';
import {loadMenu} from './menu.js';
import {loadHeader} from './header.js';
import {loadFooter} from './footer.js';

loadHeader();

let first = 1;
if(first == 1){
    loadHome();
    loadFooter();
}
let flag = 0;

home.addEventListener('click' , () => {
    
    first = 0;
    if(flag == 0){
        return;
    }
    flag = 0;
    console.log("home");
    let intro = document.getElementById('contentPage');
    let footer = document.getElementById('footer');
    content.removeChild(footer);
    content.removeChild(intro);
    

    menu.classList.remove('active');
    contact.classList.remove('active');
    home.classList.add('active');

    console.log("hello");

    loadHome();
    loadFooter();
    
    
});
menu.addEventListener('click' , () => {
    first = 0;
    if(flag == 1){
        return;
    }
    let intro = document.getElementById('contentPage');
    let footer = document.getElementById('footer');
    content.removeChild(footer);
    content.removeChild(intro);
    home.classList.remove('active');
    contact.classList.remove('active');
    menu.classList.add('active');
    loadMenu();
    loadFooter();
    
    
});
contact.addEventListener('click' , () => {
    first = 0;
    if(flag == 2){
        return;
        
    }
    flag = 2;
    let intro = document.getElementById('contentPage');
    let footer = document.getElementById('footer');
    content.removeChild(footer);
    content.removeChild(intro);

    menu.classList.remove('active');
    home.classList.remove('active');
    contact.classList.add('active');

    loadContact();
    loadFooter();

});




