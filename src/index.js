import './style.css';
import { initial } from './initial';
import { homePage } from './home';
import { menuPage } from './menu';
import { contactPage } from './contact';

const renderPage = (() => {
    initial();
})();

const switcher = (() => {
    const tabs = document.querySelectorAll('.tab');
    
    let i;
    for ( i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', detectTab);
    }

    function detectTab(event) {
        const tabs = ['home', 'menu', 'contact'];
        const tabClass = event.target.getAttribute('id');

        if (tabClass === tabs[0]) {
            homePage ();
        } else if (tabClass === tabs[1]) {
            menuPage ();
        } else if (tabClass === tabs[2]) {
            contactPage ();
        }
    }
})();