const initial = () => {
    const bodyTag = document.querySelector('body');
    const mainContainer = document.createElement('div');
    mainContainer.setAttribute('class', 'container');
    bodyTag.appendChild(mainContainer);

    const header = document.createElement('header');
    mainContainer.appendChild(header);

    const title = document.createElement('div');
    title.setAttribute('class', 'page-title large-title text');
    title.innerText = 'NES\'VISE';
    header.appendChild(title);

    const tabs = document.createElement('div');
    tabs.setAttribute('class', 'tabs-container');
    header.appendChild(tabs);

    const homeTab = document.createElement('div');
    homeTab.setAttribute('class', 'tab home text medium-title');
    homeTab.setAttribute('id', 'home');
    homeTab.innerText = 'HOME';
    tabs.appendChild(homeTab);

    const menuTab = document.createElement('div');
    menuTab.setAttribute('class', 'tab menu text medium-title');
    menuTab.setAttribute('id', 'menu');
    menuTab.innerText = 'MENU';
    tabs.appendChild(menuTab);

    const contactTab = document.createElement('div');
    contactTab.setAttribute('class', 'tab contact text medium-title');
    contactTab.setAttribute('id', 'contact');
    contactTab.innerText = 'CONTACT';
    tabs.appendChild(contactTab);

    // Same as home.js from below

    const contentContainer = document.createElement('div');
    contentContainer.setAttribute('class', 'content-container');
    mainContainer.appendChild(contentContainer);

    const content = document.createElement('div');
    content.setAttribute('class', 'content');
    contentContainer.appendChild(content);

    const addContent = document.createElement('div');
    addContent.setAttribute('class', 'content about text');
    contentContainer.appendChild(addContent);

    const addContentMain = document.createElement('div');
    addContentMain.setAttribute('class', 'text description-text');
    addContentMain.innerText = 'Visit our family restaurant in the center of Zagreb. Established in 1978.';
    addContent.appendChild(addContentMain);

    const addContentLocation= document.createElement('div');
    addContentLocation.setAttribute('class', 'text description-text');
    addContentLocation.innerHTML = `
    <div class="mapouter"><div class="gmap_canvas"><iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=zagreb&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.whatismyip-address.com/divi-discount/"></a><br><style>.mapouter{position:relative;text-align:right;height:500px;width:600px;}</style><a href="https://www.embedgooglemap.net">google maps code for wordpress</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}</style></div></div>`
    addContent.appendChild(addContentLocation);

    const addContentHours= document.createElement('div');
    addContentHours.setAttribute('class', 'work text description-text');
    addContentHours.innerHTML = `
    <div class="working-days text">
      <div class="monday">Monday to Friday</div>
      <div class="saturday">Saturday</div>
      <div class="sunday">Sunday</div>
    </div>
    <div class="working-hours text">
      <div class="monday">12:00 to 23:00</div>
      <div class="saturday">17:00 to 01:00</div>
      <div class="sunday">CLOSED</div>
    </div>`
    addContent.appendChild(addContentHours);

    const contentTitle = document.createElement('div');
    contentTitle.setAttribute('class', 'content-title huge-title text');
    contentTitle.innerText = 'Original Greek experience in Zagreb';
    content.appendChild(contentTitle);
};


export { initial };