class Form {
    nameInput = null;
    phoneInput = null;
    emailInput = null;
    messageInput = null;

    _placeForRender = null;

    _nameWarning = null;
    _phoneWarning = null;
    _emailWarning = null;

    constructor(placeFrRender) {
        this._placeForRender = placeFrRender;
        this.createElements();

        this.render();
    }

    render() {
        const form = document.createElement("form");

        const nameLabel = document.createElement("label");
        nameLabel.htmlFor = "name"
        nameLabel.innerHTML = "Имя:"

        const phoneLabel = document.createElement("label");
        phoneLabel.htmlFor = "phone"
        phoneLabel.innerHTML = "Телефон:"

        const emailLabel = document.createElement("label");
        emailLabel.htmlFor = "email"
        emailLabel.innerHTML = "Email:"

        const messageLabel = document.createElement("label");
        messageLabel.htmlFor = "message"
        messageLabel.innerHTML = "Сообщение:"



        form.appendChild(nameLabel);
        form.appendChild(this.nameInput);
        form.appendChild(this._nameWarning);
        form.insertAdjacentHTML('beforeend', '<br>')
        form.appendChild(phoneLabel);
        form.appendChild(this.phoneInput);
        form.appendChild(this._phoneWarning);
        form.insertAdjacentHTML('beforeend', '<br>')
        form.appendChild(emailLabel);
        form.appendChild(this.emailInput);
        form.appendChild(this._emailWarning);
        form.insertAdjacentHTML('beforeend', '<br>')
        form.appendChild(messageLabel);
        form.appendChild(this.messageInput);
        form.insertAdjacentHTML('beforeend', '<br>')
        form.insertAdjacentHTML('beforeend', '<button type="submit">Submit</button>')

        this._placeForRender.appendChild(form);

        this.nameInput.addEventListener('change', this.validateName.bind(this));
        this.phoneInput.addEventListener('change', this.validatePhone.bind(this));
        this.emailInput.addEventListener('change', this.validateEmail.bind(this));
    }

    createElements() {
        this.nameInput = document.createElement('input')
        this.nameInput.id = "name"
        this.nameInput.name = "name"
        this.nameInput.type = "text"

        this.phoneInput = document.createElement('input')
        this.phoneInput.id = "phone"
        this.phoneInput.name = "phone"
        this.phoneInput.type = "text"

        this.emailInput = document.createElement('input')
        this.emailInput.id = "email"
        this.emailInput.name = "email"
        this.emailInput.type = "text"

        this.messageInput = document.createElement('textarea')
        this.messageInput.id = "message"
        this.messageInput.name = "message"
        this.messageInput.cols = 40;
        this.messageInput.rows = 4;

        this._nameWarning = document.createElement('div')
        this._nameWarning.classList.add('validate_warning')
        this._nameWarning.innerHTML = 'Имя должно содержать только буквы'

        this._phoneWarning = document.createElement('div')
        this._phoneWarning.classList.add('validate_warning')
        this._phoneWarning.innerHTML = 'Телефон должен иметь вид +7(000)000-0000.'

        this._emailWarning = document.createElement('div')
        this._emailWarning.classList.add('validate_warning')
        this._emailWarning.innerHTML = 'E-mail должен иметь вид mymail@mail.ru'

    }

    validateName() {
        const re = /^[a-zA-Zа-яА-Я]+$/
        if (this.nameInput.value.match(re)) {
            this._nameWarning.classList.remove('active');
        } else {
            this._nameWarning.classList.add('active');
        }
    }

    validatePhone() {
        const re = /^\+7\(\d{3}\)\d{3}-\d{4}$/
        if (this.phoneInput.value.match(re)) {
            this._phoneWarning.classList.remove('active');
        } else {
            this._phoneWarning.classList.add('active');
        }
    }

    validateEmail() {
        const re = /^[a-zA-Z0-9.-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9.-]+$/
        if (this.emailInput.value.match(re)) {
            this._emailWarning.classList.remove('active');
        } else {
            this._emailWarning.classList.add('active');
        }
    }
}

const formElement = document.querySelector('.form')
const form = new Form(formElement);

