let loadContact = () => {

    let content = document.getElementById('content');
    let contactContent = document.createElement('div');
    contactContent.setAttribute('class', 'contact-content');
    contactContent.setAttribute('id', 'contentPage');

    let telRow = document.createElement('div');
    telRow.setAttribute('class', 'telephone');

    let telImg = document.createElement('img');
    telImg.src = "images/phone.png";
    
    telRow.appendChild(telImg);

    let telText = document.createElement('div');
    telText.textContent = "+90 (123) 456 78 90";
    telText.classList.add('tel-text');

    telRow.appendChild(telText);

    let addressRow = document.createElement('div');
    addressRow.setAttribute('class', 'address');

    let addImg = document.createElement('img');
    addImg.src = "images/map-marker.png";

    addressRow.appendChild(addImg);

    let addText = document.createElement('div');
    addText.setAttribute('class', 'address-text');

    addText.textContent = "123 Main Street, New York, NY 10030";

    addressRow.appendChild(addText);


    let lastImg = document.createElement('img');
    lastImg.src = "images/Screenshot from 2022-02-22 21-24-37.png";
    lastImg.classList.add('address-image');

    contactContent.appendChild(telRow);

    contactContent.appendChild(addressRow);

    contactContent.appendChild(lastImg);

    content.appendChild(contactContent);

    /*<div class = "contact-content">
            <div class = "telephone">
                <img src="images/phone.png" alt="">
                <div class = "tel-text">
                    +90 (123) 456 78 90
                </div>
            </div>
            <div class = "address">
                <img src="images/map-marker.png" alt="">
                <div class = "address-text">123 Main Street, New York, NY 10030</div>
            </div>

            <img class = "address-image" src="images/Screenshot from 2022-02-22 21-24-37.png" alt="">
        </div>*/

    
}

export {loadContact};