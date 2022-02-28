const homePage = () => {
    const mainContainer = document.querySelector('.container');
    const contentContainerDelete = document.querySelector('.content-container');
    contentContainerDelete.remove();

    // Same as initial.js from below

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

export { homePage };