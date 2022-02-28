const menuItem = (name, image, description, price) => {
    return {name, image, description, price};
}

const item1 = menuItem('Souvlaki', '1', 'Typically marinated in oil, salt, pepper, oregano and lemon. Also known as kalamaki.', '45');
const item2 = menuItem('Moussaka', '2', 'Casserole made of (typically fried) aubergine, potato, and spiced minced meat.', '35');
const item3 = menuItem('Gyros', '3', 'Roasted and sliced meat (usually pork or chicken, rarely beef or lamb) on a turning spit, typically served with sauces like tzatziki and garnishes (tomato, onions) on pita bread.', '40');
const item4 = menuItem('Kleftiko', '4', 'Literally meaning of the klephts, also called "Exochikó", this Cypriot dish is lamb slow-baked on the bone, first marinated in garlic and lemon juice, originally cooked in a pit oven.', '55');

const menuArray = [item1, item2, item3, item4];

const renderMenu = () => {
    const menuContainer = document.createElement('div');
    menuContainer.setAttribute('class', 'main-menu text');
    
    menuArray.forEach((element) =>  {
        const newDiv = document.createElement('div');
        newDiv.setAttribute('class', 'text menu-item');
        newDiv.innerHTML = `
        <img src="../src//images/image${element.image}.jpg" alt="menu-item-${element.image}" class="menu-image">
        <div class="menu-name">${element.name}</div>
        <div class="menu-description">${element.description}</div>
        <div class="menu-price">Price: ${element.price} HRK</div>`
        menuContainer.appendChild(newDiv);
    })

    const contentContainer = document.querySelector('.description-text');
    contentContainer.appendChild(menuContainer);
}

const menuPage = () => {

    const contentContainer = document.querySelector('.content-container');
    contentContainer.innerHTML = '';

    const content = document.createElement('div');
    content.setAttribute('class', 'content');
    contentContainer.appendChild(content);

    const contentTitle = document.createElement('div');
    contentTitle.setAttribute('class', 'content-title medium-title text');
    contentTitle.innerText = 'MENU';
    content.appendChild(contentTitle);

    const contentText = document.createElement('div');
    contentText.setAttribute('class', 'description-text text');
    contentText.innerText = 'Our menu has been specially designed by our head chef to offer the best and highest quality Greek meals.';
    content.appendChild(contentText);

    renderMenu()
};

export { menuPage };