const contactPage = () => {

    const contentContainer = document.querySelector('.content-container');
    contentContainer.innerHTML = '';

    const content = document.createElement('div');
    content.setAttribute('class', 'content');
    contentContainer.appendChild(content);

    const contentTitle = document.createElement('div');
    contentTitle.setAttribute('class', 'content-title medium-title text');
    contentTitle.innerText = 'CONTACT';
    content.appendChild(contentTitle);

    const contentText = document.createElement('div');
    contentText.setAttribute('class', 'content-text text');
    contentText.innerHTML = `
    <div class="description-text text">
        Please fill out the form below to reserve a table. You will receive a response and confirmation on your e-mail.
    </div>

    <div class="form-area">
                <fieldset>
                    <form action="#" method="post">
                        <div class="form-row">
                            <label for="first_name">First Name</label>
                            <input type="text" id="name" name="first_name" required>
                        </div>
                        <div class="form-row">
                            <label for="last_name">Last Name</label>
                            <input type="text" id="name" name="last_name" required>
                        </div>
                        <div class="form-row">
                            <label for="email">E-Mail</label>
                            <input type="email" id="email" name="email" required>
                        </div>
                        <div class="form-row">
                            <label for="number">Phone Number</label>
                            <input type="tel" id="number" name="number" placeholder="i.e. 00385981234567" required pattern="^[0-9]+$">
                        </div>
                        <div class="form-row">
                            <label for="date">Date:</label>
                            <input type="date" id="date" name="date" required>
                        </div>
                        <div class="form-row">
                            <label for="time">Time:</label>
                            <select id="time" name="time">
                                <option value="1200">12:00</option>
                                <option value="1300">13:00</option>
                                <option value="1400">14:00</option>
                                <option value="1500">15:00</option>
                                <option value="1600">16:00</option>
                                <option value="1700">17:00</option>
                                <option value="1800">18:00</option>
                                <option value="1900">19:00</option>
                                <option value="2000">20:00</option>
                                <option value="2100">21:00</option>
                                <option value="2200">22:00</option>
                                <option value="2300">23:00</option>
                            </select>
                        </div>
                        <div class="form-row">
                            <input type="submit" value="Submit">
                        </div>
                    </form>                    
                </fieldset>
            </div>
            <div class="description-text text">
                Address:
                <div class="description-text text">
                    Cetinska 12<br>10000 Zagreb<br>Croatia
                </div>
            </div>`;
    content.appendChild(contentText);
};

export { contactPage };