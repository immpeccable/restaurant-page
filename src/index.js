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
let home = document.getElementById('home');
let menu = document.getElementById('menu');
let contact = document.getElementById('contact');
let flag = 0;

home.addEventListener('click' , () => {
    
    first = 0;
    if(flag != 0){
        flag = 0;
        console.log("home");
        let intro = document.getElementById('contentPage');
        let footer = document.getElementById('footer');
        content.removeChild(footer);
        content.removeChild(intro);
        
    
        menu.classList.remove('activee');
        contact.classList.remove('activee');
        home.classList.add('activee');
    
    
        loadHome();
        loadFooter();
    }  
});
menu.addEventListener('click' , () => {
    first = 0;
    if(flag != 1){
        console.log("menu");
        flag = 1;
        let intro = document.getElementById('contentPage');
        let footer = document.getElementById('footer');
        content.removeChild(footer);
        content.removeChild(intro);
        home.classList.remove('activee');
        contact.classList.remove('activee');
        menu.classList.add('activee');
    
        loadMenu();
        loadFooter();    
    }
   
    
});
contact.addEventListener('click' , () => {
    first = 0;
    if(flag != 2){
        flag = 2;
        console.log("contact");
        let intro = document.getElementById('contentPage');
        let footer = document.getElementById('footer');
        content.removeChild(footer);
        content.removeChild(intro);

        menu.classList.remove('activee');
        home.classList.remove('activee');
        contact.classList.add('activee');

        loadContact();
        loadFooter();       
    }

});




