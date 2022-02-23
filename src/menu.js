let loadMenu = () => {

    let imgLinks = ["images/breakfast.png", "images/breakfast(1).png", "images/breakfast(2).png","images/breakfast(3).png", "images/breakfast(4).png","images/breakfast(5).png", "images/pancakes.png", "images/cheese.png" ];
    let mealNames = ["TWO EGGS & BACON", "TWO EGGS & SAUSAGE", "PANCAKES, EGGS & BACON", "TWO EGGS ANY STYLE", "MEXICAN STYLE BURRITO", "MACHACA PLATE", "CHILAQUILES & EGGS", "HUEVOS RANCHEROS"];
    let mealExp = ["2 eggs and 4 slices of bacon served with potatoes, buttered toast and jelly", "2 eggs and 4 sausages served with potatoes, buttered toast and jelly",
    "3 pancakes, 2 eggs and 4 slices of bacon", "served with potatoes, buttered toast and jelly", "Chorizo, bacon, eggs & potatoes served with rice bean", "2 scrambled eggs shredded with beef, onion", "Serves with rice and beans", "2 eggs over easy served with rice, beans and tortillas"];
    let content = document.getElementById('content');
    let menuContent = document.createElement('div');
    menuContent.setAttribute('class', 'grid');
    menuContent.setAttribute('id', 'contentPage');

    for(let i = 0; i<8; i++){

        let item = document.createElement('button');
        item.setAttribute('class', 'item');
        let itemImg = document.createElement('img');
        itemImg.classList.add('menu-img');
        itemImg.src = imgLinks[i];

        item.appendChild(itemImg);

        let txt1 = document.createElement('div');
        let txt2 = document.createElement('div');

        txt1.classList.add('text1');
        txt2.classList.add('text2');

        txt1.textContent = mealNames[i];
        txt2.textContent = mealExp[i];

        item.appendChild(txt1);
        item.appendChild(txt2);

        menuContent.appendChild(item);
    }

    

    content.appendChild(menuContent);


    /*<div class = "grid">
            <button class = "item">

                <img class = "menu-img" src="images/pancakes.png" alt="">
                <div class = "text1">
                    Pancakes
                </div>
                <div class = "text2">
                    Belgian chocolate combined with homemade bread
                </div>
                

            </button>
            <button class = "item">

                <img class = "menu-img" src="images/pancakes.png" alt="">
                <div class = "text1">
                    Pancakes
                </div>
                <div class = "text2">
                    Belgian chocolate combined with homemade bread
                </div>
                

            </button>
            <button class = "item">

                <img class = "menu-img" src="images/pancakes.png" alt="">
                <div class = "text1">
                    Pancakes
                </div>
                <div class = "text2">
                    Belgian chocolate combined with homemade bread
                </div>
                

            </button>
            <button class = "item">

                <img class = "menu-img" src="images/pancakes.png" alt="">
                <div class = "text1">
                    Pancakes
                </div>
                <div class = "text2">
                    Belgian chocolate combined with homemade bread
                </div>
                

            </button>
            <button class = "item">

                <img class = "menu-img" src="images/pancakes.png" alt="">
                <div class = "text1">
                    Pancakes
                </div>
                <div class = "text2">
                    Belgian chocolate combined with homemade bread
                </div>
                

            </button>
            <button class = "item">

                <img class = "menu-img" src="images/pancakes.png" alt="">
                <div class = "text1">
                    Pancakes
                </div>
                <div class = "text2">
                    Belgian chocolate combined with homemade bread
                </div>
                

            </button>
            <button class = "item">

                <img class = "menu-img" src="images/pancakes.png" alt="">
                <div class = "text1">
                    Pancakes
                </div>
                <div class = "text2">
                    Belgian chocolate combined with homemade bread
                </div>
                

            </button>
            <button class = "item">

                <img class = "menu-img" src="images/pancakes.png" alt="">
                <div class = "text1">
                    Pancakes
                </div>
                <div class = "text2">
                    Belgian chocolate combined with homemade bread
                </div>
                

            </button>
            <button class = "item">

                <img class = "menu-img" src="images/pancakes.png" alt="">
                <div class = "text1">
                    Pancakes
                </div>
                <div class = "text2">
                    Belgian chocolate combined with homemade bread
                </div>
                

            </button>
            <button class = "item">

                <img class = "menu-img" src="images/pancakes.png" alt="">
                <div class = "text1">
                    Pancakes
                </div>
                <div class = "text2">
                    Belgian chocolate combined with homemade bread
                </div>
                

            </button>
        </div>*/

}
export {loadMenu};