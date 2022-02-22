let loadFooter = () => {

    let content = document.getElementById('content');

    let footer = document.createElement('div');
    footer.setAttribute('class', 'footer');
    footer.setAttribute('id', 'footer');
    footer.textContent = "Tunahan Dündar";
    let linktogithub = document.createElement('a');
    linktogithub.href = "https://github.com/immpeccable/restaurant-page";

    let img = document.createElement('img');
    img.src = "images/GitHub-Mark.png";
    img.classList.add('github-img');

    linktogithub.appendChild(img);

    footer.appendChild(linktogithub);

    content.appendChild(footer);

    /*<div class = "footer">
            Tunahan Dündar
            <a href="https://github.com/immpeccable/restaurant-page">
                <img class = "github-img" src="images/GitHub-Mark.png" alt="">
            </a>
    </div>*/


} 
export {loadFooter};