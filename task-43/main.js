(function () {

    const inputList = document.querySelectorAll('.form__input');
    const form = document.querySelector('.form');
    const inputName = document.querySelector('#input-name');
    const inputAge = document.querySelector('#input-age');
    const inputEmail = document.querySelector('#input-email');
    const hintName = createInputHint('имя только латинские буквы нижнего и верхнего регистра');
    const hintAge = createInputHint('Возраст только цифры, строго от одного до двух символов, возраст пользователя не менее 7 лет');
    const hintEmail = createInputHint('почта должна содержать строго латинские символы, собачку, и может делить два слова нижним подчеркиванием или точкой, например: test.dev_project@gmail.com');


    function createInputHint(text) {
        const hint = document.createElement('p');
        hint.innerText = text;
        hint.classList.add('input__hint');
        return hint;
    }

    for (let input of inputList) {

        input.oninput = function hintInput() {

            const length = this.value.length;

            if (this.getAttribute('data-name') === "name") {
                if (length > 2) {
                    this.after(hintName);
                    this.style = "margin-bottom: 0";
                    hintName.classList.add('input__hint-show');
                    this.classList.add('form__input-color-red');
                }
                else {
                    hintName.classList.remove('input__hint-show');
                    this.style = "margin-bottom: 15px";
                    this.classList.remove('form__input-color-red');
                }
            }
            if (this.getAttribute('data-name') === "age") {
                if (length > 1) {
                    this.after(hintAge);
                    this.style = "margin-bottom: 0";
                    hintAge.classList.add('input__hint-show');
                    this.classList.add('form__input-color-red');
                }
                else {
                    hintAge.classList.remove('input__hint-show');
                    this.style = "margin-bottom: 15px";
                    this.classList.remove('form__input-color-red');
                }
            }
            if (this.getAttribute('data-name') === "email") {
                if (length > 2) {
                    this.after(hintEmail);
                    this.style = "margin-bottom: 0";
                    hintEmail.classList.add('input__hint-show');
                    this.classList.add('form__input-color-red');
                }
                else {
                    hintEmail.classList.remove('input__hint-show');
                    this.style = "margin-bottom: 15px";
                    this.classList.remove('form__input-color-red');
                }
            }
        }
    }

    inputName.onchange = validationName;
    inputAge.onchange = validationAge;
    inputEmail.onchange = validationEmail;

    function validationName() {
        const length = inputName.value.length;
        const text = inputName.value;
        const regexp = /[a-zA-z]/g;
        const validationText = text.match(regexp);

        if (validationText != null) {
            if (validationText.length === text.length) {
                hintName.classList.remove('input__hint-show');
                inputName.style = "margin-bottom: 15px";
                inputName.classList.add('form__input-color-blue');
                return true;
            }
            else {
                inputName.classList.remove('form__input-color-blue');
                return false;
            }
        }
    }

    function validationAge() {
        const length = inputAge.value.length;
        const text = inputAge.value;
        const regexp = /[0-9]/g;
        const validationText = text.match(regexp);

        if (validationText != null) {
            if (validationText.length === text.length) {
                hintAge.classList.remove('input__hint-show');
                inputAge.style = "margin-bottom: 15px";
                inputAge.classList.add('form__input-color-blue');
                return true;
            }
            else {
                inputAge.classList.remove('form__input-color-blue');
                return false;
            }


        }
    }

    function validationEmail() {
        const length = inputEmail.value.length;
        const text = inputEmail.value;
        const regexp = /[@._A-Za-z]/g;
        const validationText = text.match(regexp);

        if (validationText != null) {
            if (validationText.length === text.length) {

                hintEmail.classList.remove('input__hint-show');
                inputEmail.style = "margin-bottom: 15px";
                inputEmail.classList.add('form__input-color-blue');
                return true;
            }
            else {
                inputEmail.classList.remove('form__input-color-blue');
                return false;
            }
        }
    }
    function clickBtnSend() {

        const btnSend = document.querySelector('.form__button');

        btnSend.onclick = () => {
            console.log(inputName.value.length)
            if (validationName() == true && inputName.value.length != null &&
                validationAge() == true && inputAge.value.length != null &&
                validationEmail() == true && inputEmail.value.length != null
            ) {
                alert('Данные отправлены!');
            }
            else {
                alert('Введите корректные данные!');
            }
        }
    }
    clickBtnSend();


})();

