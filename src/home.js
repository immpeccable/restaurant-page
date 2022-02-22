let loadHome = () =>{

    /*alert("hello world");*/
    
    let content = document.getElementById('content');
    let introduction = document.createElement('div');
    introduction.setAttribute('class', 'introduction');
    introduction.setAttribute('id', 'contentPage');

    let text1 = document.createElement('div');
    text1.setAttribute('class','text1');
    text1.textContent = "Delicious breakfasts waiting for you";
    introduction.appendChild(text1);
    let text2 = document.createElement('div');
    text2.setAttribute('class', 'text2');
    text2.textContent = "Made with completely organic ingredients";
    introduction.appendChild(text2);

    let img = document.createElement('img');
    img.src = "images/CIV Sept 26.png";
    img.classList.add('chef-img');

    introduction.appendChild(img);

    content.appendChild(introduction);

    

}
export {loadHome};